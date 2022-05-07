import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent {
  @Input() element!: 'beam' | 'column'
  public beamOptions = ['Rectangular', 'Wide flanges'];
  @Input() public beamType: 'Rectangular' | 'Wide flanges' = 'Rectangular';
  @Input() inputWidth: string = '140px';
  @Input() hb!: number;
  @Input() bw!: number;
  @Input() beff_left!: number;
  @Input() beff_right!: number;
  public beff() {
    return (+this.beff_left || 0) + (+this.beff_right || 0) + (+this.bw || 0);
  }
  @Input() cy!: number;
  @Input() cx!: number;
  @Input() D!: number;
  public columnOptions = ['Rectangular', 'Circular'];
  @Input() public columnType: 'Rectangular' | 'Circular' = 'Rectangular';
}
