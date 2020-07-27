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
import {
  faTrashAlt,
  faFilePdf,
  faEdit,
  faEye
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-precios",
  templateUrl: "./precios.component.html",
  styleUrls: ["./precios.component.scss"]
})
export class PreciosComponent implements OnInit {
  faTrash = faTrashAlt;
  faPdf = faFilePdf;
  faEye = faEye;
  faEdit = faEdit;

  isEmpty: boolean;
  endpoint: string;
  name: string;
  title: string;
  addText: string;
  fields: any[];
  values: any[];
  productos: any[];
  precios: any[];
  prices = new FormArray([]);
  isUpdate: boolean[];
  isGuardar: boolean;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initComponent(
      "/precios",
      "Lista de Precios",
      "Agregar Precio",
      "precios"
    );
    this.initForm();
    this.isGuardar = false;
    this.isEmpty = true;
    let auxfields = this.dbHandler.getLocal(this.name + "Fields");
    this.precios = this.dbHandler.getLocal("preciosValues");
    this.productos = this.dbHandler.getLocal("productosValues");

    this.fields = ["Nombre del producto", "Precio"];

    this.values = [];
    this.isUpdate = [];

    /*     this.productos.forEach(producto => {
      let precioProducto;
      precios.forEach(precio => {
        if(precio.producto == producto._id){
          precioProducto = precio.valor;
          return;
        }
      });
      console.log(precioProducto)
      let aux = [
        producto.name,
        precioProducto
      ]
      this.values.push(aux)
    }); */

    if (this.productos.length) {
      this.isEmpty = false;
    }

    this.precios.forEach(precio => {
      let aux = [precio.producto.name, precio.valor];

      let price = new FormGroup({
        valor: new FormControl("")
      });
      price.controls["valor"].setValue(precio.valor);

      this.values.push(aux);

      this.prices.push(price);
      this.isUpdate.push(false);
    });
  }

  initComponent(endpoint, title, addText, name) {
    this.endpoint = endpoint;
    this.title = title;
    this.addText = addText;
    this.name = name;
  }

  isAdmin: boolean;
  isSuperAdmin: boolean;
  isVendedor: boolean;

  openUpdate(event, item) {
    this.isUpdate[item] = true;
    this.isGuardar = true;
  }

  habilitarElemento(event, elemento, isHabilitar) {}

  showError: {};
  errorMsg: string;

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

  filterForm: FormGroup;

  guardarPrecios() {
    let toUpdate = [];
    var pricesControls = this.prices.controls;
    let i = 0;
    for (let control of pricesControls) {
      if (control instanceof FormGroup) {
        if (this.isUpdate[i]) {
          let valor = control.controls["valor"].value;
          let producto = this.precios[i].producto;
          let id = this.precios[i]._id;
          let precio = {
            id,
            valor,
            producto
          };
          toUpdate.push(precio);
        }
        i++;
      }
    }

    let dataArray = [];
    toUpdate.forEach(element => {
      dataArray.push(this.dbHandler.updateSomething(element, "/precios"));
    });
    forkJoin(dataArray).subscribe(info => {
      let i = 0;
      let dataLength = info.length - 1;
      info.forEach(data => {
        if (!data.status) {
          this.openError(data.msg);
          return;
        } else if (i == dataLength) {
          this.dbHandler.actualizar();
        }
        i++;
      });
    });
  }

  initForm() {
    this.filterForm = new FormGroup({
      tipo: new FormControl("")
    });
  }
}
