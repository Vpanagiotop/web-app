import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-title-box',
  templateUrl: './title-box.component.html',
  styleUrls: ['./title-box.component.scss']
})
export class TitleBoxComponent {
  @Input() title!: string;
  @Input() addButton: 'true' | 'false' = 'false';
  @Input() public options!: string[];
  @Output() public valueChange = new EventEmitter<any>();
  @Input() public value!: any;
  @Input() public height = '20px';
  @Input() public minWidth = '100%';
  @Input() public width = '180px';
}
