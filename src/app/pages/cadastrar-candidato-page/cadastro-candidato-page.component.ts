import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cidade} from "../../models/cidade.model";
import {CidadeService} from "../../services/cidade-service";
import {UsuarioService} from "../../services/usuario-service";

@Component({
  selector: 'app-cadastro-candidato-page',
  templateUrl: './cadastro-candidato-page.component.html',
  styleUrls: ['./cadastro-candidato-page.component.css']
})
export class CadastroCandidatoPageComponent implements OnInit {

  cadastroCandidatoForm: FormGroup;
  @Input() requiredFileType !: string;

  nomeArquivoSelfie = '';
  arquivoSelfie: File | null = null;
  campoSelfie = "campoSelfie";

  nomeArquivoDocumentoPessoal = '';
  campoDocumentoPessoal = "campoDocumentoPessoal";
  arquivoDocumentoPessoal: File | null = null;

  nomeArquivoComprovanteResidencia = '';
  arquivoComprovanteResidencia: File | null = null;

  uploadProgress !: number;

  arquivosCompletos: boolean = false;
  arquivos: File[] = [];

  cidadesList: Cidade[] = [];

  cidades: Cidade[] = [
    {id: 1, nome: 'Goiânia'},
    {id: 2, nome: 'Trindade'},
    {id: 3, nome: 'Goianira'}
  ];

  constructor(private fb: FormBuilder,
              private cidadeService: CidadeService,
              private usuarioService: UsuarioService
  ) {

    this.cadastroCandidatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]+')],],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      nomeDaMae: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      cidade: ['', [Validators.required]]
    });

  }

  ngOnInit() {
    this.buscarCidades();
  }

  onSubmit() {
    this.usuarioService.enviarCandidatura(this.cadastroCandidatoForm.value, this.arquivos).subscribe(
      data => {
      },
      error => {
        console.log(error);
      }
    );
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target?.files as FileList;

    if (files[0]) {
      if (target.name == this.campoSelfie) {
        this.nomeArquivoSelfie = files[0].name;
        this.arquivoSelfie = files[0];
        this.arquivos.push(this.arquivoSelfie);
      } else if (target.name == this.campoDocumentoPessoal) {
        this.nomeArquivoDocumentoPessoal = files[0].name;
        this.arquivoDocumentoPessoal = files[0];
        this.arquivos.push(this.arquivoDocumentoPessoal);
      } else {
        this.nomeArquivoComprovanteResidencia = files[0].name;
        this.arquivoComprovanteResidencia = files[0];
        this.arquivos.push(this.arquivoComprovanteResidencia);
      }
      if (this.arquivoSelfie && this.arquivoDocumentoPessoal && this.arquivoComprovanteResidencia) {
        this.arquivosCompletos = true;
      }
    }
  }


  buscarCidades() {
    this.cidadeService.buscarCidades().subscribe(
      data => {
        this.cidadesList = data;
      },
      error => {
        console.log(error);
      }
    );
  }
}
