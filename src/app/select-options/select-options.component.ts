import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-select-options',
  templateUrl: './select-options.component.html',
  styleUrls: ['./select-options.component.scss']
})
export class SelectOptionsComponent {

  @Input() public placeholder = '--- select ---';
  @Input() public options!: string[];
  @Output() public valueChange = new EventEmitter<any>();
  @Input() public value!: any;
  @Input() public height = '20px';
  @Input() public width = '100%';
}

