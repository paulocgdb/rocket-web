import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Cidade} from "../models/cidade.model";
import {CONFIG} from "../config/config";

@Injectable({
  providedIn: 'root'
})

export class CidadeService {
  constructor(private http: HttpClient) {
  }

  buscarCidades(): Observable<Cidade[]> {
    const url = `${CONFIG.urlApi}/cidades`;
    return this.http.get<Cidade[]>(url);
  }
}
