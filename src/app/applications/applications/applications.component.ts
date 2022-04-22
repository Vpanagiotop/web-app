import { Component } from '@angular/core';
import { ApplicationsContents } from 'src/app/applications/ApplicationsContents';


@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent {
  public package = ApplicationsContents;
}
