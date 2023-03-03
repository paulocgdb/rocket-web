import {Status} from "./status.model";
import {Usuario} from "./usuario.model";

export class Candidatura {
  constructor(
    public id?: number,
    public dataCriacao?: Date,
    public quantidadeEnviada?: number,
    public status?: Status,
    public usuario?: Usuario
  ) {
  }
}
