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
  selector: "app-form-pago",
  templateUrl: "./form-pago.component.html",
  styleUrls: ["./form-pago.component.scss"]
})
export class FormPagoComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  pago: any;

  @Output()
  onData = new EventEmitter<any>();

  registroPago: FormGroup;

  bancos: any;
  cuentasPorPagar: any;
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
    this.cuentasPorPagar = this.dbHandler.getLocal("cuentasporpagarValues");
    this.initForm();
    this.showError = {
      errorAct: false
    };
  }

  initForm() {
    this.registroPago = new FormGroup({
      banco: new FormControl(""),
      fecha: new FormControl(""),
      cuentat: new FormControl(""),
      ctaPorPagar: new FormControl(""),
      monto: new FormControl("")
    });
  }

  get fPago() {
    return this.registroPago.controls;
  }

  getToday(): string {
    return new Date().toISOString().split("T")[0];
  }

  endRegistro() {
    var dataAux = this.registroPago.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {
      banco: dataAux.banco,
      fecha: dataAux.fecha,
      monto: dataAux.monto,
      ctaPorPagar: dataAux.ctaPorPagar
    };
    endpoint = "/pagos";
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
    this.registroPago.reset();
  }

  catchUserErrors() {}
}
