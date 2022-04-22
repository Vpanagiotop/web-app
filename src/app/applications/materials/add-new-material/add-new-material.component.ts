import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { PopupFormComponent } from 'src/app/popup-form/popup-form.component';
import { ConcreteType, concreteTypes } from '../../reinforced-concrete/eurocodeStandard';

@Component({
  selector: 'app-add-new-material',
  templateUrl: './add-new-material.component.html',
  styleUrls: ['./add-new-material.component.scss']
})
export class AddNewMaterialComponent {
  @ViewChild(PopupFormComponent) public popupForm!: PopupFormComponent;
  @Output() public submit = new EventEmitter<IMaterialOutput>();
  public formData = this.getFormDefaults();
  public materialList = ['Concrete', 'Steel']
  public concreteTypeList = concreteTypes;
  public steelTypeList = ['B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
  public materialChoice() {
    if (this.formData.material === 'Concrete') {
      return this.concreteTypeList;
    }
    if (this.formData.material === 'Steel') {
      return this.steelTypeList;
    }
    else {
      return [];
    }
  }
  public validateAndSubmit() {
    if (
      this.formData.material &&
      this.formData.value
    ) {
      this.submit.emit({
        material: this.formData.material,
        value: this.formData.value
      });
    }
  }
  public open() {
    this.reset();
    this.popupForm.open();
  }
  public close() {
    this.popupForm.close();
  }
  public toggle() {
    this.reset();
    this.popupForm.toggle();
  }
  private reset() {
    this.formData = this.getFormDefaults();
  }
  private getFormDefaults(): Partial<IMaterialOutput> {
    return {}
  }
}

export interface IMaterialOutput {
  material: 'Concrete' | 'Steel' | '';
  value: ConcreteType;
}
