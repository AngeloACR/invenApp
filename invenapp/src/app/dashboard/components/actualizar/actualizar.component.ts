import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, FormArray } from "@angular/forms";

@Component({
  selector: "app-actualizar",
  templateUrl: "./actualizar.component.html",
  styleUrls: ["./actualizar.component.scss"]
})
export class ActualizarComponent implements OnInit {
  id: string;
  item: string;
  selectedItem: any;

  isCliente: boolean;
  isProveedor: boolean;
  isProducto: boolean;
  isAlmacen: boolean;
  isIngreso: boolean;
  isPedido: boolean;
  isUsuario: boolean;
  isRol: boolean;

  editMode = 0;

  constructor(
    private actRoute: ActivatedRoute,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.actRoute.params.subscribe(params => {
      this.id = params["index"];
      this.item = params["item"];
    });
    this.router.events.subscribe(event => {
      this.actRoute.url.subscribe(value => {
        let url = value[0].path;
        if (url == "actualizar") {
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
    this.isIngreso = false;
    this.isProducto = false;
    this.isAlmacen = false;
    let auxValues;
    switch (this.item) {
      case "cliente":
        this.isCliente = true;
        auxValues = this.dbHandler.getLocal("clientesValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      case "proveedor":
        this.isProveedor = true;
        auxValues = this.dbHandler.getLocal("proveedoresValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      case "pedido":
        this.isPedido = true;
        auxValues = this.dbHandler.getLocal("pedidosValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      case "almacen":
        this.isAlmacen = true;
        auxValues = this.dbHandler.getLocal("almacenesValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      case "producto":
        this.isProducto = true;
        auxValues = this.dbHandler.getLocal("productosValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      case "ingreso":
        this.isIngreso = true;
        auxValues = this.dbHandler.getLocal("ingresosValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      case "rol":
        this.isRol = true;
        auxValues = this.dbHandler.getLocal("rolesValues");
        //            this.selectedItem = auxValues[this.id];
        break;
      default:
        this.isUsuario = true;
        auxValues = this.dbHandler.getLocal("usersValues");
        //            this.selectedItem = auxValues[this.id];
        break;
    }
    this.selectedItem = auxValues[this.id];
  }

  onData(event) {
    this.dbHandler.actualizar();
  }
}
