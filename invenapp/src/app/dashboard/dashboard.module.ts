import { CommonModule } from '@angular/common';
import { registerLocaleData } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { DbHandlerService } from './services/db-handler.service';

import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidemenuComponent } from './components/sidemenu/sidemenu.component';
import { BlankComponent } from './components/blank/blank.component';

import { FormClientesComponent } from './components/form-clientes/form-clientes.component';
import { FormProveedoresComponent } from './components/form-proveedores/form-proveedores.component';
import { FormAlmacenComponent } from './components/form-almacen/form-almacen.component';
import { FormIngresoComponent } from './components/form-ingreso/form-ingreso.component';
import { FormPedidoComponent } from './components/form-pedido/form-pedido.component';
import { FormProductoComponent } from './components/form-producto/form-producto.component';
import { ListaClientesComponent } from './components/lista-clientes/lista-clientes.component';
import { ListaProveedoresComponent } from './components/lista-proveedores/lista-proveedores.component';
import { ListaAlmacenComponent } from './components/lista-almacen/lista-almacen.component';
import { ListaIngresoComponent } from './components/lista-ingreso/lista-ingreso.component';
import { ListaPedidoComponent } from './components/lista-pedido/lista-pedido.component';
import { ListaProductoComponent } from './components/lista-producto/lista-producto.component';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaComponent } from './components/lista/lista.component';
import { ActualizarComponent } from './components/actualizar/actualizar.component';
import { FormUsuarioComponent } from './components/form-usuario/form-usuario.component';
import { ListaUsuarioComponent } from './components/lista-usuario/lista-usuario.component';
import { FormRolComponent } from './components/form-rol/form-rol.component';
import { ListaRolComponent } from './components/lista-rol/lista-rol.component';
import { CompanyComponent } from './components/company/company.component';
import { FormCompanyComponent } from './components/form-company/form-company.component';

@NgModule({
  declarations: [
    FormClientesComponent, 
    DashboardComponent,
    SidemenuComponent, 
    HeaderComponent, 
    BlankComponent, 

    FormProveedoresComponent, 
    FormAlmacenComponent, 
    FormIngresoComponent, 
    FormPedidoComponent, 
    FormProductoComponent, 
    ListaClientesComponent, 
    ListaProveedoresComponent, 
    ListaAlmacenComponent, 
    ListaIngresoComponent, 
    ListaPedidoComponent, 
    ListaProductoComponent, 
    RegistroComponent, 
    ListaComponent, 
    ActualizarComponent, 
    FormUsuarioComponent, 
    ListaUsuarioComponent, 
    FormRolComponent, 
    ListaRolComponent, CompanyComponent, FormCompanyComponent
    ],
    entryComponents: [
    FormProveedoresComponent, 
    FormAlmacenComponent, 
    FormIngresoComponent, 
    FormPedidoComponent, 
    FormProductoComponent, 
    ListaClientesComponent, 
    ListaProveedoresComponent, 
    ListaAlmacenComponent, 
    ListaIngresoComponent, 
    ListaPedidoComponent, 
    ListaProductoComponent
    ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    SharedModule
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    DbHandlerService,
    DatePipe,
  ],
})
export class DashboardModule { }
