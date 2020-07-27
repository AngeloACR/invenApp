import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-form-proforma",
  templateUrl: "./form-proforma.component.html",
  styleUrls: ["./form-proforma.component.scss"]
})
export class FormProformaComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  proforma: any;

  @Output()
  onData = new EventEmitter<any>();

  registroProforma: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
    this.showError = {
      errorAct: false
    };
  }

  initForm() {
    this.registroProforma = new FormGroup({});
  }

  get fProforma() {
    return this.registroProforma.controls;
  }

  endRegistro() {
    var dataAux = this.registroProforma.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {
      name: dataAux.name,
      ws: dataAux.ws,
      mail: dataAux.mail,
      address: dataAux.address,
      ig: dataAux.ig,
      rif: dataAux.rif
    };
    endpoint = "/proformas";
    error = this.catchUserErrors();
    if (error) {
      let errorMsg =
        "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
      this.openError(errorMsg);
    } else {
      this.dbHandler
        .createSomething(dataValues, endpoint)
        .subscribe((data: any) => {
          // data is already a JSON object
          if (!data.status) {
            let errorMsg = data.msg;
            this.openError(errorMsg);
          } else {
            this.onData.emit(data);
          }
        });
    }
  }

  openError(msg) {
    this.errorMsg = msg;
    this.showError = {
      errorAct: true
    };
  }

  closeError() {
    this.showError = {
      errorAct: false
    };
  }

  resetForms() {
    this.registroProforma.reset();
  }

  catchUserErrors() {
    let aux1 = this.fProforma.name.errors
      ? this.fProforma.name.errors.required
      : false;
    let aux2 = this.fProforma.mail.errors
      ? this.fProforma.mail.errors.required
      : false;
    let aux3 = this.fProforma.address.errors
      ? this.fProforma.address.errors.required
      : false;
    let aux4 = this.fProforma.ws.errors
      ? this.fProforma.ws.errors.required
      : false;
    let aux5 = this.fProforma.rif.errors
      ? this.fProforma.rif.errors.minlength
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5;
    return error;
  }
}
