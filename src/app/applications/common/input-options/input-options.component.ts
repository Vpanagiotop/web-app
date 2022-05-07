import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-input-options',
  templateUrl: './input-options.component.html',
  styleUrls: ['./input-options.component.scss']
})
export class InputOptionsComponent implements OnInit {
  @Input() public label!: string;
  @Input() public type!: 'number' | 'text' | 'select' | 'fixed' | 'addButton';
  @Input() public value!: number;
  @Output() public valueChange = new EventEmitter<number>();
  @Input() public text!: string;
  @Output() public textChange = new EventEmitter<string>();
  @Input() public options!: string[];
  @Input() option!: any;
  @Output() public optionChange = new EventEmitter<any>();
  @Input() public placeholder = '';
  @Input() clearButton: true | false = true;
  @Input() disable: true | false = false;
  // @Input() public units: 'm' | 'mm' | 'kN' | 'MPa' = 'm'
  @Input() public units!: 'm' | 'mm' | 'kN' | 'MPa' | 'kN/m3' | '‰'
  public unitsButton: any
  public ngOnInit() {
    this.unitsButton = {
      text: this.units,
      stylingMode: 'text',
      width: 40,
      elementAttr: {
        class: 'unitsButton',
        padding: 0
      }
    }
  }
  @Input() public unitsOptions: string[] = ['m', 'mm'];
  @Input() public height = '25px';
  @Input() public width = '100%';
}
