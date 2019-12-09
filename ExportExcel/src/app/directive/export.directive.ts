import { Directive, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appExport]'
})
export class ExportDirective {

  constructor() { }

  @Input() appExport: any[];
  @Input() fileName : string;

  @HostListener('click', ['$event']) onClick($event){
    console.log('clicked '+$event);
    this.appExport.forEach(d => console.log(d.roll + ' '+d.firstName));
  }

}
