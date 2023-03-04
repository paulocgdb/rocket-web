import {Directive, ElementRef, HostListener} from "@angular/core";

@Directive({selector: '[soLetras]'})

export class PermitirSomenteLetras {
  regexStr = '^[a-zA-Z ]*$';

  constructor(private _el: ElementRef) {
  }

  @HostListener('keypress', ['$event'])
  onKeyPress(event: any) {
    return new RegExp(this.regexStr).test(event.key);
  }
}
