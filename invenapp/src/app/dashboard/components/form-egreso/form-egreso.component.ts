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
  selector: "app-form-egreso",
  templateUrl: "./form-egreso.component.html",
  styleUrls: ["./form-egreso.component.scss"]
})
export class FormEgresoComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  egreso: any;

  @Output()
  onData = new EventEmitter<any>();

  registroEgreso: FormGroup;

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
    this.registroEgreso = new FormGroup({});
  }

  get fEgreso() {
    return this.registroEgreso.controls;
  }

  endRegistro() {
    var dataAux = this.registroEgreso.value;
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
    endpoint = "/egresos";
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
    this.registroEgreso.reset();
  }

  catchUserErrors() {
    let aux1 = this.fEgreso.name.errors
      ? this.fEgreso.name.errors.required
      : false;
    let aux2 = this.fEgreso.mail.errors
      ? this.fEgreso.mail.errors.required
      : false;
    let aux3 = this.fEgreso.address.errors
      ? this.fEgreso.address.errors.required
      : false;
    let aux4 = this.fEgreso.ws.errors ? this.fEgreso.ws.errors.required : false;
    let aux5 = this.fEgreso.rif.errors
      ? this.fEgreso.rif.errors.minlength
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5;
    return error;
  }
}
