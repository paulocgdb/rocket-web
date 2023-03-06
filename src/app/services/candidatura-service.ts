import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {CONFIG} from "../config/config";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class CandidaturaService {
  constructor(private http: HttpClient) {
  }

  obterCandidaturasEmAnalise(): Observable<any> {
    const url = `${CONFIG.urlApi}/candidaturas/em-analise`;
    return this.http.get(url);
  }

}
