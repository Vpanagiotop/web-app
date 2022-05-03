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
  public unitsButton: any;
  constructor() {
    this.unitsButton = {
      text: 'MPa',
      stylingMode: 'text',
      width: 40,
      padding: 0,
      elementAttr: {
        class: 'units',
      }
    }
  }
  public options: Array<{
    name: string;
    link: string;
  }> = [
      { name: 'Eurocode Standards', link: 'test' },
      { name: 'Saved Materials', link: 'test2' },
    ]
  public plusClick(e: { itemData: { name: string, link: string; }; }) {
    this.value = e.itemData.name;
    console.log(this.value);
  }
  data?: {
    materialOutput: IMaterialOutput;
    properties: IConcreteProperties;
  }
  public saveValues(materialOutput: IMaterialOutput) {
    this.data = {
      materialOutput,
      properties: concreteTypeProperties[materialOutput.value]
    }
    console.log(this.data.materialOutput)
    console.log(this.data.properties)
  }
  public deleteMat() {
  }

}
