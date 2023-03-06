import {Perfil} from "./perfil.model";
import {Cidade} from "./cidade.model";

export class Usuario {
  constructor(
    public id?: number,
    public cidade?: Cidade,
    public cpf?: string,
    public dataNascimento?: Date,
    public email?: string,
    public nome?: string,
    public nomeDaMae?: string,
    public perfil?: Perfil,
    public senha?: string
  ) {
  }
}
