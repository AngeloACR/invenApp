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
    this.registroCuentast = new FormGroup({
      nombre: new FormControl(""),
      clasificacion: new FormControl(""),
      naturaleza: new FormControl(""),
      descripcion: new FormControl("")
    });
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
      name: dataAux.nombre,
      clasificacion: dataAux.clasificacion,
      descripcion: dataAux.descripcion,
      naturaleza: dataAux.naturaleza
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
    let aux1 = this.fCuentast.nombre.errors
      ? this.fCuentast.nombre.errors.required
      : false;
    let aux2 = this.fCuentast.clasificacion.errors
      ? this.fCuentast.clasificacion.errors.required
      : false;
    let error = aux1 || aux2;
    return error;
  }
}
