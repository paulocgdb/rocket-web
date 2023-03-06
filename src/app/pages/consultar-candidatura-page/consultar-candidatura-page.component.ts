import {Component, OnInit} from '@angular/core';
import {CandidaturaService} from "../../services/candidatura-service";
import {Candidatura} from "../../models/candidatura.model";

@Component({
  selector: 'app-consultar-candidatura-page',
  templateUrl: './consultar-candidatura-page.component.html',
  styleUrls: ['./consultar-candidatura-page.component.css']
})
export class ConsultarCandidaturaPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataCriacao', 'status', 'acoes'];
  dataSource: Candidatura[] = [];

  constructor(private candidaturaService: CandidaturaService) {
  }

  ngOnInit(): void {
    this.candidaturaService.obterCandidaturasEmAnalise().subscribe(
      data => {
        this.dataSource = data;
      },
      error => {
        console.log(error);
      }
    );
  }


}
