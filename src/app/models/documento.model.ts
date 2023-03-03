import {Usuario} from "./usuario.model";
import {TipoDocumento} from "./tipo-documento.model";

export class Documento {
  constructor(public id?: number,
              public conteudo?: File,
              public dataCriacao?: Date,
              public nome?: string,
              public tipoDocumento?: TipoDocumento,
              public usuario?: Usuario,
  ) {
  }
}
