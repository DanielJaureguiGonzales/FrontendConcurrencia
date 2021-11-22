import { Component, OnInit } from '@angular/core';
import { Empresa } from 'src/app/models/Empresa';
import { EmpresasService } from 'src/app/services/empresas.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']})
export class RecommendationsComponent implements OnInit {

  datos;
  ident;
  ipa;
  her;
  mort;
  result;
  mostrarDatos:Boolean = true;
  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string  = '';

  empresa: Empresa = new Empresa();

  constructor(private service: EmpresasService) {
    this.datos = ["EMPRESA DE TRANSPORTE APOCALIPSIS S.A.","TRANSPORTES Y TURISMO INTERNACIONAL CARLITOS S.A.C",
    "INTERNACIONAL CHALLENGERS S.A.C.","TRANSPORTES LINEA S.A.",
    "EMPRESA DE TRANSPORTES PERU BUS S.A.","EMPE TRANSP SALAZAR EIRL ETRANSA",
    "EMPRESA DE TRANSPORTES GUTARRA S.A.","TRANSPORTES ANITA E.I.R.L.",
    "EXPRESO POWER E.I.R.L.","EXPRESO ANTEZANA HNOS. S.A.",
    "EMPRESA DE TRANSPORTES JOSE HUAPAYA SORIANO S.A.","TRANSPORTE WARI S.A.C.",
    "TRANSPORTES Y TURISMO REYNA S.R.L.","EMPRESA DE TRANSPORTES TICLLAS S.A.C. - E.T.T.I.C.S.A.C.",
    "EMPRESA DE TRANSPORTES INTERPROVINCIAL DE PASAJEROS JULI BUSS SOCIEDAD ANONIMA CERRADA","EMPRESA DE TRANSPORTES EL SOL S.A.",
    "EMPRESA DE TRANSPORTES RONCO PERU S.A.C.","TRANSPORTES CROMOTEX S.A.C.",
    "TRANSMAR EXPRESS SAC","EMPRESA DE TRANSPORTES GRUPO HORNA S.A.C.",
    "ANDORIÑA TOURS S.R.L","EMPRESA DE TRANSPORTES EXPRESO INTERNACIONAL PALOMINO S.A.C.",
    "MOVIL TOURS S.A.","TRANSPORTES MERCEDES S.R.L.",
    "EMPRESA DE TRANSPORTES EXPRESO NACIONAL CERRO DE PASCO S.R.LTDA.","EMPRESA DE TRANSPORTES AVE FENIX S.A.C.",
    "EXPRESO SANCHEZ S.R.L.","PLUMA BUS S.R.L.",
    "TRANSPORTES MENDO EIRL","CORPORACION CHASKIS INDUSTRIA COMERCIO Y SERVICIOS S.A.C.",
    "EMPRESA DE TRANSPORTES FLORES HERMANOS S.C.R.LTDA.","TOURS ANGEL DIVINO S.A.C.",
    "ASESORES Y CONSULTORES VIA SEGURA S.A.C.","EXPRESO INTERNACIONAL MOLINA S.A.C.",
    "EXPRESO TURISMO ANDINO S.A.","EMPRESA DE TRANSPORTES EXPRESO ROMATISA E.I.R.L.",
    "EMPRESA DE TRANSPORTES HEROES DEL PACIFICO S.R.L.","EXPRESO LOS CHANKAS S.R.L.",
    "EMPRESA TURISMO ATAHUALPA SERVICIOS GENERALES S.C.R.L.","EXPRESO MOLINA UNION S.A.C.",
    "TORRES ASOCIADOS S.R.L.","EMPRESA DE TRANSPORTES DE PASAJEROS Y CARGA CAVASSA S.A.C.",
    "SHALOM EXPRESS S.A.C.","ALLINBUS S.A.C.",
    "EMPRESA DE TRANSPORTES KALE S.A.C.","EMPRESA DE TRANSPORTES Y TURISMO JUDITH E.I.R.L.",
    "TRANSANI S.R.L.","AMERICA EXPRESS S.A.",
    "EMPRESA DE TRANSPORTES Y REPRESENTACIONES TURISMO CENTRAL S.A.","EMPRESA DE TRANSPORTES TSP E.I.R.L."];
   }

  ngOnInit(): void {
  }

  capturar() {
    this.mostrarDatos =true;

    let index = this.datos.indexOf(this.opcionSeleccionado);
    let id = index +1;
    this.ident = id;
  }
  activarTabla():void{
    this.service.getEmpresas(this.ident).subscribe((response) =>{
      this.empresa = response
    })
    this.ipa = this.empresa.Ipa;
    this.mort=this.empresa.Mort;
    this.her = this.empresa.Her;
    this.result = this.empresa.Result;
    this.mostrarDatos =false;
  }
}
