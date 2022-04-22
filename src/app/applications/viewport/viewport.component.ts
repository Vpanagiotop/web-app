import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-viewport',
  templateUrl: './viewport.component.html',
  styleUrls: ['./viewport.component.scss']
})
export class ViewportComponent {

  @Input() public title!: string;
  @Input() public items?: Array<{
    title: string;
    link: string;
    contents: Array<{
      title: string;
      link: string;
    }>
  }>


}
