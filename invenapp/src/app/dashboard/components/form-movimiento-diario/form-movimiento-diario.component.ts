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
  selector: "app-form-movimiento-diario",
  templateUrl: "./form-movimiento-diario.component.html",
  styleUrls: ["./form-movimiento-diario.component.scss"]
})
export class FormMovimientoDiarioComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  movimientoDiario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroMovimientoDiario: FormGroup;

  bancos: any;
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
    this.initForm();
    this.showError = {
      errorAct: false
    };
  }

  initForm() {
    this.registroMovimientoDiario = new FormGroup({
      banco: new FormControl(""),
      cuentat: new FormControl(""),
      descripcion: new FormControl(""),
      monto: new FormControl("")
    });
  }

  get fMovimientoDiario() {
    return this.registroMovimientoDiario.controls;
  }

  endRegistro() {
    var dataAux = this.registroMovimientoDiario.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {
      banco: dataAux.banco,
      cuentat: dataAux.cuentat,
      descripcion: dataAux.descripcion,
      monto: dataAux.monto
    };
    endpoint = "/movimientosdiarios";
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
    this.registroMovimientoDiario.reset();
  }

  catchUserErrors() {}
}
