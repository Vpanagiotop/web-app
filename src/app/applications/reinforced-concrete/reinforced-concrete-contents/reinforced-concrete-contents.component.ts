import { Component } from '@angular/core';
import { reinforcedConcreteItems } from '../reinforcedConcreteItems';
@Component({
  selector: 'app-reinforced-concrete-contents',
  templateUrl: './reinforced-concrete-contents.component.html',
  styleUrls: ['./reinforced-concrete-contents.component.scss']
})
export class ReinforcedConcreteContentsComponent {

  public title = 'Reinforced Concrete'
  public contents = reinforcedConcreteItems

}
