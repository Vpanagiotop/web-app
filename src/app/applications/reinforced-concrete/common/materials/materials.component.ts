import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { PopupFormComponent } from 'src/app/applications/common/popup-form/popup-form.component';
import { AddNewMaterialComponent, IMaterialOutput } from 'src/app/applications/materials/add-new-material/add-new-material.component';
import { concreteTypeProperties, IConcreteProperties } from '../../eurocodeStandard';

@Component({
  selector: 'app-materials',
  templateUrl: './materials.component.html',
  styleUrls: ['./materials.component.scss']
})
export class MaterialsComponent {
  @Input() inputWidth: string = '160px';
  @Input() value!: string;
  @Input() disable: true | false = false;
  @ViewChild(PopupFormComponent) public popupForm!: PopupFormComponent;
  @ViewChild(AddNewMaterialComponent) public addNewMaterial!: AddNewMaterialComponent;
  @Output() public submit = new EventEmitter();
  public open() {
    this.popupForm.open();
  }
  public close() {
    this.popupForm.close();
  }
  public toggle() {
    this.popupForm.toggle();
  }
  concreteMaterial!: {
    materialOutput: IMaterialOutput;
    properties: IConcreteProperties;
  }
  public saveValues(materialOutput: IMaterialOutput) {
    this.concreteMaterial = {
      materialOutput,
      properties: concreteTypeProperties[materialOutput.value]
    }
  }
  public disableModeOn() {
    this.disable = true;
  }
  public disableModeOff() {
    this.disable = false;
  }
  public disableModetoggle() {
    if (this.disable) {
      this.disableModeOff();
    } else {
      this.disableModeOn();
    }
  }
  public deleteMat() {
  }

}
