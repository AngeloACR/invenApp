import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-form-clientes",
  templateUrl: "./form-clientes.component.html",
  styleUrls: ["./form-clientes.component.scss"]
})
export class FormClientesComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  cliente: any;

  @Output()
  onData = new EventEmitter<any>();

  registroCliente: FormGroup;

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
    };
  }

  initForm() {
    this.registroCliente = new FormGroup({
      ws: new FormControl("", Validators.required),
      mail: new FormControl("", [Validators.required, Validators.email]),
      name: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      rif: new FormControl("", Validators.required),
      ig: new FormControl("")
    });
  }

  get fCliente() {
    return this.registroCliente.controls;
  }

  endRegistro() {
    var dataAux = this.registroCliente.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {
      name: dataAux.name,
      ws: dataAux.ws,
      mail: dataAux.mail,
      address: dataAux.address,
      ig: dataAux.ig,
      rif: dataAux.rif
    };
    endpoint = "/clientes";
    error = this.catchUserErrors();
    if (error) {
      let errorMsg =
        "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
      this.openError(errorMsg);
    } else {
      this.dbHandler
        .createSomething(dataValues, endpoint)
        .subscribe((data: any) => {
          // data is already a JSON object
          if (!data.status) {
            let errorMsg = data.msg;
            this.openError(errorMsg);
          } else {
            this.onData.emit(data);
          }
        });
    }
  }

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

  resetForms() {
    this.registroCliente.reset();
  }

  catchUserErrors() {
    let aux1 = this.fCliente.name.errors
      ? this.fCliente.name.errors.required
      : false;
    let aux2 = this.fCliente.mail.errors
      ? this.fCliente.mail.errors.required
      : false;
    let aux3 = this.fCliente.address.errors
      ? this.fCliente.address.errors.required
      : false;
    let aux4 = this.fCliente.ws.errors
      ? this.fCliente.ws.errors.required
      : false;
    let aux5 = this.fCliente.rif.errors
      ? this.fCliente.rif.errors.minlength
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5;
    return error;
  }
}
