import {Component, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Cidade} from "../../models/cidade.model";

@Component({
  selector: 'app-cadastro-candidato-page',
  templateUrl: './cadastro-candidato-page.component.html',
  styleUrls: ['./cadastro-candidato-page.component.css']
})
export class CadastroCandidatoPageComponent {
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

  cidades: Cidade[] = [
    {id: 1, nome: 'Goiânia'},
    {id: 2, nome: 'Trindade'},
    {id: 3, nome: 'Goianira'}
  ];

  constructor(private fb: FormBuilder) {
    this.cadastroCandidatoForm = this.fb.group({
      nome: ['', [Validators.required, Validators.pattern('[a-zA-Z\\s]+')],],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      nomeMae: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      cidadeSelecionada: ['', [Validators.required]]
    });
  }

  onSubmit() {
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    const files = target?.files as FileList;

    if (files[0]) {
      if (target.name == this.campoSelfie) {
        this.nomeArquivoSelfie = files[0].name;
        this.arquivoSelfie = files[0];
      } else if (target.name == this.campoDocumentoPessoal) {
        this.nomeArquivoDocumentoPessoal = files[0].name;
        this.arquivoDocumentoPessoal = files[0];
      } else {
        this.nomeArquivoComprovanteResidencia = files[0].name;
        this.arquivoComprovanteResidencia = files[0];
      }
      debugger
      if (this.arquivoSelfie && this.arquivoDocumentoPessoal && this.arquivoComprovanteResidencia) {
        this.arquivosCompletos = true;
      }
    }
  }

  cancelUpload() {

  }
}
