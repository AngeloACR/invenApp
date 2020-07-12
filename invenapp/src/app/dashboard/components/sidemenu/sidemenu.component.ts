import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { faQuestionCircle, faCalendarPlus, faComments, faIdCard, faUserCog, faAddressBook, faDollarSign } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-sidemenu',
	templateUrl: './sidemenu.component.html',
	styleUrls: ['./sidemenu.component.scss']
})
export class SidemenuComponent implements OnInit {

	boxOn: boolean;
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
			childs: [{
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
			link: '/inventario/0',
			id: 1,
			icon: faCalendarPlus,
			childs: [{
				name: 'Registrar almacenes',
				link: '/registro/almacen',
				id: 0
			},{
				name: 'Ver almacen',
				link: '/lsitaalmacen',
				id: 1
			},{
				name: 'Registrar productos',
				link: '/registro/producto',
				id: 2
			},{
				name: 'Ver disponibilidad de material',
				link: '/lista/productos',
				id: 3
			},{
				name: 'Registrar ingreso de mercancia',
				link: '/registro/ingreso',
				id: 4
			},{
				name: 'Ver ingreso de mercancia',
				link: '/lista/ingreso',
				id: 5
			},{
				name: 'Registrar solicitud de pedido',
				link: '/registro/pedido',
				id: 6
			},{
				name: 'Ver solicitudes de pedido',
				link: '/lista/pedidos',
				id: 7
			}],
		}];
	}


	setVendedorMenu(){
		this.myMenu = [{
			name: 'Directorio',
			link: '/dir/0',
			id: 0,
			icon: faUserCog,
			childs: [{
				name: 'Registrar cliente',
				link: '/registro/cliente',
				id: 0
			},{
				name: 'Ver clientes',
				link: '/lista/cliente',
				id: 0
			}],
		},{
			name: 'Inventario',
			link: '/inventario/0',
			id: 1,
			icon: faCalendarPlus,
			childs: [{
				name: 'Ver disponibilidad de material',
				link: '/lista/productos',
				id: 1
			},{
				name: 'Registrar solicitud de pedido',
				link: '/registro/pedido',
				id: 2
			},{
				name: 'Ver solicitudes de pedido',
				link: '/lista/pedidos',
				id: 3
			}],
		}];
	}
	
	setSuperAdminMenu(){
		this.myMenu = [{
			name: 'Directorio',
			link: '/dir/0',
			id: 0,
			icon: faUserCog,
			childs: [{
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
		},
		{
			name: 'Inventario',
			link: '/inventario/0',
			id: 1,
			icon: faCalendarPlus,
			childs: [{
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
				name: 'Registrar ingreso de mercancia',
				link: '/registro/ingreso',
				id: 4
			},{
				name: 'Ver ingreso de mercancia',
				link: '/lista/ingreso',
				id: 5
			},{
				name: 'Registrar solicitud de pedido',
				link: '/registro/pedido',
				id: 6
			},{
				name: 'Ver solicitudes de pedido',
				link: '/lista/pedido',
				id: 7
			}],
		},{
			name: 'Administrador',
			link: '/adm/0',
			id: 2,
			icon: faUserCog,
			class: {
				aBox: false
			},
			childs: [{
				name: 'Registrar usuarios',
				link: '/registro/usuario',
				id: 0
			},{
				name: 'Ver usuarios',
				link: '/lista/usuario',
				id: 1
			},{
				name: 'Registrar Roles',
				link: '/registro/rol',
				id: 2
			},{
				name: 'Ver roles',
				link: '/lista/rol',
				id: 3
			},{
				name: 'Datos de la Compañía',
				link: '/compañia',
				id: 4
			}],
		}];
	}

	tMenu(event, item) {
		this.closeMenus();
		this.myMenu[item.id].class = {
			aBox: true,
		}
	}

	closeMenus() {
		this.myMenu.forEach(item => {
			item.class = {
				aBox: false,
			}
		});
	}


}
