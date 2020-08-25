import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";
@Component({
  selector: "app-detalle",
  templateUrl: "./detalle.component.html",
  styleUrls: ["./detalle.component.scss"]
})
export class DetalleComponent implements OnInit {
  id: string;

  isCliente: boolean;
  isProveedor: boolean;
  isProducto: boolean;
  isAlmacen: boolean;
  isCompra: boolean;
  isPedido: boolean;
  isUsuario: boolean;
  isRol: boolean;
  isCobro: boolean;
  isPago: boolean;
  isBanco: boolean;
  isMovimientoDiario: boolean;
  isGasto: boolean;
  isCuentasT: boolean;
  isProforma: boolean;
  isCuentasPorPagar: boolean;
  isCuentasPorCobrar: boolean;

  constructor(
    private actRoute: ActivatedRoute,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.actRoute.params.subscribe(params => {
      this.id = params["id"];
    });
    this.router.events.subscribe(event => {
      this.actRoute.url.subscribe(value => {
        let url = value[0].path;
        if (url == "lista") {
          if (event instanceof NavigationEnd) {
            this.ngOnInit();
          }
        }
      });
    });
  }
  ngOnInit() {
    this.isProveedor = false;
    this.isCliente = false;
    this.isUsuario = false;
    this.isRol = false;
    this.isPedido = false;
    this.isCompra = false;
    this.isProducto = false;
    this.isAlmacen = false;
    this.isBanco = false;
    this.isCobro = false;
    this.isPago = false;
    this.isGasto = false;
    this.isProforma = false;
    this.isMovimientoDiario = false;
    this.isCuentasT = false;
    this.isCuentasPorCobrar = false;
    this.isCuentasPorPagar = false;

    switch (this.id) {
      case "cliente":
        this.isCliente = true;
        break;
      case "proveedor":
        this.isProveedor = true;
        break;
      case "pedido":
        this.isPedido = true;
        break;
      case "almacen":
        this.isAlmacen = true;
        break;
      case "producto":
        this.isProducto = true;
        break;
      case "compra":
        this.isCompra = true;
        break;
      case "rol":
        this.isRol = true;
        break;
      case "banco":
        this.isBanco = true;
        break;
      case "movimientodiario":
        this.isMovimientoDiario = true;
        break;
      case "cuentat":
        this.isCuentasT = true;
        break;
      case "gasto":
        this.isGasto = true;
        break;
      case "cobro":
        this.isCobro = true;
        break;
      case "pago":
        this.isPago = true;
        break;
      case "proforma":
        this.isProforma = true;
        break;

      case "cuentasporcobrar":
        this.isCuentasPorCobrar = true;
        break;

      case "cuentasporpagar":
        this.isCuentasPorPagar = true;
        break;

      default:
        this.isUsuario = true;
        break;
    }
  }
}
