import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-form-producto',
  templateUrl: './form-producto.component.html',
  styleUrls: ['./form-producto.component.scss']
})
export class FormProductoComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  producto: any;

  @Output()
  onData = new EventEmitter<any>();

  registroProducto: FormGroup;

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
    this.registroProducto = new FormGroup({
      code: new FormControl("", Validators.required),
      name: new FormControl("", Validators.required),
      brand: new FormControl("", Validators.required),
      description: new FormControl("", Validators.required),
    });

  }


  get fProducto() { 
    return this.registroProducto.controls;
  }

  endRegistro() {
    var dataAux = this.registroProducto.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
      price: dataAux.price,
      brand: dataAux.brand,
      description: dataAux.description,
      name: dataAux.name,
      code: dataAux.code,
    };
    endpoint = "/productos";
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
    this.registroProducto.reset();
  }

  catchUserErrors(){
/*     let aux1 = this.fProducto.price.errors ? this.fProducto.price.errors.required : false;
 */    /* let aux2 = this.fProducto.almacen.errors ? this.fProducto.almacen.errors.required : false;
     */let aux3 = this.fProducto.brand.errors ? this.fProducto.brand.errors.required : false;
    let aux4 = this.fProducto.name.errors ? this.fProducto.name.errors.required : false;
    let aux5 = this.fProducto.code.errors ? this.fProducto.code.errors.required : false;
    /* let aux6 = this.fProducto.proveedor.errors ? this.fProducto.provvedor.errors.required : false;
     */let error = aux3 || aux4 || aux5;
    return error
  }


}


