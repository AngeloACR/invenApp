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

  pedidos: any;

  pedidoSelected: boolean = false;

  pedido: any;

  registroProforma: FormGroup;

  showError: {};
  errorMsg: string;
  productosAutorizados = new FormArray([]);

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.pedidos = this.dbHandler.getLocal("pedidosValues");
    this.initForm();
    this.showError = {
      errorAct: false
    };
  }

  initForm() {
    this.registroProforma = new FormGroup({
      fecha: new FormControl(""),
      pedido: new FormControl("", Validators.required),
      referencia: new FormControl(""),
      recibo: new FormControl(""),
      observaciones: new FormControl(""),
      requiereFactura: new FormControl(""),
      condicionVenta: new FormControl(""),
      montoSinIva: new FormControl(""),
      montoConIva: new FormControl(""),
      iva: new FormControl(""),
      productosAutorizados: this.productosAutorizados
    });
  }

  addProducto() {
    const productoAutorizado = new FormGroup({
      producto: new FormControl(""),
      qty: new FormControl(""),
      price: new FormControl("")
    });

    this.productosAutorizados.push(productoAutorizado);
  }

  removeProduct(event, index) {
    this.productosAutorizados.removeAt(index);
  }

  get fProforma() {
    return this.registroProforma.controls;
  }

  togglePedido() {
    var dataAux = this.registroProforma.value;
    this.pedido = dataAux.pedido;
    let productosPedidos = this.pedido.productosPedidos;
    productosPedidos.forEach(productoPedido => {
      this.addProducto();
    });
    this.pedidoSelected = true;
  }

  endRegistro() {
    var dataAux = this.registroProforma.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {};
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
    let aux1 = this.fProforma.pedido.errors
      ? this.fProforma.pedido.errors.required
      : false;
    let error = aux1;
    return error;
  }

  getToday(): string {
    return new Date().toISOString().split("T")[0];
  }
}
