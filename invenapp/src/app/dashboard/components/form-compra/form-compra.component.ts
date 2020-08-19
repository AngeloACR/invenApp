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
  selector: "app-form-compra",
  templateUrl: "./form-compra.component.html",
  styleUrls: ["./form-compra.component.scss"]
})
export class FormCompraComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  compra: any;

  proveedor: any;
  observaciones: any;
  estado: any;

  isVendedor: boolean;
  isSuperAdmin: boolean;
  isAdmin: boolean;

  proveedores: any;
  productos: any;
  almacenes: any;

  @Output()
  onData = new EventEmitter<any>();

  registroCompra: FormGroup;

  productosIngresos = new FormArray([]);

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
    this.proveedores = this.dbHandler.getLocal("proveedoresValues");
    this.productos = this.dbHandler.getLocal("productosValues");
    this.almacenes = this.dbHandler.getLocal("almacenesValues");
    console.log(this.proveedores);
    console.log(this.productos);
  }

  initForm() {
    this.registroCompra = new FormGroup({
      proveedor: new FormControl("", Validators.required),
      fecha: new FormControl("", Validators.required),
      almacen: new FormControl("", Validators.required),
      estado: new FormControl("", Validators.required),
      observaciones: new FormControl("", Validators.required),
      referencia: new FormControl("", Validators.required),
      productos: this.productosIngresos
    });

    this.addProducto();
  }

  addProducto() {
    const productoIngreso = new FormGroup({
      producto: new FormControl("", Validators.required),
      qty: new FormControl("", Validators.required),
      price: new FormControl("")
    });

    this.productosIngresos.push(productoIngreso);
  }

  removeProduct(event, index) {
    this.productosIngresos.removeAt(index);
  }

  get fCompra() {
    return this.registroCompra.controls;
  }

  endRegistro() {
    var dataAux = this.registroCompra.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    let productosIngresos = [];
    var productosIngresosControls = this.productosIngresos.controls;
    for (let control of productosIngresosControls) {
      if (control instanceof FormGroup) {
        let producto = control.controls["producto"].value;
        let qty = control.controls["qty"].value;
        let unitcost = control.controls["price"].value;
        let productoIngreso = {
          producto,
          qty,
          unitcost
        };
        productosIngresos.push(productoIngreso);
      }
    }

    dataValues = {
      proveedor: dataAux.proveedor,
      fecha: dataAux.fecha,
      estado: dataAux.estado,
      almacen: dataAux.almacen,
      observaciones: dataAux.observaciones,
      referencia: dataAux.referencia,
      productosIngresados: productosIngresos
    };

    endpoint = "/compras";
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
    this.registroCompra.reset();
  }

  catchUserErrors() {
    let aux1 = this.fCompra.fecha.errors
      ? this.fCompra.fecha.errors.required
      : false;
    let error = aux1;
    return error;
  }
}
