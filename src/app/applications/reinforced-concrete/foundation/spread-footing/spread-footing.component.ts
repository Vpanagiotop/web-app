import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { concreteTypes } from '../../eurocodeStandard';

@Component({
  selector: 'app-spread-footing',
  templateUrl: './spread-footing.component.html',
  styleUrls: ['./spread-footing.component.scss']
})
export class SpreadFootingComponent implements OnDestroy {
  public title = "Flexural Design of Reinforced Concrete Beam"
  public sectionOptions = ['Rectangular', 'Wide flanges'];
  con = concreteTypes;
  public test: number = 2;

  public check2 = [{
    id: 3,
    fullName: 'Kevin Carter',
    prefix: 'Mr.',
    position: 'Shipping Manager',
  }, {
    id: 14,
    fullName: 'Victor Norris',
    prefix: 'Mr.',
    position: 'Shipping Assistant',
  }];
  public options = [{
    id: 1,
    name: 'Eurocode Standards',
    items: this.check2
  },
  {
    id: this.test,
    name: 'Eurocode Standards',
    items: this.check2
  }]
  @Input() public sectionType: 'Rectangular' | 'Wide flanges' = 'Rectangular';










  dropDownOptions = {

  }
  @Input() public value!: any;
  @Output() public valueChange = new EventEmitter<any>();
  @Input() public width = '150px';
  @Input() public height = '22px';
  @Input() public placeholder = '--- select ---';
  // @Input() public options!: string[];
  public concreteTypeList = concreteTypes;
  public isOpen = false;
  public globalClickSubscription?: Subscription;
  public ngOnDestroy(): void {
    this.globalClickSubscription?.unsubscribe();
  }
  public open() {
    this.isOpen = true;
    this.subscribeToGlobalClickEvent();
  }
  public close() {
    this.isOpen = false;
    console.log(this.value)
    this.globalClickSubscription?.unsubscribe();
  }
  public toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }
  private subscribeToGlobalClickEvent() {
    setTimeout(() =>
      this.globalClickSubscription = fromEvent(window, 'click').subscribe(event => {
        if (this.isOpen) {
          this.close();
        }
      }));

  }
}