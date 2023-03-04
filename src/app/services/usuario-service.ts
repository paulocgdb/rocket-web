import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CONFIG} from "../config/config";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  enviarCandidatura(dados: any) {
    const url = `${CONFIG.urlApi}/cadastrar-candidatura`;
    return this.http.post(url, dados);
  }

  obterCandidaturas(): Observable<any> {
    const url = `${CONFIG.urlApi}`;
    return this.http.get(url);
  }
}
