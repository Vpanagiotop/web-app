import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent {

  @Input() public title!: string;
  @Input() public items!: Array<{
    title: string;
    link: string;
    contents: Array<{
      title: string;
      link: string;
    }>
  }>
}
