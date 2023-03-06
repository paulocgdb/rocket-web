import {FormBuilder} from "@angular/forms";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {CONFIG} from "../config/config";
import {Login} from "../models/login.model";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private fb: FormBuilder,
              private http: HttpClient
  ) {
  }


  realizarLogin(login: Login): Observable<any> {

    let params = new HttpParams();

    params = params.append('email', `${login.email}`);
    params = params.append('senha', `${login.senha}`);

    const url = `${CONFIG.urlApi}/login`;
    return this.http.get(url, {params});
  }

}
