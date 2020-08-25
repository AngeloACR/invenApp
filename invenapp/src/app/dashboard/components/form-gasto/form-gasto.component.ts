import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
  FormArray
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-form-gasto",
  templateUrl: "./form-gasto.component.html",
  styleUrls: ["./form-gasto.component.scss"]
})
export class FormGastoComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  gasto: any;

  proveedor: any;
  observaciones: any;
  estado: any;

  isVendedor: boolean;
  isSuperAdmin: boolean;
  isAdmin: boolean;

  proveedores: any;
  bancos: any;
  productos: any;
  almacenes: any;
  showPayments: boolean = false;

  @Output()
  onData = new EventEmitter<any>();

  registroGasto: FormGroup;

  pagos = new FormArray([]);

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.getValues();
    this.initForm();
    let type = this.auth.getType();
    switch (type) {
      case "Admin":
        break;
      case "Vendedor":
        break;

      default:
        break;
    }
    this.showError = {
      errorAct: false
    };
  }

  getToday(): string {
    return new Date().toISOString().split("T")[0];
  }

  getValues() {
    this.almacenes = this.dbHandler.getLocal("almacenesValues");
    this.bancos = this.dbHandler.getLocal("bancosValues");
  }

  initForm() {
    this.registroGasto = new FormGroup({
      estadoPago: new FormControl("", Validators.required),
      almacen: new FormControl("", Validators.required),
      montoTotal: new FormControl("", Validators.required),
      descripcion: new FormControl("", Validators.required),
      observaciones: new FormControl("", Validators.required),
      referencia: new FormControl("", Validators.required),
      pagos: this.pagos
    });

    this.addPago();
  }

  addPago() {
    const pago = new FormGroup({
      banco: new FormControl("", Validators.required),
      fecha: new FormControl("", Validators.required),
      monto: new FormControl("", Validators.required)
    });

    this.pagos.push(pago);
  }

  removePago(event, index) {
    this.pagos.removeAt(index);
  }

  get fGasto() {
    return this.registroGasto.controls;
  }

  endRegistro() {
    var dataAux = this.registroGasto.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

         let pagos = [];
    var pagosControls = this.pagos.controls;
    for (let control of pagosControls) {
      if (control instanceof FormGroup) {
        let banco = control.controls["banco"].value;
        let monto = control.controls["monto"].value;
        let fecha = control.controls["fecha"].value;
        let pago = {
          banco,
          monto,
          fecha
        };
        pagos.push(pago);
      }
    } 

    dataValues = {
      estadoPago: dataAux.estadoPago,
      almacen: dataAux.almacen,
      montoTotal: dataAux.montoTotal,
      descripcion: dataAux.descripcion,
      observaciones: dataAux.observaciones,
      referencia: dataAux.referencia,
      pagos: pagos,
    };

    endpoint = "/gastos";
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

  togglePayments() {
    var estadoPago = this.registroGasto.value.estadoPago;
    switch (estadoPago) {
      case "Pagado":
        this.showPayments = true;
        break;

      default:
        this.showPayments = false;
        break;
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
    this.registroGasto.reset();
  }

  catchUserErrors() {
    let aux1 = this.fGasto.fecha.errors
      ? this.fGasto.fecha.errors.required
      : false;
    let error = aux1;
    return error;
  }
}
