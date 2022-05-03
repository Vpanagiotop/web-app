import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-options',
  templateUrl: './input-options.component.html',
  styleUrls: ['./input-options.component.scss']
})
export class InputOptionsComponent {
  public currencyButton: any;
  constructor() {
    this.currencyButton = {
      text: this.units,
      stylingMode: 'text',
      width: 40,
      padding: 0,
      elementAttr: {
        class: 'currency',
      }
    }
  }
  @Input() public units: 'm' | 'mm' | 'kN' | 'MPa' = 'm'
  @Input() public unitsOptions: string[] = ['m', 'mm'];
  @Input() public type!: 'number' | 'text' | 'select' | 'fixed' | 'addButton';
  @Input() public placeholder = '';
  @Input() public label!: string;
  @Input() public button!: string;
  @Input() public text!: string;
  @Input() public value!: number;
  @Input() option!: number | string;
  @Output() public valueChange = new EventEmitter<any>();
  @Output() public textChange = new EventEmitter<string>();
  @Output() public optionChange = new EventEmitter<any>();
  @Input() public options!: string[];
  @Input() public height = '25px';
  @Input() public width = '100%';
}
