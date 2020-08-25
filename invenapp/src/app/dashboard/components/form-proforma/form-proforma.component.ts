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
  precios: any;
  bancos: any;
  preciosAutorizados: any;
  pedidoSelected: boolean = false;
  cobros = new FormArray([]);
  showCobros: boolean = false;

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
    this.precios = this.dbHandler.getLocal("preciosValues");
    this.bancos = this.dbHandler.getLocal("bancosValues");
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
      estadoCobro: new FormControl(""),
      requiereFactura: new FormControl(""),
      productosAutorizados: this.productosAutorizados
    });

    this.addCobro();
  }

  addCobro() {
    const cobro = new FormGroup({
      banco: new FormControl("", Validators.required),
      fecha: new FormControl("", Validators.required),
      monto: new FormControl("", Validators.required)
    });

    this.cobros.push(cobro);
  }

  removeCobro(event, index) {
    this.cobros.removeAt(index);
  }

  toggleCobros() {
    var estadoCobro = this.registroProforma.value.estadoCobro;
    switch (estadoCobro) {
      case "Cobrado":
        this.showCobros = true;
        break;

      default:
        this.showCobros = false;
        break;
    }
  }

  addProducto(productoId) {
    const productoAutorizado = new FormGroup({
      producto: new FormControl(""),
      qty: new FormControl(""),
      price: new FormControl("")
    });
    productoAutorizado.controls["producto"].setValue(productoId);
    this.productosAutorizados.push(productoAutorizado);
  }

  removeProduct(event, index) {
    this.productosAutorizados.removeAt(index);
  }

  get fProforma() {
    return this.registroProforma.controls;
  }

  togglePedido() {
    this.preciosAutorizados = [];
    this.productosAutorizados = new FormArray([]);
    var dataAux = this.registroProforma.value;
    console.log(dataAux);
    this.pedido = this.pedidos[dataAux.pedido];
    console.log(this.pedido);
    let productosPedidos = this.pedido.productosPedidos;
    productosPedidos.forEach(productoPedido => {
      let productoId = productoPedido.producto._id;
      let aux = [];
      this.precios.forEach(precio => {
        if (precio.producto._id == productoId) {
          aux.push(precio.valor);
        }
      });
      this.preciosAutorizados.push(aux);
      this.addProducto(productoId);
    });
    this.pedidoSelected = true;
  }

  endRegistro() {
    var dataAux = this.registroProforma.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    let productosAutorizados = [];
    let montoTotal = 0;
    var productosAutorizadosControls = this.productosAutorizados.controls;
    for (let control of productosAutorizadosControls) {
      if (control instanceof FormGroup) {
        let precio = control.controls["price"].value;
        let producto = control.controls["producto"].value;
        let qty = control.controls["qty"].value;

        let montoProductoAux = precio * qty;
        console.log(montoProductoAux);
        montoTotal += montoProductoAux;
        let montoProducto = montoProductoAux.toFixed(2);
        let productoAutorizado = {
          producto,
          qty,
          montoProducto,
          precio
        };
        productosAutorizados.push(productoAutorizado);
      }
    }

    let cobros = [];
    var cobrosControls = this.cobros.controls;
    for (let control of cobrosControls) {
      if (control instanceof FormGroup) {
        let banco = control.controls["banco"].value;
        let monto = control.controls["monto"].value;
        let fecha = control.controls["fecha"].value;
        let cobro = {
          banco,
          monto,
          fecha
        };
        cobros.push(cobro);
      }
    }

    let montoTotalAux = montoTotal.toFixed(2);

    dataValues = {
      pedido: this.pedido._id,
      fecha: dataAux.fecha,
      referencia: dataAux.referencia,
      reciboDeCobro: dataAux.recibo,
      observaciones: dataAux.observaciones,
      requiereFactura: dataAux.requiereFactura,
      productosAutorizados: productosAutorizados,
      montoTotal: montoTotalAux,
      cliente: this.pedido.cliente._id,
      cobros: cobros
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
