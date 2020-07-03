import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-form-pedido',
  templateUrl: './form-pedido.component.html',
  styleUrls: ['./form-pedido.component.scss']
})
export class FormPedidoComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  pedido: any;

  @Output()
  onData = new EventEmitter<any>();

  registroPedido: FormGroup;

  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.initForm();
        this.showError = {
        errorAct: false
      }
  }

  initForm() {
    this.registroPedido = new FormGroup({
      date: new FormControl("", Validators.required),
    });
    let registroIngreso = new FormGroup({
      producto: new FormControl("", Validators.required),
      almacen: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      unitcost: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      qty: new FormControl("", Validators.required),
      reference: new FormControl("", Validators.required),
    });

    let registroEgreso = new FormGroup({
      cliente: new FormControl("", Validators.required),
      vendedor: new FormControl("", Validators.required),
      type: new FormControl("", Validators.required),
      unitcost: new FormControl("", Validators.required),
      date: new FormControl("", Validators.required),
      qty: new FormControl("", Validators.required),
      reference: new FormControl("", Validators.required),
    });

  }

  get fPedido() { 
    return this.registroPedido.controls;
  }

  endRegistro() {
    var dataAux = this.registroPedido.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
    };
    endpoint = "/pedidos";
    error = this.catchUserErrors();
    if(error){
      let errorMsg = 'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo'
      this.openError(errorMsg)
    } else{

      this.dbHandler.createSomething(dataValues, endpoint).subscribe((data: any) => {
        // data is already a JSON object
        if(!data.status){
          let errorMsg = data.msg;
          this.openError(errorMsg)
        } else{
          this.onData.emit(data);
        }
      });
    }  
  }

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

  resetForms() {
    this.registroPedido.reset();
  }

  catchUserErrors(){
    let aux1 = this.fPedido.date.errors ? this.fPedido.date.errors.required : false;
    let error = aux1;
    return error
  }

}