import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-cadastro-candidato-page',
  templateUrl: './cadastro-candidato-page.component.html',
  styleUrls: ['./cadastro-candidato-page.component.css']
})
export class CadastroCandidatoPageComponent {
  cadastroCandidatoForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.cadastroCandidatoForm = this.fb.group({
      nome: ['', [Validators.required]],
      dataNascimento: ['', [Validators.required]],
      cpf: ['', [Validators.required]],
      nomeMae: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required]],
      arquivoBiometria: ['', [Validators.required]],
      // arquivoDocumentoPessoal: ['', [Validators.required]],
      // arquivoComprovanteResidencia: ['', [Validators.required]]
    });
  }

  onSubmit() {
    console.log("Bu");
  }

  onFileSelected () {

  }

}
