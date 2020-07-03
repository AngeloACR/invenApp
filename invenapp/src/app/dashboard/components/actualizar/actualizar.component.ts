import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { DbHandlerService } from '../../services/db-handler.service'
import { FormBuilder, FormGroup, FormControl, FormArray } from '@angular/forms';

@Component({
  selector: 'app-actualizar',
  templateUrl: './actualizar.component.html',
  styleUrls: ['./actualizar.component.scss']
})
export class ActualizarComponent implements OnInit {
  id: string;

  isCliente: boolean;
  isProveedor: boolean;
  isProducto: boolean;
  isAlmacen: boolean;
  isIngreso: boolean;
  isPedido: boolean;
  isUsuario: boolean;
  isRol: boolean;

  editMode = 0;

  constructor(
    private actRoute: ActivatedRoute,
    private dbHandler: DbHandlerService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.actRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.router.events.subscribe(event => {
      this.actRoute.url.subscribe(value => {
        let url = value[0].path;
        if (url == 'actualizar') {
          if (event instanceof NavigationEnd) {
            this.ngOnInit();
          }
        }

      });
    });
  }
  ngOnInit() {
      this.isProveedor = false;
      this.isCliente = false;
      this.isUsuario = false;
      this.isRol = false;
      this.isPedido = false;
      this.isIngreso = false;
      this.isProducto = false;
      this.isAlmacen = false;

    switch (this.id) {
      case 'cliente':
        this.isCliente = true;
        break;
      case 'proveedor':
        this.isProveedor = true;
        break;
      case 'pedido':
        this.isPedido = true;
        break;
      case 'almacen':
        this.isAlmacen = true;
        break;
      case 'producto':
        this.isProducto = true;
        break;
      case 'ingreso':
        this.isIngreso = true;
        break;
      case 'rol':
        this.isRol = true;
        break;
      default:
        this.isUsuario = true;
        break;
    }
  }

    onData(event){
      this.dbHandler.actualizar();
    }


}

