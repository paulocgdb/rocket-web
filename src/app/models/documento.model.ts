import {Usuario} from "./usuario.model";
import {TipoDocumento} from "./tipo-documento.model";

export class Documento {
  constructor(public id?: number,
              public nome?: string,
              public dataCriacao?: Date,
              public conteudo?: File,
              public usuario?: Usuario,
              public tipoDocumento?: TipoDocumento,
  ) {
  }
}
