import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { DbHandlerService } from "../../services/db-handler.service";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import { faBars } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  faBars = faBars;

  @Output()
  menu = new EventEmitter<any>();

  constructor(
    private dbHandler: DbHandlerService,
    private auth: AuthService,
    private router: Router
  ) {}

  ngOnInit() {}

  tMenu() {
    this.menu.emit();
  }

  actualizar() {
    this.dbHandler.actualizar();
  }

  logout() {
    this.auth.logout();
    window.location.reload();
  }
}
