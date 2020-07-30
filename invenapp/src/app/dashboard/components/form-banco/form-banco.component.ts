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
  selector: "app-form-banco",
  templateUrl: "./form-banco.component.html",
  styleUrls: ["./form-banco.component.scss"]
})
export class FormBancoComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  banco: any;

  @Output()
  onData = new EventEmitter<any>();

  registroBanco: FormGroup;

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
    this.registroBanco = new FormGroup({
      bank: new FormControl("", Validators.required),
      alias: new FormControl("", Validators.required),
      accountNumber: new FormControl(""),
      status: new FormControl("", Validators.required),
      address: new FormControl(""),
      tlf: new FormControl(""),
      executive: new FormControl(""),
      executiveTlf: new FormControl("")
    });
  }

  get fBanco() {
    return this.registroBanco.controls;
  }

  endRegistro() {
    var dataAux = this.registroBanco.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;
    console.log("here");
    dataValues = {
      bank: dataAux.bank,
      alias: dataAux.alias,
      accountNumber: dataAux.accountNumber,
      status: dataAux.status
    };
    endpoint = "/bancos";
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
    this.registroBanco.reset();
  }

  catchUserErrors() {
    let aux1 = this.fBanco.bank.errors
      ? this.fBanco.bank.errors.required
      : false;
    let aux2 = this.fBanco.alias.errors
      ? this.fBanco.alias.errors.required
      : false;
    let error = aux1 || aux2;
    return error;
  }
}
