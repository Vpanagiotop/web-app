import { Component } from '@angular/core';
import { reinforcedConcreteItems } from 'src/app/pages/applications/common/reinforcedConcreteItems';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  public title = 'Reinforced Concrete'
  public contents = reinforcedConcreteItems}