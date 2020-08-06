import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../../../services/auth.service";
import { FileHandlerService } from "../../services/file-handler.service";
import { DbHandlerService } from "../../services/db-handler.service";
import {
  FormBuilder,
  FormGroup,
  FormControl,
  Validators
} from "@angular/forms";
import { Router } from "@angular/router";
import { forkJoin } from "rxjs";
import {
  faTrashAlt,
  faFilePdf,
  faEdit,
  faEye
} from "@fortawesome/free-solid-svg-icons";
import { DatePipe } from "@angular/common";

import pdfMake from "pdfmake/build/pdfmake";
import pdfFonts from "pdfmake/build/vfs_fonts";
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: "app-lista-egreso",
  templateUrl: "./lista-egreso.component.html",
  styleUrls: ["./lista-egreso.component.scss"]
})
export class ListaEgresoComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
