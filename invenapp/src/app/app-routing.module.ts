import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./containers/login/login.component";
import { ResetPassComponent } from "./containers/reset-pass/reset-pass.component";

import { RegistroComponent } from "./containers/registro/registro.component";
import { RestorePassComponent } from "./containers/restore-pass/restore-pass.component";

import { GuardService as Guard } from "./services/guard.service";

const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    canActivate: [Guard]
  },
  {
    path: "reset",
    component: ResetPassComponent
  },
  {
    path: "appregistro",
    component: ResetPassComponent
  },
  {
    path: "restore",
    component: RestorePassComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
