import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlankComponent } from "./containers/blank/blank.component";
import { RegistroComponent } from "./containers/registro/registro.component";
import { ListaComponent } from "./containers/lista/lista.component";
import { ActualizarComponent } from "./containers/actualizar/actualizar.component";
import { CompanyComponent } from "./containers/company/company.component";
import { PreciosComponent } from "./containers/precios/precios.component";
import { FlujodecajaComponent } from "./containers/flujodecaja/flujodecaja.component";
import { ProyeccionesComponent } from "./containers/proyecciones/proyecciones.component";
import { EstadoDeResultadosComponent } from "./containers/estado-de-resultados/estado-de-resultados.component";
import { DisponibilidadBancariaComponent } from "./containers/disponibilidad-bancaria/disponibilidad-bancaria.component";

import { GuardService as Guard } from "../services/guard.service";

const routes: Routes = [
  {
    path: "",
    component: BlankComponent,
    canActivate: [Guard]
  },
  {
    path: "registro/:id",
    component: RegistroComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "lista/:id",
    component: ListaComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "compañia",
    component: CompanyComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "precios",
    component: PreciosComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "actualizar/:item/:id",
    component: ActualizarComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "flujodecaja",
    component: FlujodecajaComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "proyecciones",
    component: ProyeccionesComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "estadoderesultados",
    component: EstadoDeResultadosComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  },
  {
    path: "disponibilidadbancaria/:id",
    component: DisponibilidadBancariaComponent,
    canActivate: [Guard],
    data: {
      role1: "Admin"
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
  constructor() {}
}
