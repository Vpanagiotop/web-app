import { Component } from '@angular/core';
import { reinforcedConcreteItems } from '../reinforcedConcreteItems';
@Component({
  selector: 'app-reinforced-concrete-viewport',
  templateUrl: './reinforced-concrete-viewport.component.html',
  styleUrls: ['./reinforced-concrete-viewport.component.scss']
})
export class ReinforcedConcreteViewportComponent {

  public title = 'Reinforced Concrete'
  public contents = reinforcedConcreteItems

}
