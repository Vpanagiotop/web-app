import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-material',
  templateUrl: './add-new-material.component.html',
  styleUrls: ['./add-new-material.component.scss']
})
export class AddNewMaterialComponent implements OnInit {
  public material: 'Concrete' | 'Steel' | '' = '';
  public value!: string
  public materialList = ['Concrete', 'Steel']
  public concreteTypeList = ['C16/20', 'C20/25', 'C25/30', 'C30/37', 'C35/40', 'other'];
  public steelTypeList = ['B500c', 'B500a', 'B500b', 'S220', 'S400', 'S500', 'S400s', 'S500s', 'other'];
  public materialChoice() {
    if (this.material === 'Concrete') {
      return this.concreteTypeList;
    }
    if (this.material === 'Steel') {
      return this.steelTypeList;
    }
    else {
      return [];
    }
  }
  public valueChange() {
    if (!this.value) { this.value = '' }
    return this.value
  }
  public ngOnInit() {
    this.valueChange()
  }
}
