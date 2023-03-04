import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PermitirSomenteNumeros} from "./diretivaSoNumeros";
import {PermitirSomenteLetras} from "./diretivaSoLetras";


@NgModule({
  declarations: [
    PermitirSomenteNumeros,
    PermitirSomenteLetras
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PermitirSomenteNumeros,
    PermitirSomenteLetras
  ]
})
export class DiretivasModule {
}
