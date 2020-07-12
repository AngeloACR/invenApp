import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { FormBuilder, FormGroup, FormControl, Validators  } from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: 'app-form-company',
  templateUrl: './form-company.component.html',
  styleUrls: ['./form-company.component.scss']
})
export class FormCompanyComponent implements OnInit {

  @Input()
  editMode: number;
  @Input()
  company: any;

  @Output()
  onData = new EventEmitter<any>();

  registroCompany: FormGroup;

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
    this.registroCompany = new FormGroup({
      name: new FormControl("", Validators.required),
      tlf: new FormControl("", Validators.required),
      rif: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      mail: new FormControl("", Validators.required),
    });

    if(this.editMode){
      this.registroCompany.controls['name'].setValue(this.company.name);
      this.registroCompany.controls['tlf'].setValue(this.company.tlf);
      this.registroCompany.controls['address'].setValue(this.company.address);
      this.registroCompany.controls['rif'].setValue(this.company.rif);
      this.registroCompany.controls['mail'].setValue(this.company.mail);

    }

  }


  get fCompany() { 
    return this.registroCompany.controls;
  }

  endRegistro() {
    var dataAux = this.registroCompany.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
      name: dataAux.address,
      tlf: dataAux.tlf,
      rif: dataAux.rif,
      mail: dataAux.mail,
      address: dataAux.address,
      id: this.company._id,
    };
    endpoint = "/company";
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

  endUpdate() {
    var dataAux = this.registroCompany.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
      name: dataAux.name,
      tlf: dataAux.tlf,
      rif: dataAux.rif,
      mail: dataAux.mail,
      address: dataAux.address,
    };
    endpoint = "/company";
    error = this.catchUserErrors();
    if(error){
      let errorMsg = 'Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo'
      this.openError(errorMsg)
    } else{

      this.dbHandler.updateSomething(dataValues, endpoint).subscribe((data: any) => {
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
    this.registroCompany.reset();
  }

  catchUserErrors(){
    let aux1 = this.fCompany.name.errors ? this.fCompany.name.errors.required : false;
    let aux2 = this.fCompany.tlf.errors ? this.fCompany.tlf.errors.required : false;
    let aux3 = this.fCompany.address.errors ? this.fCompany.address.errors.required : false;
    let aux4 = this.fCompany.rif.errors ? this.fCompany.rif.errors.required : false;
    let aux5 = this.fCompany.mail.errors ? this.fCompany.mail.errors.required : false;
    let error = aux1 || aux2 || aux3 || aux4;
    return error
  }


}

