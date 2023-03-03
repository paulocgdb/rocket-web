import {Usuario} from "../models/usuario.model";

export class LoginService {


  get usuarioLogado(): Usuario {
    return new Usuario();
  }

  set usuarioLogado(usuario) {

  }

}
