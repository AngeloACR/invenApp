import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { DbHandlerService } from "../../dashboard/services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  login: FormGroup;
  showError: {};
  errorMsg: string;

  constructor(
    private auth: AuthService,
    private dbHandler: DbHandlerService,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit() {
    this.login = new FormGroup({
      username: new FormControl("", Validators.required),
      password: new FormControl("", Validators.required)
    });
  }

  logUser() {
    if (this.catchUserErrors()) {
      let errorMsg =
        "Algunos campos son inválidos. Por favor, revise el formulario e intente de nuevo";
      this.openError(errorMsg);
    } else {
      var data = this.login.value;
      this.auth.login(data).subscribe((logData: any) => {
        if (!logData.status) {
          let errorMsg = logData.msg;
          this.openError(errorMsg);
        } else {
          this.auth.storeData(logData);
          this.actualizar();
        }
      });
    }
  }

  get fLogin() {
    return this.login.controls;
  }

  actualizar() {
    this.dbHandler.actualizar();
  }
  flush() {
    this.login.setValue({
      username: "",
      password: ""
    });
  }
  registro() {
    this.router.navigateByUrl("/registro");
  }
  catchUserErrors() {
    let aux1 = this.fLogin.username.errors
      ? this.fLogin.username.errors.required
      : false;
    let aux2 = this.fLogin.password.errors
      ? this.fLogin.password.errors.required
      : false;
    let error = aux1 || aux2;
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
}
