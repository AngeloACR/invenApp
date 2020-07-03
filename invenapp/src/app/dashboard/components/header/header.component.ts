import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { DbHandlerService } from '../../services/db-handler.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private dbHandler: DbHandlerService,
    private auth: AuthService,
    private router: Router
  ) { }

  ngOnInit() {

  }


   actualizar() {
  this.dbHandler.actualizar();
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }
}
