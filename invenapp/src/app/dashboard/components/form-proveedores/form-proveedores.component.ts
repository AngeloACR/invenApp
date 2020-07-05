import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-form-proveedores',
  templateUrl: './form-proveedores.component.html',
  styleUrls: ['./form-proveedores.component.scss']
})
export class FormProveedoresComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  proveedor: number;

  @Output()
  onData = new EventEmitter<any>();

  registroProve: FormGroup;

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
    this.registroProve = new FormGroup({
      ws: new FormControl("", Validators.required),
      mail: new FormControl("", [Validators.required, Validators.email]),
      name: new FormControl("", Validators.required),
      rif: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      ig: new FormControl(""),
    });
  }


  get fProveedor() { 
    return this.registroProve.controls;
  }

  endRegistro() {
    var dataAux = this.registroProve.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
      name: dataAux.name,
      ws: dataAux.ws,
      mail: dataAux.mail,
      address: dataAux.address,
      rif: dataAux.rif,
      ig: dataAux.ig,
    };
    endpoint = "/proveedores";
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
    this.registroProve.reset();
  }

  catchUserErrors(){
    let aux1 = this.fProveedor.name.errors ? this.fProveedor.name.errors.required : false;
    let aux2 = this.fProveedor.mail.errors ? this.fProveedor.mail.errors.required : false;
    let aux3 = this.fProveedor.address.errors ? this.fProveedor.address.errors.required : false;
    let aux4 = this.fProveedor.ws.errors ? this.fProveedor.ws.errors.required : false;
    let aux5 = this.fProveedor.rif.errors ? this.fProveedor.rif.errors.required : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5;
    return error
  }


}
