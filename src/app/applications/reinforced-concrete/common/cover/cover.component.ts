import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cover',
  templateUrl: './cover.component.html',
  styleUrls: ['./cover.component.scss']
})
export class CoverComponent {
  public coverOptions = ['Nominal cover', 'Reinfocement cover']
  @Input() cnom!: number;
  @Input() public cover: "Nominal cover" | "Reinfocement cover" = 'Nominal cover'
  @Input() inputWidth: string = '140px';
  public rebarOptions = ['ø6', 'ø8', 'ø10', 'ø12', 'ø14', 'ø16', 'ø18', 'ø20', 'ø22', 'ø25', 'ø28', 'ø32']
  @Input() public reinforcingBar: string = 'ø14'
  @Input() public shearReinforcement: string = 'ø8'
}
