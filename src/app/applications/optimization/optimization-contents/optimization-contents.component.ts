import { Component } from '@angular/core';
import { optimizationItems } from '../optimizationItems';
@Component({
  selector: 'app-optimization-contents',
  templateUrl: './optimization-contents.component.html',
  styleUrls: ['./optimization-contents.component.scss']
})
export class OptimizationContentsComponent {

  public title = 'Optimization'
  public contents = optimizationItems

}