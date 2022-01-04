import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appClass]',
})
export class ClassDirective {
  constructor(private elem: ElementRef) {}
  @Input('appClass') set className(classObj: any) {
    for (let key in classObj) {
      if (classObj[key]) {
        this.elem.nativeElement.classList.add(key);
      } else {
        this.elem.nativeElement.classList.remove(key);
      }
    }
  }
}
