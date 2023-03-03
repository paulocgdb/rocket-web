import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CadastroCandidatoPageComponent} from "./cadastro-candidato-page/cadastro-candidato-page.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {InicialPageComponent} from "./inicial-page/inicial-page.component";
import {ListarCandidatoPageComponent} from "./listar-candidato-page/listar-candidato-page.component";
import {LoginPageComponent} from "./login-page/login-page.component";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatMenuModule} from "@angular/material/menu";
import {RouterLink} from "@angular/router";
import { ConsultarCandidaturaPageComponent } from './consultar-candidatura-page/consultar-candidatura-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {NgxMaskDirective, NgxMaskPipe, provideNgxMask} from "ngx-mask";
import {MatIconModule} from "@angular/material/icon";


@NgModule({
  declarations: [
    CadastroCandidatoPageComponent,
    HomePageComponent,
    InicialPageComponent,
    ListarCandidatoPageComponent,
    LoginPageComponent,
    ConsultarCandidaturaPageComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    NgxMaskDirective,
    NgxMaskPipe,
    MatIconModule
  ],
  exports: [
    CadastroCandidatoPageComponent,
    HomePageComponent,
    InicialPageComponent,
    ListarCandidatoPageComponent,
    LoginPageComponent,
    ConsultarCandidaturaPageComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class PagesModule {
}
