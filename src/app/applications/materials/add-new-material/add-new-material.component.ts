import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { PopupFormComponent } from 'src/app/popup-form/popup-form.component';

@Component({
  selector: 'app-add-new-material',
  templateUrl: './add-new-material.component.html',
  styleUrls: ['./add-new-material.component.scss']
})
export class AddNewMaterialComponent implements OnInit {
  @ViewChild(PopupFormComponent) public popupForm!: PopupFormComponent;
  @Output() public submit = new EventEmitter<IMaterialOutput>();
  public formData = this.getFormDefaults();
  public materialList = ['Concrete', 'Steel']
  public concreteTypeList = ['C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
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
  public valueChange() {
    if (!this.formData.value) { this.formData.value = '' }
    return this.formData.value
  }
  public ngOnInit() {
    this.valueChange()
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
  private getFormDefaults(): IMaterialOutput {
    return {
      material: '',
      value: ''
    }
  }
}

export interface IMaterialOutput {
  material: 'Concrete' | 'Steel' | '';
  value: string;
}
