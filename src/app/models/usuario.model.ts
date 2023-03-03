import {Perfil} from "./perfil.model";
import {Documento} from "./documento.model";
import {Cidade} from "./cidade.model";

export class Usuario {
  constructor(
    public id?: number,
    public nome?: string,
    public dataNascimento?: Date,
    public cpf?: string,
    public nomeDaMae?: string,
    public email?: string,
    public senha?: string,
    public cidade?: Cidade,
    public arquivoSelfie?: Documento,
    public arquivoDocumentoPessoal?: Documento,
    public arquivoComprovanteResidencia?: Documento,
    public perfil?: Perfil,
  ) {
  }
}
