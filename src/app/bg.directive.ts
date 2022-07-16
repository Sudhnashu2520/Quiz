import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBg]'
})
export class BgDirective {
  @Input() isCorrect:Boolean=false;
  constructor(private ef : ElementRef, private render : Renderer2) { }
  @HostListener('click') answer(){
    if(this.isCorrect){
      this.render.setStyle(this.ef.nativeElement,'background','green');
      this.render.setStyle(this.ef.nativeElement,'color','efff');
      this.render.setStyle(this.ef.nativeElement,'border','2px soild grey');
    }else{
      this.render.setStyle(this.ef.nativeElement,'background','red');
      this.render.setStyle(this.ef.nativeElement,'color','efff');
      this.render.setStyle(this.ef.nativeElement,'border','2px soild grey');
    }
  }
}

