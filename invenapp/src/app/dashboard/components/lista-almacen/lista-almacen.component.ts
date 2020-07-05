import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-lista-almacen',
  templateUrl: './lista-almacen.component.html',
  styleUrls: ['./lista-almacen.component.scss']
})
export class ListaAlmacenComponent implements OnInit {

  isEmpty: boolean;
  endpoint: string;
  name: string;
  addText: string;
  fields: any[];
  values: any[];

  title: string;
  filterForm: FormGroup;

  constructor(
    
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initComponent('/almacenes', 'Lista de Almacenes', 'Agregar Almacén', 'almacenes')
    this.initForm();
    this.isEmpty = true;
     let auxfields = this.dbHandler.getLocal(this.name + 'Fields');
     let auxValues = this.dbHandler.getLocal(this.name + 'Values');

    this.fields = [
      'Id',
      'Código',
      'Estado',
      'Ciudad',
      'Dirección',
      ]

    this.values = [];

    auxValues.forEach(value => {
      let aux = [
        value._id,
        value.code,
        value.state,
        value.city,
        value.address,
      ]
      this.values.push(aux)
    });




    if(this.values.length){
      this.isEmpty = false;
    }
  }

  initForm(){
    this.filterForm = new FormGroup({
      tipo: new FormControl(""),
    })
  }

  initComponent(endpoint, title, addText, name) {
    this.endpoint = endpoint;
    this.title = title;
    this.addText = addText;
    this.name = name;
  }


  deleteItem(event, item) {
    var myEnd = this.endpoint;

    this.dbHandler.deleteSomething(item[0], myEnd)
      .subscribe((data: any) => {   // data is already a JSON object
        if(!data.status){
          let errorMsg = data.msg;
          this.openError(errorMsg)
        } else{

        this.dbHandler.actualizar();
        }
      });
  }

    openUpdate(event, item) {  
      this.router.navigateByUrl('/actualizar/almacen');
    }

   agregar() {  
      this.router.navigateByUrl('/registro/almacen');
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

}
