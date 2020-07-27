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
  selector: "app-form-cuentas-t",
  templateUrl: "./form-cuentas-t.component.html",
  styleUrls: ["./form-cuentas-t.component.scss"]
})
export class FormCuentasTComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  cuentaT: any;

  @Output()
  onData = new EventEmitter<any>();

  registroCuentast: FormGroup;

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
    this.registroCuentast = new FormGroup({});
  }

  get fCuentast() {
    return this.registroCuentast.controls;
  }

  endRegistro() {
    var dataAux = this.registroCuentast.value;
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
    endpoint = "/cuentast";
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
    this.registroCuentast.reset();
  }

  catchUserErrors() {
    let aux1 = this.fCuentast.name.errors
      ? this.fCuentast.name.errors.required
      : false;
    let aux2 = this.fCuentast.mail.errors
      ? this.fCuentast.mail.errors.required
      : false;
    let aux3 = this.fCuentast.address.errors
      ? this.fCuentast.address.errors.required
      : false;
    let aux4 = this.fCuentast.ws.errors
      ? this.fCuentast.ws.errors.required
      : false;
    let aux5 = this.fCuentast.rif.errors
      ? this.fCuentast.rif.errors.minlength
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5;
    return error;
  }
}
