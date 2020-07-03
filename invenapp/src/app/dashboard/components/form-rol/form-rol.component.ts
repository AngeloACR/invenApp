import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-form-rol',
  templateUrl: './form-rol.component.html',
  styleUrls: ['./form-rol.component.scss']
})
export class FormRolComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  rol: any;

  @Output()
  onData = new EventEmitter<any>();

  registroRol: FormGroup;

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
    this.registroRol = new FormGroup({
      name: new FormControl("", Validators.required),
    });

  }

  get fRol() { 
    return this.registroRol.controls;
  }

  endRegistro() {
    var dataAux = this.registroRol.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
    };
    endpoint = "/roles";
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
    this.registroRol.reset();
  }

  catchUserErrors(){
    let aux1 = this.fRol.name.errors ? this.fRol.name.errors.required : false;
    let error = aux1;
    return error
  }


}