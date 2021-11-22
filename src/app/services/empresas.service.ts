import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Empresa    }from '../models/Empresa';


@Injectable({
  providedIn: 'root'
})
export class EmpresasService{

  private baseEndpoint= "http://localhost:9000/empresas";

  private headers : HttpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) {

  }


  public getEmpresas(id:number): Observable<Empresa>{
    return this.http.get<Empresa>(`${this.baseEndpoint}/${id}`);
  }

}
