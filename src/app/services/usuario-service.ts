import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CONFIG} from "../config/config";
import {Observable} from "rxjs";
import {Usuario} from "../models/usuario.model";

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  constructor(private http: HttpClient) {
  }

  enviarCandidatura(usuario: Usuario, arquivos: File[]): Observable<any> {
    let formData = new FormData();

    for (let arquivo of arquivos) {
      formData.append('documentos', arquivo, arquivo.name);
    }

    let usuarioJS = new Blob([JSON.stringify(usuario)], {type: 'application/json'});
    formData.append('usuario', usuarioJS);

    const url = `${CONFIG.urlApi}/candidaturas/cadastrar`;

    return this.http.post<any>(url, formData);
  }

  obterCandidaturas(idUsuario: number): Observable<any> {
    const url = `${CONFIG.urlApi}/candidaturas/${idUsuario}`;
    return this.http.get(url);
  }

}
