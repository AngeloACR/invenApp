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
  selector: "app-form-pedido",
  templateUrl: "./form-pedido.component.html",
  styleUrls: ["./form-pedido.component.scss"]
})
export class FormPedidoComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  pedido: any;

  cliente: any;
  vendedor: any;
  observaciones: any;
  estado: any;

  isVendedor: boolean;
  isSuperAdmin: boolean;
  isAdmin: boolean;

  clientes: any;
  vendedores: any;
  productos: any;
  precios: any;

  @Output()
  onData = new EventEmitter<any>();

  registroPedido: FormGroup;

  productosPedidos = new FormArray([]);

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
    this.registroPedido.controls["estado"].setValue("Bloqueada");
    this.registroPedido.controls["estado"].disable();
    switch (type) {
      case "Vendedor":
        this.vendedor = this.auth.getId();
        this.registroPedido.controls["vendedor"].setValue(this.vendedor);
        this.registroPedido.controls["vendedor"].disable();
        break;
      case "Admin":
        break;

      default:
        break;
    }
    this.showError = {
      errorAct: false
    };
  }

  getValues() {
    this.clientes = this.dbHandler.getLocal("clientesValues");
    this.productos = this.dbHandler.getLocal("productosValues");
    this.precios = this.dbHandler.getLocal("preciosValues");
    this.vendedores = [];
    let users = this.dbHandler.getLocal("usersValues");
    for (var i = 0; i < users.length; i++) {
      if (users[i]["type"] === "Vendedor") {
        this.vendedores.push(users[i]);
      }
    }
  }

  initForm() {
    this.registroPedido = new FormGroup({
      cliente: new FormControl("", Validators.required),
      vendedor: new FormControl("", Validators.required),
      fecha: new FormControl("", Validators.required),
      estado: new FormControl("", Validators.required),
      observaciones: new FormControl("", Validators.required),
      condicionVenta: new FormControl("", Validators.required),
      productos: this.productosPedidos
    });

    if (this.editMode) {
    }

    this.addProducto();
  }

  addProducto() {
    const productoPedido = new FormGroup({
      producto: new FormControl("", Validators.required),
      qty: new FormControl("", Validators.required)
    });

    this.productosPedidos.push(productoPedido);
  }

  removeProduct(event, index) {
    this.productosPedidos.removeAt(index);
  }

  get fPedido() {
    return this.registroPedido.controls;
  }

  getToday(): string {
    return new Date().toISOString().split("T")[0];
  }

  endRegistro() {
    var dataAux = this.registroPedido.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    let productosPedidos = [];
    let montoTotal = 0;
    var productosPedidosControls = this.productosPedidos.controls;
    for (let control of productosPedidosControls) {
      if (control instanceof FormGroup) {
        let precio;
        let producto = control.controls["producto"].value;
        let qty = control.controls["qty"].value;
        //Buscar precio del producto
        this.precios.forEach(prec => {
          if (prec.producto._id == producto) {
            precio = prec.valor;
            return;
          }
        });
        let montoProductoAux = precio * qty;
        montoTotal += montoProductoAux;
        let montoProducto = montoProductoAux.toFixed(2);
        let productoPedido = {
          producto,
          qty,
          montoProducto,
          precio
        };
        productosPedidos.push(productoPedido);
      }
    }

    let montoTotalAux = montoTotal.toFixed(2);

    dataValues = {
      cliente: dataAux.cliente,
      vendedor: dataAux.vendedor,
      fecha: dataAux.fecha,
      estado: dataAux.estado,
      condicionVenta: dataAux.condicionVenta,
      observaciones: dataAux.observaciones,
      montoTotal: montoTotalAux,
      productosPedidos: productosPedidos
    };

    endpoint = "/pedidos";
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
    this.registroPedido.reset();
  }

  catchUserErrors() {
    let aux1 = this.fPedido.fecha.errors
      ? this.fPedido.fecha.errors.required
      : false;
    let error = aux1;
    return error;
  }
}
