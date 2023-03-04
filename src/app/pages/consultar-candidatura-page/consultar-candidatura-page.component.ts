import {Component} from '@angular/core';
import {Status} from "../../models/status.model";

export interface PeriodicElement {
  id: number;
  dataCriacao: Date;
  status: Status;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, dataCriacao: new Date("2023/01/03"), status: new Status(1, "INDEFERIDA")},
  {id: 2, dataCriacao: new Date("2023/02/03"), status: new Status(1, "DEFERIDA")}
];

@Component({
  selector: 'app-consultar-candidatura-page',
  templateUrl: './consultar-candidatura-page.component.html',
  styleUrls: ['./consultar-candidatura-page.component.css']
})
export class ConsultarCandidaturaPageComponent {
  displayedColumns: string[] = ['id', 'dataCriacao', 'status', 'acoes'];
  dataSource = ELEMENT_DATA;
}
