import { Component, EventEmitter, Input, Output } from '@angular/core';
import { concreteTypeList, steelTypeList } from '../../eurocodeStandard';
@Component({
  selector: 'app-flexural-design-rc-beam',
  templateUrl: './flexural-design-rc-beam.component.html',
  styleUrls: ['./flexural-design-rc-beam.component.scss']
})
export class FlexuralDesignRCBeamComponent {

  public title = "Flexural Design of Reinforced Concrete Beam"
  public coverOptions = ['Nominal cover', 'Reinfocement cover']
  public rebarOptions = ['ø6', 'ø8', 'ø10', 'ø12', 'ø14', 'ø16', 'ø18', 'ø20', 'ø22', 'ø25', 'ø28', 'ø32']
  public concreteOptions = concreteTypeList
  public steelOptions = steelTypeList
  public sectionOptions = ['Rectangular', 'Wide flanges'];
  @Input() public reinforcingBar: string = 'ø14'
  @Input() public fck!: string;
  @Input() public sectionType: 'Rectangular' | 'Wide flanges' = 'Rectangular';
  @Input() public fyk!: string;
  @Input() public shearReinforcement: string = 'ø8'
  @Input() public cover: "Nominal cover" | "Reinfocement cover" = 'Nominal cover'
  @Output() public coverChange = new EventEmitter<string>();
  @Input() hb!: number;
  @Input() bw!: number;
  @Input() cnom!: number;
  @Input() beffLeft!: number;
  @Input() beffRight!: number;
  public beff() {
    return this.beffRight + this.beffLeft + this.bw;
  }
}
