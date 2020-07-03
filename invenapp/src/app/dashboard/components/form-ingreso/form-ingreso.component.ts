import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-form-ingreso',
  templateUrl: './form-ingreso.component.html',
  styleUrls: ['./form-ingreso.component.scss']
})
export class FormIngresoComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  ingreso: any;

  @Output()
  onData = new EventEmitter<any>();

  registroIngreso: FormGroup;

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
    this.registroIngreso = new FormGroup({
      date: new FormControl("", Validators.required),
    });

  }

  get fIngreso() { 
    return this.registroIngreso.controls;
  }

  endRegistro() {
    var dataAux = this.registroIngreso.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
    };
    endpoint = "/ingresos";
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
    this.registroIngreso.reset();
  }

  catchUserErrors(){
    let aux1 = this.fIngreso.date.errors ? this.fIngreso.date.errors.required : false;
    let error = aux1;
    return error
  }


}