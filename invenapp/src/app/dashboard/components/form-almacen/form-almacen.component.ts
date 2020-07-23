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
  selector: "app-form-almacen",
  templateUrl: "./form-almacen.component.html",
  styleUrls: ["./form-almacen.component.scss"]
})
export class FormAlmacenComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  almacen: any;

  @Output()
  onData = new EventEmitter<any>();

  registroAlmacen: FormGroup;

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
    this.registroAlmacen = new FormGroup({
      code: new FormControl("", Validators.required),
      state: new FormControl("", Validators.required),
      address: new FormControl("", Validators.required),
      city: new FormControl("", Validators.required)
    });
  }

  get fAlmacen() {
    return this.registroAlmacen.controls;
  }

  endRegistro() {
    var dataAux = this.registroAlmacen.value;
    var dataValues;
    let error;
    let refreshList;
    let endpoint;

    dataValues = {
      code: dataAux.code,
      state: dataAux.state,
      city: dataAux.city,
      address: dataAux.address
    };
    endpoint = "/almacenes";
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
    this.registroAlmacen.reset();
  }

  catchUserErrors() {
    let aux1 = this.fAlmacen.code.errors
      ? this.fAlmacen.code.errors.required
      : false;
    let aux2 = this.fAlmacen.state.errors
      ? this.fAlmacen.state.errors.required
      : false;
    let aux3 = this.fAlmacen.address.errors
      ? this.fAlmacen.address.errors.required
      : false;
    let aux4 = this.fAlmacen.city.errors
      ? this.fAlmacen.city.errors.required
      : false;
    let error = aux1 || aux2 || aux3 || aux4;
    return error;
  }
}
