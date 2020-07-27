import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { SharedModule } from "./shared/shared.module";
import { DatePipe } from "@angular/common";
import { FileValueAccessor } from "./directives/fileControl";
import { FileValidator } from "./directives/fileValidator";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { LoginComponent } from "./containers/login/login.component";
import { ResetPassComponent } from "./containers/reset-pass/reset-pass.component";

import { registerLocaleData } from "@angular/common";
import localeVE from "@angular/common/locales/es-VE";
import { FormUsuarioComponent } from "./components/form-usuario/form-usuario.component";
import { RegistroComponent } from './containers/registro/registro.component';
import { RestorePassComponent } from './containers/restore-pass/restore-pass.component';

registerLocaleData(localeVE, "es-VE");

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPassComponent,
    FileValueAccessor,
    FileValidator,
    FormUsuarioComponent,
    RegistroComponent,
    RestorePassComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DashboardModule,
    SharedModule,
    FontAwesomeModule
  ],
  entryComponents: [],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: "es-VE" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
