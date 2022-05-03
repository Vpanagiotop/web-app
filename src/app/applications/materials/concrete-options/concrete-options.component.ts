import { Component, Input, ViewChild } from '@angular/core';
import { PopupFormComponent } from 'src/app/popup-form/popup-form.component';
import { IConcreteProperties } from '../../reinforced-concrete/eurocodeStandard';
import { IMaterialOutput } from '../add-new-material/add-new-material.component';

@Component({
  selector: 'app-concrete-options',
  templateUrl: './concrete-options.component.html',
  styleUrls: ['./concrete-options.component.scss']
})
//implements OnInit
export class ConcreteOptionsComponent {
  @ViewChild(PopupFormComponent) public popupForm!: PopupFormComponent;
  @Input() data!: {
    materialOutput: IMaterialOutput;
    properties: IConcreteProperties;
  }
  @Input() properties!: IConcreteProperties;
  @Input() public Name: string = "Name"
  @Input() public fck!: number

  // @Input() public fcm: number = this.properties.fcm!;
  // public fck = this.data?.properties.fck
  public test() {
    console.log(this.data.properties.fck);
    console.log(this.data.materialOutput.material);
    console.log(300);
  }
  // @Input() public fcm: number = 30000;
  @Input() public v: number = 0.2
  public Ecm!: number;
  public units = 'kN, m';
  public unitsOptions: string[] = ['kN, m', 'N, mm'];
  public open() {
    this.popupForm.open();
  }
  public close() {
    this.popupForm.close();
  }
  public toggle() {
    this.popupForm.toggle();
  }
}