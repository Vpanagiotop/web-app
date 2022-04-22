import { Component } from '@angular/core';
import { optimizationItems } from '../optimizationItems';

@Component({
  selector: 'app-optimization-viewport',
  templateUrl: './optimization-viewport.component.html',
  styleUrls: ['./optimization-viewport.component.scss']
})
export class OptimizationViewportComponent {

  public title = 'Optimization'
  public contents = optimizationItems

}