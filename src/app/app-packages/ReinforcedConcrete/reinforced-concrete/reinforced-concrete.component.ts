import { Component } from '@angular/core';
import { reinforcedConcreteItems } from 'src/app/pages/applications/common/reinforcedConcreteItems';
@Component({
  selector: 'app-reinforced-concrete',
  templateUrl: './reinforced-concrete.component.html',
  styleUrls: ['./reinforced-concrete.component.scss']
})
export class ReinforcedConcreteComponent {

  public title = 'Reinforced Concrete'
  public contents = reinforcedConcreteItems

}
