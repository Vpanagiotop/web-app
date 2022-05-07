import { Component, Input, ViewChild } from '@angular/core';
import { PopupFormComponent } from 'src/app/applications/common/popup-form/popup-form.component';
import { IConcreteProperties } from '../../reinforced-concrete/eurocodeStandard';
import { IMaterialOutput } from '../add-new-material/add-new-material.component';

@Component({
  selector: 'app-concrete-options',
  templateUrl: './concrete-options.component.html',
  styleUrls: ['./concrete-options.component.scss']
})

export class ConcreteOptionsComponent {
  @ViewChild(PopupFormComponent) public popupForm!: PopupFormComponent;
  @Input() data!: {
    materialOutput: IMaterialOutput;
    properties: IConcreteProperties;
  }
  @Input() properties!: IConcreteProperties;
  @Input() public Name: string = "Name"
  @Input() public fck!: number
  @Input() public WeightperUnit: number = 25;
  @Input() public partialFactor: number = 1.5;
  @Input() public longtermFactor: number = 0.85;

  // @Input() public fcm: number = this.properties.fcm!;
  // public fck = this.data?.properties.fck
  public test() {
    console.log(this.shearModulus());
  }
  public shearModulus() {
    return (+this.data.properties.Ecm / (2 * (+this.data.properties.v + 1)));
  }
  public modulusofElasticity() {
    return Math.round(22000 * Math.pow(+this.data.properties.fcm / 10, 0.3));
  }

  // @Input() public fcm: number = 30000;
  @Input() public v: number = 0.2

  public stressStrainOptions = ['Schematic', 'Parabola-Rectangle', 'Bi-linear'];
  @Input() public stressStrainOption: 'Schematic' | 'Parabola-Rectangle' | 'Bi-linear' = 'Parabola-Rectangle'
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

  // @Input() public fcm: number = this.data.properties.fcm
  public concreteProperties!: {
    value: string;
    fck: number;
    fcm: number;
    Ecm: number;
    v: number;
    G: number;
  }
  public ngOnInit() {
    this.concreteProperties = {
      value: this.data.materialOutput.value,
      fck: this.data.properties.fck,
      fcm: this.data.properties.fcm,
      Ecm: this.modulusofElasticity(),
      v: 0.2,
      G: this.shearModulus()
    }
  }


}