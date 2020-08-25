import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { FileHandlerService } from "../../services/file-handler.service";
import { DbHandlerService } from "../../services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import {
  faTrashAlt,
  faFilePdf,
  faEdit,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { DatePipe } from "@angular/common";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-lista-pago",
  templateUrl: "./lista-pago.component.html",
  styleUrls: ["./lista-pago.component.scss"]
})
export class ListaPagoComponent implements OnInit {
  faTrash = faTrashAlt;
  faEye = faEye;
  faPdf = faFilePdf;
  faEdit = faEdit;

  isEmpty: boolean;
  endpoint: string;
  name: string;
  title: string;
  addText: string;
  fields: any[];
  values: any[];

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.initComponent("/pagos", "Lista de Pagos", "Agregar Pago", "pagos");
    this.initForm();
    this.isEmpty = true;
    let auxfields = this.dbHandler.getLocal(this.name + "Fields");
    let auxValues = this.dbHandler.getLocal(this.name + "Values");

    this.fields = ["Id", "Fecha", "Banco", "Monto"];

    this.values = [];

    auxValues.forEach(value => {
      let aux = [value._id, value.movimiento.fecha, value.banco, value.monto];
      this.values.push(aux);
    });

    if (this.values.length) {
      this.isEmpty = false;
    }
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

  deleteItem(event, index) {
    let auxValues = this.dbHandler.getLocal(this.name + "Values");
    let item = auxValues[index];
    var myEnd = this.endpoint;
    let type = this.auth.getType();
    this.isAdmin = type === "Admin";
    this.isVendedor = type === "Vendedor";
    this.isSuperAdmin = type === "SuperAdmin";

    //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
    console.log(this.isSuperAdmin);
    console.log(this.isAdmin);
    if (!this.isSuperAdmin) {
      this.closeConfirm();
      let errorMsg = "Usuario no autorizado";
      this.openError(errorMsg);
    } else {
      this.dbHandler.deleteSomething(item._id, myEnd).subscribe((data: any) => {
        this.closeConfirm();
        if (!data.status) {
          let errorMsg = data.msg;
          this.openError(errorMsg);
        } else {
          this.dbHandler.actualizar();
        }
      });
    }
  }

  deletedItem: any;
  confirmDelete(event, item) {
    this.deletedItem = item;
    this.openConfirm();
  }

  showConfirm: {};

  openConfirm() {
    this.showConfirm = {
      confirmAct: true
    };
  }

  closeConfirm() {
    this.showConfirm = {
      confirmAct: false
    };
  }

  openUpdate(event, item) {
    this.router.navigateByUrl("/actualizar/pago/" + item);
  }

  agregar() {
    this.router.navigateByUrl("/registro/pago");
  }

  habilitarElemento(event, elemento, isHabilitar) {}

  filterForm: FormGroup;

  initForm() {
    this.filterForm = new FormGroup({
      tipo: new FormControl("")
    });
  }

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
}
