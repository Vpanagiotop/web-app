import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-options',
  templateUrl: './input-options.component.html',
  styleUrls: ['./input-options.component.scss']
})
export class InputOptionsComponent {
  @Input() public type!: 'number' | 'text' | 'select' | 'fixed';
  @Input() public placeholder = '';
  @Input() public label!: string;
  @Input() public test!: string;
  @Input() public value!: string | number;
  @Output() public valueChange = new EventEmitter<any>();
  @Input() public options!: string[];
  @Input() public height = '20px';
  @Input() public width = '100%';
}
