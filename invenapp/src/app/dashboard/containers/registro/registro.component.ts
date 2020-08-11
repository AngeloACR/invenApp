import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-registro",
  templateUrl: "./registro.component.html",
  styleUrls: ["./registro.component.scss"]
})
export class RegistroComponent implements OnInit {
  id: string;

  isCliente: boolean;
  isProveedor: boolean;
  isProducto: boolean;
  isAlmacen: boolean;
  isCompra: boolean;
  isPedido: boolean;
  isUsuario: boolean;
  isRol: boolean;
  isBanco: boolean;
  isMovimientoDiario: boolean;
  isEgreso: boolean;
  isCuentaT: boolean;
  isProforma: boolean;

  editMode = 0;

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
        if (url == "registro") {
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
    this.isEgreso = false;
    this.isProforma = false;
    this.isMovimientoDiario = false;
    this.isCuentaT = false;

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
        this.isCuentaT = true;
        break;
      case "egreso":
        this.isEgreso = true;
        break;
      case "proforma":
        this.isProforma = true;
        break;

      default:
        this.isUsuario = true;
        break;
    }
  }

  onData(event) {
    this.dbHandler.actualizar();
  }
}
