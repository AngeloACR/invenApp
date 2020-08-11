import { CommonModule } from "@angular/common";
import { registerLocaleData } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { HttpClientModule } from "@angular/common/http";
import { DatePipe } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-routing.module";
import { SharedModule } from "../shared/shared.module";
import { DbHandlerService } from "./services/db-handler.service";

import { DashboardComponent } from "./dashboard.component";
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

import { HeaderComponent } from "./components/header/header.component";
import { SidemenuComponent } from "./components/sidemenu/sidemenu.component";
import { FormClientesComponent } from "./components/form-clientes/form-clientes.component";
import { FormProveedoresComponent } from "./components/form-proveedores/form-proveedores.component";
import { FormAlmacenComponent } from "./components/form-almacen/form-almacen.component";
import { FormCompraComponent } from "./components/form-compra/form-compra.component";
import { FormPedidoComponent } from "./components/form-pedido/form-pedido.component";
import { FormProductoComponent } from "./components/form-producto/form-producto.component";
import { ListaClientesComponent } from "./components/lista-clientes/lista-clientes.component";
import { ListaProveedoresComponent } from "./components/lista-proveedores/lista-proveedores.component";
import { ListaAlmacenComponent } from "./components/lista-almacen/lista-almacen.component";
import { ListaCompraComponent } from "./components/lista-compra/lista-compra.component";
import { ListaPedidoComponent } from "./components/lista-pedido/lista-pedido.component";
import { ListaProductoComponent } from "./components/lista-producto/lista-producto.component";
import { FormUsuarioComponent } from "./components/form-usuario/form-usuario.component";
import { ListaUsuarioComponent } from "./components/lista-usuario/lista-usuario.component";
import { FormRolComponent } from "./components/form-rol/form-rol.component";
import { ListaRolComponent } from "./components/lista-rol/lista-rol.component";
import { FormCompanyComponent } from "./components/form-company/form-company.component";
import { FormProformaComponent } from "./components/form-proforma/form-proforma.component";
import { ListaProformasComponent } from "./components/lista-proformas/lista-proformas.component";
import { FormBancoComponent } from "./components/form-banco/form-banco.component";
import { ListaBancoComponent } from "./components/lista-banco/lista-banco.component";
import { FormEgresoComponent } from "./components/form-egreso/form-egreso.component";
import { ListaEgresoComponent } from "./components/lista-egreso/lista-egreso.component";
import { FormCuentasTComponent } from "./components/form-cuentas-t/form-cuentas-t.component";
import { ListaCuentasTComponent } from "./components/lista-cuentas-t/lista-cuentas-t.component";
import { FormMovimientoDiarioComponent } from "./components/form-movimiento-diario/form-movimiento-diario.component";
import { ListaMovimientoDiarioComponent } from "./components/lista-movimiento-diario/lista-movimiento-diario.component";
import { ListaCuentasPorCobrarComponent } from "./components/lista-cuentas-por-cobrar/lista-cuentas-por-cobrar.component";
import { ListaCuentasPorPagarComponent } from "./components/lista-cuentas-por-pagar/lista-cuentas-por-pagar.component";

import { Dot2commaPipe } from "./pipes/dot2comma.pipe";

@NgModule({
  declarations: [
    FormClientesComponent,
    DashboardComponent,
    SidemenuComponent,
    HeaderComponent,
    BlankComponent,
    RegistroComponent,
    ListaComponent,
    ActualizarComponent,
    CompanyComponent,
    PreciosComponent,
    DisponibilidadBancariaComponent,
    FlujodecajaComponent,
    ProyeccionesComponent,
    EstadoDeResultadosComponent,

    Dot2commaPipe,
    FormProveedoresComponent,
    FormAlmacenComponent,
    FormCompraComponent,
    FormPedidoComponent,
    FormProductoComponent,
    ListaClientesComponent,
    ListaProveedoresComponent,
    ListaAlmacenComponent,
    ListaCompraComponent,
    ListaPedidoComponent,
    ListaProductoComponent,
    FormUsuarioComponent,
    ListaUsuarioComponent,
    FormRolComponent,
    ListaRolComponent,
    FormCompanyComponent,
    FormProformaComponent,
    ListaProformasComponent,
    FormBancoComponent,
    ListaBancoComponent,
    FormEgresoComponent,
    ListaEgresoComponent,
    FormCuentasTComponent,
    ListaCuentasTComponent,
    FormMovimientoDiarioComponent,
    ListaMovimientoDiarioComponent,
    ListaCuentasPorCobrarComponent,
    ListaCuentasPorPagarComponent
  ],
  entryComponents: [
    FormProveedoresComponent,
    FormAlmacenComponent,
    FormCompraComponent,
    FormPedidoComponent,
    FormProductoComponent,
    FormUsuarioComponent,
    FormRolComponent,
    FormCompanyComponent,
    FormProformaComponent,
    FormBancoComponent,
    FormEgresoComponent,
    FormCuentasTComponent,
    FormMovimientoDiarioComponent,

    ListaClientesComponent,
    ListaProveedoresComponent,
    ListaAlmacenComponent,
    ListaCompraComponent,
    ListaPedidoComponent,
    ListaProductoComponent,
    ListaUsuarioComponent,
    ListaRolComponent,
    ListaProformasComponent,
    ListaBancoComponent,
    ListaEgresoComponent,
    ListaCuentasTComponent,
    ListaMovimientoDiarioComponent,
    ListaCuentasPorCobrarComponent,
    ListaCuentasPorPagarComponent
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
  exports: [DashboardComponent],
  providers: [DbHandlerService, DatePipe]
})
export class DashboardModule {}
