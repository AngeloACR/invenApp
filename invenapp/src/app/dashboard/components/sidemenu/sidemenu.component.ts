import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { faQuestionCircle, faCalendarPlus, faComments, faIdCard, faUserCog, faAddressBook, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

	boxOn: boolean[];
	menuOn: number;
	prevMenu: number;

	user: any;
	isAdmin: boolean;
	isVendedor: boolean;
	isSuperAdmin: boolean;

	myMenu: any;

	constructor(
		private auth: AuthService
	) {

	}

	ngOnInit() {
		
		this.user = this.auth.decode();
		this.isAdmin = (this.user.type === 'Admin');
		this.isVendedor = (this.user.type === 'Vendedor');
		this.isSuperAdmin = (this.user.type === 'SuperAdmin');
		if(this.isAdmin){
			this.setAdminMenu();
		}else if(this.isVendedor){
			this.setVendedorMenu();
		}else if(this.isSuperAdmin){
			this.setSuperAdminMenu();
		}
	}

	setAdminMenu(){
		this.myMenu = [{
			name: 'Directorio',
			link: '/dir/0',
			id: 0,
			icon: faUserCog,
			boxOn: false, childs: [{
				name: 'Registrar clientes',
				link: '/registro/cliente',
				id: 0
			},{
				name: 'Ver clientes',
				link: '/lista/cliente',
				id: 1
			},{
				name: 'Registrar proveedores',
				link: '/registro/proveedor',
				id: 2
			},{
				name: 'Ver proveedores',
				link: '/lista/proveedor',
				id: 3
			}],
		},{
			name: 'Inventario',
			link: '/inventario/0',
			id: 1,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar almacenes',
				link: '/registro/almacen',
				id: 0
			},{
				name: 'Ver almacen',
				link: '/lista/almacen',
				id: 1
			},{
				name: 'Registrar productos',
				link: '/registro/producto',
				id: 2
			},{
				name: 'Ver disponibilidad de material',
				link: '/lista/producto',
				id: 3
			},{
				name: 'Lista de precios',
				link: '/precios',
				id: 4
			}]
		},,{
			name: 'Compras',
			link: '/compras',
			id: 2,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar compra de mercancia',
				link: '/registro/compra',
				id: 0
			},{
				name: 'Ver compra de mercancia',
				link: '/lista/compra',
				id: 1
			}/* ,{
				name: 'Registrar egreso de mercancia',
				link: '/registro/egreso',
				id: 2
			},{
				name: 'Ver egresos de mercancia',
				link: '/lista/egreso',
				id: 3
			} */],
		},{
			name: 'Ventas',
			link: '/ventas',
			id: 3,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar solicitud de pedido',
				link: '/registro/pedido',
				id: 0
			},{
				name: 'Ver solicitudes de pedido',
				link: '/lista/pedido',
				id: 1
			},{
				name: 'Registrar proforma',
				link: '/registro/proforma',
				id: 2
			},{
				name: 'Ver proformas',
				link: '/lista/proforma',
				id: 3
			}],
		},{
			name: 'Finanzas',
			link: '/finanzas',
			id: 4,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar banco',
				link: '/registro/banco',
				id: 0
			},{
				name: 'Ver bancos',
				link: '/lista/banco',
				id: 1
			},{
				name: 'Disponibilidad bancaria',
				link: '/disponibilidadbancaria',
				id: 2
			},{
				name: 'Flujo de caja',
				link: '/flujodecaja',
				id: 3
			},{
				name: 'Proyecciones',
				link: '/proyecciones',
				id: 4
			}],
		},{
			name: 'Contabilidad',
			link: '/contabilidad',
			id: 5,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar cuenta T',
				link: '/registro/cuentat',
				id: 0
			},{
				name: 'Ver cuentas T',
				link: '/lista/cuentat',
				id: 1
			},{
				name: 'Registrar movimiento diario',
				link: '/registro/movimientodiario',
				id: 2
			},{
				name: 'Ver movimientos diarios',
				link: '/lista/movimientodiario',
				id: 3
			},{
				name: 'Ver cuentas por cobrar',
				link: '/lista/cuentasporcobrar',
				id: 4
			},{
				name: 'Ver cuentas por pagar',
				link: '/lista/cuentasporpagar',
				id: 5
			},{
				name: 'Estado de resultados',
				link: '/estadoderesultados',
				id: 6
			},]
		}];
	}



	setVendedorMenu(){
		this.myMenu = [{
			name: 'Directorio',
			link: '/dir',
			id: 0,
			icon: faUserCog,
			boxOn: false, childs: [{
				name: 'Registrar cliente',
				link: '/registro/cliente',
				id: 0
			},{
				name: 'Ver clientes',
				link: '/lista/cliente',
				id: 1
			}],
		},{
			name: 'Inventario',
			link: '/inventario',
			id: 1,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Ver disponibilidad de material',
				link: '/lista/producto',
				id: 0
			}],
		},{
			name: 'Ventas',
			link: '/ventas',
			id: 2,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar solicitud de pedido',
				link: '/registro/pedido',
				id: 0
			},{
				name: 'Ver solicitudes de pedido',
				link: '/lista/pedido',
				id: 1
			}],
		}];
	}
	
	setSuperAdminMenu(){
		this.myMenu = [{
			name: 'Directorio',
			link: '/dir',
			id: 0,
			icon: faUserCog,
			boxOn: false, childs: [{
				name: 'Registrar clientes',
				link: '/registro/cliente',
				id: 0
			},{
				name: 'Ver clientes',
				link: '/lista/cliente',
				id: 1
			},{
				name: 'Registrar proveedores',
				link: '/registro/proveedor',
				id: 2
			},{
				name: 'Ver proveedor',
				link: '/lista/proveedor',
				id: 3
			}],
		},{
			name: 'Inventario',
			link: '/inventario',
			id: 1,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar almacenes',
				link: '/registro/almacen',
				id: 0
			},{
				name: 'Ver almacen',
				link: '/lista/almacen',
				id: 1
			},{
				name: 'Registrar productos',
				link: '/registro/producto',
				id: 2
			},{
				name: 'Ver disponibilidad de material',
				link: '/lista/producto',
				id: 3
			},{
				name: 'Lista de precios',
				link: '/precios',
				id: 4
			}]
		},{
			name: 'Compras',
			link: '/compras',
			id: 2,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar compra de mercancia',
				link: '/registro/compra',
				id: 0
			},{
				name: 'Ver compra de mercancia',
				link: '/lista/compra',
				id: 1
			},{
				name: 'Registrar gasto',
				link: '/registro/gasto',
				id: 2
			},{
				name: 'Ver gastos',
				link: '/lista/gasto',
				id: 3
			},{
				name: 'Registrar pago',
				link: '/registro/pago',
				id: 4
			},{
				name: 'Ver pagos',
				link: '/lista/pago',
				id: 5
			},{
				name: 'Registrar cuenta por pagar',
				link: '/registro/cuentasporpagar',
				id: 6
			},{
				name: 'Ver cuentas por pagar',
				link: '/lista/cuentasporpagar',
				id: 7
			},],
		},{
			name: 'Ventas',
			link: '/ventas',
			id: 3,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar solicitud de pedido',
				link: '/registro/pedido',
				id: 0
			},{
				name: 'Ver solicitudes de pedido',
				link: '/lista/pedido',
				id: 1
			},{
				name: 'Registrar proforma',
				link: '/registro/proforma',
				id: 2
			},{
				name: 'Ver proformas',
				link: '/lista/proforma',
				id: 3
			},{
				name: 'Registrar cobro',
				link: '/registro/cobro',
				id: 4
			},{
				name: 'Ver cobros',
				link: '/lista/cobro',
				id: 5
			},{
				name: 'Registrar cuenta por cobrar',
				link: '/registro/cuentaporcobrar',
				id: 6
			},{
				name: 'Ver cuentas por cobrar',
				link: '/lista/cuentasporcobrar',
				id: 7
			},],
		},{
			name: 'Finanzas',
			link: '/finanzas',
			id: 4,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar banco',
				link: '/registro/banco',
				id: 0
			},{
				name: 'Ver bancos',
				link: '/lista/banco',
				id: 1
			},{
				name: 'Disponibilidad bancaria',
				link: '/disponibilidadbancaria',
				id: 2
			},{
				name: 'Flujo de caja',
				link: '/flujodecaja',
				id: 3
			},{
				name: 'Proyecciones',
				link: '/proyecciones',
				id: 4
			}],
		},{
			name: 'Contabilidad',
			link: '/contabilidad',
			id: 5,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registrar cuenta T',
				link: '/registro/cuentat',
				id: 0
			},{
				name: 'Ver cuentas T',
				link: '/lista/cuentat',
				id: 1
			},{
				name: 'Estado de resultados',
				link: '/estadoderesultados',
				id: 2
			},]
		},{
			name: 'Administrador',
			link: '/administrador',
			id: 6,
			icon: faCalendarPlus,
			boxOn: false, childs: [{
				name: 'Registro de usuarios',
				link: '/registro/usuario',
				id: 0
			},{
				name: 'Lista de usuarios',
				link: '/lista/usuario',
				id: 1
			},{
				name: 'Registro de roles',
				link: '/registro/rol',
				id: 2
			},{
				name: 'Lista de roles',
				link: '/lista/rol',
				id: 3
			},{
				name: 'Datos de la compañía',
				link: '/compañia',
				id: 4
			}],
		}];
	}

	tMenu(event, item) {
		
		if(this.prevMenu == null){
			this.prevMenu = item.id;
		}

		this.menuOn = item.id;
		if(this.prevMenu != this.menuOn){
			this.closeMenus();
		}
		this.prevMenu = this.menuOn;
		this.myMenu[item.id].boxOn = !this.myMenu[item.id].boxOn
		this.myMenu[item.id].class = {
			aBox: this.myMenu[item.id].boxOn,
		}
	}

	closeMenus() {
		this.myMenu.forEach(item => {
			item.boxOn = false;
			item.class = {
				aBox: false,
			}
		});
	}


}
