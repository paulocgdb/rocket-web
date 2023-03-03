import {Perfil} from "./perfil.model";
import {Documento} from "./documento.model";
import {Cidade} from "./cidade.model";

export class Usuario {
  constructor(
    public id?: number,
    public arquivoComprovanteResidencia?: Documento,
    public arquivoDocumentoPessoal?: Documento,
    public arquivoSelfie?: Documento,
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
