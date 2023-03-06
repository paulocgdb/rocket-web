import {Component, OnInit} from '@angular/core';
import {Candidatura} from "../../models/candidatura.model";
import {CandidaturaService} from "../../services/candidatura-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-listar-candidato-page',
  templateUrl: './listar-candidato-page.component.html',
  styleUrls: ['./listar-candidato-page.component.css']
})

export class ListarCandidatoPageComponent implements OnInit {
  displayedColumns: string[] = ['id', 'dataCriacao', 'status', 'acoes'];
  dataSource: Candidatura[] = [];

  constructor(private candidaturaService: CandidaturaService,
              private router: Router
  ) {
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

  aprovar(id: number) {
    this.candidaturaService.aprovar(id).subscribe(
      data => {
        this.router.navigate(['/listar-candidato-page']);
      },
      error => {
        console.log(error);
      }
    );
  }

  reprovar(id: number) {
    this.candidaturaService.reprovar(id).subscribe(
      data => {
        this.router.navigate(['/listar-candidato-page']);
      },
      error => {
        console.log(error);
      }
    );
  }
}
