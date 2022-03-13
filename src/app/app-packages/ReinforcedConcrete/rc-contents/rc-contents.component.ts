import { Component } from '@angular/core';
import { reinforcedConcreteItems } from 'src/app/pages/applications/common/reinforcedConcreteItems';
@Component({
  selector: 'app-rc-contents',
  templateUrl: './rc-contents.component.html',
  styleUrls: ['./rc-contents.component.scss']
})
export class RCContentsComponent {

  public title = 'Reinforced Concrete'
  public contents = reinforcedConcreteItems

}
