import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-lista-clientes',
  templateUrl: './lista-clientes.component.html',
  styleUrls: ['./lista-clientes.component.scss']
})
export class ListaClientesComponent implements OnInit {

  isEmpty: boolean;
  endpoint: string;
  name: string;
  title: string;
  addText: string;
  fields: string[];
  values: string[];

  constructor(
    
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {

  }

  ngOnInit() {
    this.initComponent('/clientes', 'Lista de Clientes', 'Agregar Cliente', 'clientes')
    this.isEmpty = true;

    this.fields = this.dbHandler.getLocal(this.name + 'Fields');
    this.values = this.dbHandler.getLocal(this.name + 'Values');
    if(this.values.length){
      this.isEmpty = false;
    }
    this.initForm();

  }


  initComponent(endpoint, title, addText, name) {
    this.endpoint = endpoint;
    this.title = title;
    this.addText = addText;
    this.name = name;
  }


  deleteItem(event, item) {
    var myEnd = this.endpoint;

    this.dbHandler.deleteSomething(item._id, myEnd)
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
      this.router.navigateByUrl('/actualizar/cliente');
    }

       agregar() {  
      this.router.navigateByUrl('/registro/cliente');
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
}
