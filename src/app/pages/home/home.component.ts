import { Component } from '@angular/core';
import { reinforcedConcreteItems } from 'src/app/applications/reinforced-concrete/reinforcedConcreteItems';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public title = 'Reinforced Concrete'
  public contents = reinforcedConcreteItems
  public steelTypeList = ['B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
}