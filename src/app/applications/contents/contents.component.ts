import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contents',
  templateUrl: './contents.component.html',
  styleUrls: ['./contents.component.scss']
})
export class ContentsComponent {
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
