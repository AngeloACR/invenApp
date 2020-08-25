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
  selector: "app-form-cobro",
  templateUrl: "./form-cobro.component.html",
  styleUrls: ["./form-cobro.component.scss"]
})
export class FormCobroComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  cobro: any;

  @Output()
  onData = new EventEmitter<any>();

  registroCobro: FormGroup;

  bancos: any;
  cuentasPorCobrar: any;
  cuentasT: any;
  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.bancos = this.dbHandler.getLocal("bancosValues");
    this.cuentasT = this.dbHandler.getLocal("cuentastValues");
    this.cuentasPorCobrar = this.dbHandler.getLocal("cuentasporcobrarValues");
    this.initForm();
    this.showError = {
      errorAct: false
    };
  }

  initForm() {
    this.registroCobro = new FormGroup({
      banco: new FormControl(""),
      fecha: new FormControl(""),
      cuentat: new FormControl(""),
      ctaPorCobrar: new FormControl(""),
      monto: new FormControl("")
    });
  }

  getToday(): string {
    return new Date().toISOString().split("T")[0];
  }

  get fCobro() {
    return this.registroCobro.controls;
  }

  endRegistro() {
    var dataAux = this.registroCobro.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {
      fecha: dataAux.fecha,
      banco: dataAux.banco,
      ctaPorCobrar: dataAux.ctaPorCobrar,
      monto: dataAux.monto
    };
    endpoint = "/cobros";
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
    this.registroCobro.reset();
  }

  catchUserErrors() {}
}
