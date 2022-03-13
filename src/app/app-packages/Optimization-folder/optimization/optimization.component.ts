import { Component } from '@angular/core';
import { optimizationItems } from 'src/app/pages/applications/common/optimizationItems';

@Component({
  selector: 'app-optimization',
  templateUrl: './optimization.component.html',
  styleUrls: ['./optimization.component.scss']
})
export class OptimizationComponent {

  public title = 'Optimization'
  public contents = optimizationItems

}

