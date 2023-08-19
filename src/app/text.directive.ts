import {
  Directive,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  ElementRef,
} from '@angular/core';

@Directive({
  selector: '[mydirective]',
})
export class TextDirective implements OnChanges {
  @Input('mydirective') textColor = '';
  @Output() clickOut = new EventEmitter<void>();
  constructor(private eleRef: ElementRef) {}
  ngOnChanges() {
    this.eleRef.nativeElement.style.color = this.textColor;
  }
}
