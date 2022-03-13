import { Component, OnInit } from '@angular/core';
import { ApplicationsContents } from './common/ApplicationsContents';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
  public package = ApplicationsContents;
}
