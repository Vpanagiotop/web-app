import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-spread-footing',
  templateUrl: './spread-footing.component.html',
  styleUrls: ['./spread-footing.component.scss']
})
export class SpreadFootingComponent {
  @Input() hb!: number;
  @Input() bw!: number;
  @Input() cnom!: number;
  public title = 'Spread Footing'
  public coverOptions = ['Nominal cover', 'Bending Resistance', 'Interaction diagram M-N']
  public options = ['Required Reinforcement', 'Bending Resistance', 'Interaction diagram M-N']

}
