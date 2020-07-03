import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';

import { 
  GuardService as Guard 
} from './services/guard.service';

const routes: Routes = [
  {
    path: 'login', 
    component: LoginComponent,
    canActivate: [Guard],
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
