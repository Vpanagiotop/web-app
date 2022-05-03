import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-dimensions',
  templateUrl: './dimensions.component.html',
  styleUrls: ['./dimensions.component.scss']
})
export class DimensionsComponent {

  public title = "Flexural Design of Reinforced Concrete Beam"
  public sectionOptions = ['Rectangular', 'Wide flanges'];
  @Input() public sectionType: 'Rectangular' | 'Wide flanges' = 'Rectangular';
  @Input() inputWidth: string = '140px';
  @Input() hb!: number;
  @Input() bw!: number;
  @Input() beff_left!: number;
  @Input() beff_right!: number;
  public beff() {
    return (+this.beff_left || 0) + (+this.beff_right || 0) + (+this.bw || 0);
  }
}
