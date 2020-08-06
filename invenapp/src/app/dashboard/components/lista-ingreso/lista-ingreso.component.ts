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
  selector: "app-lista-ingreso",
  templateUrl: "./lista-ingreso.component.html",
  styleUrls: ["./lista-ingreso.component.scss"]
})
export class ListaIngresoComponent implements OnInit {
  faTrash = faTrashAlt;
  faPdf = faFilePdf;
  faEdit = faEdit;
  faEye = faEye;

  isEmpty: boolean;
  endpoint: string;
  title: string;
  name: string;
  addText: string;
  fields: any[];
  values: any[];

  constructor(
    //    private pdf: PdfHandlerService,
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {
    //    this.pdf.load('pdfMake', 'vfsFonts');
  }

  ngOnInit() {
    this.initComponent(
      "/ingresos",
      "Lista de Ingresos",
      "Agregar Ingreso",
      "ingresos"
    );
    this.initForm();
    this.isEmpty = true;
    let auxfields = this.dbHandler.getLocal(this.name + "Fields");
    let auxValues = this.dbHandler.getLocal(this.name + "Values");

    this.fields = [
      "Id",
      "Fecha",
      "Almacen",
      "Estado",
      "Observaciones",
      "Referencia de compra"
    ];

    this.values = [];

    auxValues.forEach(value => {
      let aux = [
        value._id,
        value.fecha,
        value.almacen,
        value.estado,
        value.observaciones,
        value.referencia
      ];
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
    console.log(item);
    var myEnd = this.endpoint;
    let type = this.auth.getType();
    this.isAdmin = type === "Admin";
    this.isVendedor = type === "Vendedor";
    this.isSuperAdmin = type === "SuperAdmin";

    //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
    console.log(this.isSuperAdmin);
    console.log(this.isAdmin);
    if (!(this.isAdmin || this.isSuperAdmin)) {
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
  openUpdate(event, index) {
    this.router.navigateByUrl("/actualizar/ingreso/" + index);
  }

  agregar() {
    this.router.navigateByUrl("/registro/ingreso");
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

  initForm() {
    this.filterForm = new FormGroup({
      tipo: new FormControl("")
    });
  }

  generatePdf(event, i) {
    const documentDefinition = this.getDocumentDefinition(i);
    pdfMake.createPdf(documentDefinition).open();
  }

  getDocHeader(company, correlativo, fecha) {
    let headerLeft = [
      {
        text: company.name,
        style: "name"
      },
      {
        text: company.address
      },
      {
        text: "Correo : " + company.email
      },
      {
        text: "Teléfono : " + company.tlf
      }
    ];

    let headerRight = [
      this.getProfilePicObject(company),
      {
        text: correlativo
      },
      {
        text: fecha
      }
    ];

    return {
      columns: [headerLeft, headerRight]
    };
  }

  getDocumentDefinition(i) {
    let reporte = {
      titulo: `Reporte de ${this.name}`,
      subtituloA: `Detalle de ${this.name}`,
      subtituloB: `Productos ingresados`
    };

    let username = this.auth.getUsername();

    let ingresos = this.dbHandler.getLocal("ingresosValues");
    let productos = this.dbHandler.getLocal("productosValues");
    let company = this.dbHandler.getLocal("companyValues")[0];
    let almacenes = this.dbHandler.getLocal("almacenesValues");
    console.log(company);
    let ingreso = ingresos[i];
    let id = ingreso._id;
    let fecha = ingreso.fecha;
    let observaciones = ingreso.observaciones;
    let productosIngresados = ingreso.productosIngresados;

    let fieldsA = ["Almacen", "Estatus", "Referencia"];
    let almacenId = ingreso.almacen;
    let almacenCode;
    almacenes.forEach(almacen => {
      if (almacen._id == almacenId) {
        almacenCode = almacen.code;
      }
    });
    let valuesA = [[almacenCode, ingreso.estado, ingreso.referencia]];

    let fieldsB = ["Producto", "Cantidad", "Costo unitario"];

    let valuesB = [];
    productosIngresados.forEach(productoIngresado => {
      let productoId = productoIngresado.producto;
      let qty = productoIngresado.qty;
      let costo = productoIngresado.unitcost;
      let productoName;
      productos.forEach(producto => {
        if (producto._id == productoId) {
          productoName = producto.name;
        }
      });

      let aux = [productoName, qty, costo];
      valuesB.push(aux);
    });
    let correlativo = "";

    return {
      content: [
        {
          text: reporte.titulo,
          bold: true,
          fontSize: 20,
          alignment: "center",
          margin: [0, 0, 0, 20]
        },
        this.getDocHeader(company, correlativo, fecha),
        {
          text: reporte.subtituloA,
          style: "header"
        },
        this.getValuesObject(fieldsA, valuesA),
        {
          text: reporte.subtituloB,
          style: "header"
        },
        this.getValuesObject(fieldsB, valuesB),
        {
          text: "Observaciones",
          style: "header"
        },
        {
          text: observaciones
        },
        {
          text: "Firmas",
          style: "sign"
        },
        {
          columns: [
            { qr: id, fit: 100 },
            {
              text: `Procesado por`,
              alignment: "right"
            }
          ]
        }
      ],
      info: {
        title: reporte.titulo,
        author: username,
        subject: "REPORTE",
        keywords: "REPORTE, CONTROL"
      },
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          margin: [0, 20, 0, 10],
          decoration: "underline"
        },
        name: {
          fontSize: 16,
          bold: true
        },
        jobTitle: {
          fontSize: 14,
          bold: true,
          italics: true
        },
        sign: {
          margin: [0, 50, 0, 10],
          alignment: "right",
          italics: true
        },
        tableHeader: {
          bold: true
        }
      }
    };
  }

  getValuesObject(fields, values) {
    let titleRow = [];
    let widths = [];
    let titleContent = [];
    let wLength = fields.length;
    for (let i = 0; i < wLength; i++) {
      widths.push("*");
    }
    fields.forEach(field => {
      let aux = {
        text: field,
        style: "tableHeader"
      };
      titleRow.push(aux);
    });

    let aux = [];
    values.forEach(value => {
      value.forEach(item => {
        let auxb = {
          text: item,
          style: "tableContent"
        };
        aux.push(auxb);
      });
      titleContent.push(aux);
    });
    return {
      table: {
        widths: widths,
        body: [titleRow, ...titleContent]
      }
    };
  }

  getProfilePicObject(company) {
    if (company.logo) {
      return {
        image: company.logo,
        width: 75,
        alignment: "right"
      };
    }
    return null;
  }
}
