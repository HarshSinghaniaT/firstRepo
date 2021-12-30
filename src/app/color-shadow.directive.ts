import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appColorShadow]'
})
export class ColorShadowDirective implements OnInit{

  @Input() appColorShadow:string = "";
  constructor(private element : ElementRef, private renderer:Renderer2) { }

  ngOnInit():void {
    if(this.appColorShadow == ""){
      this.appColorShadow = "red";
    }
    let setShadow = `2px 6px 5px ${this.appColorShadow}`;
    this.renderer.setStyle(this.element.nativeElement, 'text-shadow', setShadow);
    // this.element.nativeElement.style.textShadow = this.appcolorShadow;
  }
}
