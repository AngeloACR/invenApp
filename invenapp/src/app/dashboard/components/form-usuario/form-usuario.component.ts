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
import { FileValidator } from "../../../directives/fileValidator";
import { ConfirmPasswordValidator } from "../../../directives/must-match.validator";

@Component({
  selector: "app-form-usuario",
  templateUrl: "./form-usuario.component.html",
  styleUrls: ["./form-usuario.component.scss"]
})
export class FormUsuarioComponent implements OnInit {
  @Input()
  editMode: number;
  @Input()
  usuario: any;

  @Output()
  onData = new EventEmitter<any>();

  registroUsuario: FormGroup;

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
    this.registroUsuario = new FormGroup(
      {
        username: new FormControl("", Validators.required),
        mail: new FormControl("", [Validators.required, Validators.email]),
        name: new FormControl("", Validators.required),
        tlf: new FormControl("", Validators.required),
        tipo: new FormControl("", Validators.required),
        password: new FormControl("", [
          Validators.required,
          Validators.minLength(6)
        ]),
        cpassword: new FormControl("", Validators.required)
      },
      ConfirmPasswordValidator.MatchPassword
    );
  }
  get fUsuario() {
    return this.registroUsuario.controls;
  }

  endRegistro() {
    var userAux = this.registroUsuario.value;
    var userValues;
    let tipo = userAux.tipo;
    let error;
    let refreshList;
    let endpoint;

    userValues = {
      username: userAux.username,
      name: userAux.name,
      tlf: userAux.tlf,
      mail: userAux.mail,
      password: userAux.password,
      type: userAux.tipo
    };

    switch (tipo) {
      case "SuperAdmin":
        endpoint = "/superadmins";
        break;
      case "Vendedor":
        endpoint = "/vendedores";
        break;
      default:
        endpoint = "/admins";

        break;
    }
    error = this.catchUsuarioErrors();
    if (error) {
      let errorMsg =
        "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
      this.openError(errorMsg);
    } else {
      this.dbHandler
        .createSomething(userValues, endpoint)
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

  catchUsuarioErrors() {
    let aux1 = this.fUsuario.name.errors
      ? this.fUsuario.name.errors.required
      : false;
    let aux2 = this.fUsuario.mail.errors
      ? this.fUsuario.mail.errors.required
      : false;
    let aux3 = this.fUsuario.username.errors
      ? this.fUsuario.username.errors.required
      : false;
    let aux4 = this.fUsuario.password.errors
      ? this.fUsuario.password.errors.required
      : false;
    let aux5 = this.fUsuario.password.errors
      ? this.fUsuario.password.errors.minlength
      : false;
    let aux6 = this.fUsuario.cpassword.errors
      ? this.fUsuario.cpassword.errors.required
      : false;
    let aux7 = this.fUsuario.cpassword.errors
      ? this.fUsuario.cpassword.errors.ConfirmPassword
      : false;
    let error = aux1 || aux2 || aux3 || aux4 || aux5 || aux6 || aux7;
    return error;
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
    this.registroUsuario.reset();
  }
}
