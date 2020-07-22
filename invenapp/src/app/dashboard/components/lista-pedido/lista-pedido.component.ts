import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { faTrashAlt, faFilePdf, faEdit, faEye } from '@fortawesome/free-solid-svg-icons';
import { DatePipe } from '@angular/common'



import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-lista-pedido',
  templateUrl: './lista-pedido.component.html',
  styleUrls: ['./lista-pedido.component.scss']
})
export class ListaPedidoComponent implements OnInit {

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

  constructor(
    public datepipe: DatePipe,
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initComponent('/pedidos', 'Lista de Pedidos', 'Agregar Pedido', 'pedidos');
    this.initForm();
    this.isEmpty = true;
     let auxfields = this.dbHandler.getLocal(this.name + 'Fields');
     let auxValues = this.dbHandler.getLocal(this.name + 'Values');

    this.fields = [
      'Id',
      'Fecha',
      'Cliente',
      'Vendedor',
      'Estado',
      'Observaciones',
      ]

    this.values = [];

    auxValues.forEach(value => {
      let aux = [
        value._id,
        value.fecha,
        value.cliente,
        value.vendedor,
        value.estado,
        value.observaciones,
      ]
      this.values.push(aux)
    });

    if(this.values.length){
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
    let auxValues = this.dbHandler.getLocal(this.name + 'Values');
    let item = auxValues[index];
    var myEnd = this.endpoint;
    let type = this.auth.getType();
    this.isAdmin = (type === 'Admin');
		this.isVendedor = (type === 'Vendedor');
		this.isSuperAdmin = (type === 'SuperAdmin');
    
    //Autorizacion basada en roles. Modificar eventualmente a basada en reglas
    console.log(this.isSuperAdmin)
    console.log(this.isAdmin)
    if(!(this.isAdmin || this.isSuperAdmin)){
          this.closeConfirm();
          let errorMsg = 'Usuario no autorizado';
          this.openError(errorMsg)
    } else{

      this.dbHandler.deleteSomething(item._id, myEnd)
      .subscribe((data: any) => { 
        this.closeConfirm();
        if(!data.status){
          let errorMsg = data.msg;
          this.openError(errorMsg)
        } else{
        this.dbHandler.actualizar();
        }
      });
    }
  }

  deletedItem: any;
  confirmDelete(event, item){
    this.deletedItem = item;
    this.openConfirm();
  }

  showConfirm: {};

  openConfirm(){
    this.showConfirm = {
        confirmAct: true,
      }
  }

  closeConfirm(){
    this.showConfirm = {
        confirmAct: false,
      }
  }

    openUpdate(event, item) {  
      this.router.navigateByUrl('/actualizar/pedido/'+item);
    }

   agregar() {  
      this.router.navigateByUrl('/registro/pedido');
    }


    habilitarElemento(event, elemento, isHabilitar){
      
    }

  showError: {};
  errorMsg: string;

  openError(msg){
    this.errorMsg = msg;
    this.showError = {
        errorAct: true
      }
  }

  closeError() {
    this.showError = {
      errorAct: false
    };
  }

  filterForm: FormGroup;

  initForm(){
    this.filterForm = new FormGroup({
      tipo: new FormControl(""),
    })
  }

  generatePdf(event, i) {
    const documentDefinition = this.getDocumentDefinition(i);
    pdfMake.createPdf(documentDefinition).open();
  }

  getDocHeader(company, correlativo, fecha, vendedor, condicionVenta){
  let headerLeft =  [{
    text: company.name,
    style: 'name'
  },
  {
    text: company.address
  },
  {
    text: company.rif
  },
  {
    text: 'Correo : ' + company.mail,
  },
  {
    text: 'Teléfono : ' + company.tlf,
  }];
  
  let headerRight = [
  this.getProfilePicObject(company),
  ...this.getVendedorObject(vendedor, condicionVenta),
  {
      text: correlativo,
          alignment: 'right',
  },
  {
      text: fecha,
          alignment: 'right',
  },
  ]

        return {
          columns: [
            headerLeft,
            headerRight
          ]
        }
  }

  getDocumentDefinition(i) {

    let reporte = {
      titulo: `Cotización`,
      subtituloA: `Datos del cliente`,
      subtituloB: `Información del pedido`,
    }

    let username = this.auth.getUsername();

    let pedidos = this.dbHandler.getLocal( 'pedidosValues');
    let productos = this.dbHandler.getLocal( 'productosValues');
    let precios = this.dbHandler.getLocal( 'preciosValues');
    let clientes = this.dbHandler.getLocal( 'clientesValues');
    let vendedor;
    let pedido = pedidos[i];
    let users =  this.dbHandler.getLocal('usersValues');
      for (var j = 0; j < users.length; j++) {
        if (users[j]['_id'] === pedido.vendedor) {
          vendedor = users[j];
        }
      }
    let company = this.dbHandler.getLocal( 'companyValues')[0];

    let cliente = clientes[i]

    let id = pedido._id;
     let fecha =this.datepipe.transform(pedido.fecha, 'yyyy-MM-dd');
    let observaciones = pedido.observaciones;
    let productosPedidos = pedido.productosPedidos;
    let montoTotal = pedido.montoTotal;

    let fields=[
      'Item',
      'Código',
      'Descripción',
      'Cantidad',
      'Precio unitario',
      'Subtotal',
    ]

    let values = [];
    let item = 1;
    productosPedidos.forEach(productoPedido => {
      let precioId = productoPedido.producto.precio;
      let qty = productoPedido.qty;
      let precio;
      precios.forEach(prec => {
        if(prec._id == precioId){
          precio = prec.valor;
          return;
        }
      }); 
      let subtotal = productoPedido.montoProducto;
      
      let aux = [
        item,
        productoPedido.producto.code,
        productoPedido.producto.description,
        qty,
        precio,
        subtotal
      ]
      values.push(aux);
      item++;
    });
    let correlativo = '';

    return {
      content: [
        this.getDocHeader(company, correlativo, fecha, vendedor, pedido.condicionVenta),
        {
          text: reporte.titulo,
          bold: true,
          fontSize: 20,
          alignment: 'center',
          margin: [0, 0, 0, 20]
        },
        {
          text: reporte.subtituloA,
          style: 'header'
        },
        this.getClienteObject(cliente),
        {
          text: reporte.subtituloB,
          style: 'header'
        },
        this.getValuesObject(fields, values),
        {
          text: `Monto total: ${montoTotal}`,
          alignment: 'right',
          style: 'name',
        },
        {
          text: 'Observaciones',
          style: 'header'
        },
        {
          text: observaciones
        },
        {
          text: 'Firmas',
          style: 'sign'
        },
        {
          columns : [
              { qr: `${company.name}, tlf: ${company.tlf}`, fit : 100 },
              {
              text: `Procesado por`,
              alignment: 'right',
              }
          ]
        }
      ],
      info: {
        title: reporte.titulo,
        author: username,
        subject: 'REPORTE',
        keywords: 'REPORTE, CONTROL'
      },
        styles: {
          header: {
            fontSize: 18,
            bold: true,
            margin: [0, 20, 0, 10],
            decoration: 'underline'
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
            alignment: 'right',
            italics: true
          },
          tableHeader: {
            bold: true,
          }
        }
    };
  }

  getValuesObject(fields, values) {

    let titleRow = [];
    let widths = []
    let titleContent = []
    let wLength = fields.length;
    for (let i = 0; i < wLength; i++) {
      widths.push('*');
      
    }
    fields.forEach(field => {
      let aux = {
        text: field,
        style: "tableHeader"
      }
      titleRow.push(aux);
    });

      let aux = []
    values.forEach(value => {
      value.forEach(item => {
        let auxb = {
          text: item,
          style: "tableContent"
        }
        aux.push(auxb);
        
      });
      titleContent.push(aux);
    });
    return {
      table: {
        widths: widths,
        body: [
          titleRow,
          ...titleContent,
        ]
      }
    };
  }

  getProfilePicObject(company) {
    if (company.logo) {
      return {
        image: company.logo ,
        width: 75,
        alignment : 'right'
      };
    }
    return null;
  }

getClienteObject(cliente) {


      let block =
        [{
          columns: [
            [{
              text: `Nombre: ${cliente.name}`,
              style: 'jobTitle'
            },
            {
              text: `Teléfono: ${cliente.ws}`,
            },
            {
              text: `Correo: ${cliente.mail}`,
            }],
            [{
              text: `Rif: ${cliente.rif}`,
              alignment: 'right',
              style: 'jobTitle'
            },{
            text: `Dirección: ${cliente.address}`,
            alignment: 'right'
            }
            ]
          ]
        }]

    return {
      table: {
        widths: ['*'],
        body: [
          block
        ]
      }
    };
  }

getVendedorObject(vendedor, condicion) {


  return [{
      text: 'Vendedor : ' + vendedor.name,
          alignment: 'right',
    },
    {
      text: 'Condición de venta : ' + condicion,
          alignment: 'right',
    }];

/*       let block =
        [{
          columns: [
            [{
              text: `Nombre: ${vendedor.name}`,
              style: 'jobTitle'
            }],
            [{
              text: `Condición de venta: ${condicion}`,
              alignment: 'right',
              style: 'jobTitle'
            }]
          ]
        }] */

/*     return {
      table: {
        widths: ['*'],
        body: [
          block
        ]
      }
    };
 */  }



}