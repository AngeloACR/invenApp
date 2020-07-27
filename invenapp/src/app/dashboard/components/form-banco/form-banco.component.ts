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
  selector: "app-form-banco",
  templateUrl: "./form-banco.component.html",
  styleUrls: ["./form-banco.component.scss"]
})
export class FormBancoComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  banco: any;

  @Output()
  onData = new EventEmitter<any>();

  registroBanco: FormGroup;

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
    this.registroBanco = new FormGroup({});
  }

  get fBanco() {
    return this.registroBanco.controls;
  }

  endRegistro() {
    var dataAux = this.registroBanco.value;
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
    endpoint = "/bancos";
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
    this.registroBanco.reset();
  }

  catchUserErrors() {
    let aux1 = this.fBanco.name.errors
      ? this.fBanco.name.errors.required
      : false;
    let aux2 = this.fBanco.mail.errors
      ? this.fBanco.mail.errors.required
      : false;
    let aux3 = this.fBanco.address.errors
      ? this.fBanco.address.errors.required
      : false;
    let aux4 = this.fBanco.ws.errors ? this.fBanco.ws.errors.required : false;
    let aux5 = this.fBanco.rif.errors
      ? this.fBanco.rif.errors.minlength
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5;
    return error;
  }
}
