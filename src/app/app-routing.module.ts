import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {InicialPageComponent} from "./pages/inicial-page/inicial-page.component";
import {CadastroCandidatoPageComponent} from "./pages/cadastrar-candidato-page/cadastro-candidato-page.component";
import {
  ConsultarCandidaturaPageComponent
} from "./pages/consultar-candidatura-page/consultar-candidatura-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

const routes: Routes = [
  {
    path: '',
    component: InicialPageComponent
  },
  {
    path: 'cadastro-candidato',
    component: CadastroCandidatoPageComponent
  },
  {
    path: 'consultar-candidatura',
    component: ConsultarCandidaturaPageComponent
  },
  {
    path: 'area-restrita',
    component: LoginPageComponent
  },
  {
    path: '**',
    component: InicialPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
