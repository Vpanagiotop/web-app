import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-popup-form',
  templateUrl: './popup-form.component.html',
  styleUrls: ['./popup-form.component.scss']
})
export class PopupFormComponent {
  @Input() public title!: string;
  @Input() public width = '350px';
  @Output() public submit = new EventEmitter();
  public isOpen = false;
  public open() {
    this.isOpen = true;
  }
  public close() {
    this.isOpen = false;
  }
  public toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
}
