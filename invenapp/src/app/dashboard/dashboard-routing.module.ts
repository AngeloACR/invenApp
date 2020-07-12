import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlankComponent } from './components/blank/blank.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaComponent } from './components/lista/lista.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { CompanyComponent } from './components/company/company.component';

import { 
  GuardService as Guard 
} from '../services/guard.service';

const routes: Routes = [
  {
    path: '', 
    component: BlankComponent,
    canActivate: [Guard],  
  },
  {
    path: 'registro/:id', 
    component: RegistroComponent,
    canActivate: [Guard],
    data: {
      role1: 'Admin'
    }
  },
  {
    path: 'lista/:id', 
    component: ListaComponent,
    canActivate: [Guard],
    data: {
      role1: 'Admin'
    }
  },
  {
    path: 'compañia', 
    component: CompanyComponent,
    canActivate: [Guard],
    data: {
      role1: 'Admin'
    }
  },
  {
    path: 'actualizar/:item/:id', 
    component: ActualizarComponent,
    canActivate: [Guard],
    data: {
      role1: 'Admin'
    }
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {

  constructor(
  ) {

	}

 }
