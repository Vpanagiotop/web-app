import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent {
  @Input() public title!: string;
  @Input() public state: 'open' | 'closed' = 'closed';
  @Input() public backgroundColor = 'None';
  @Input() public height = 'auto';
  @Input() public padding = '5px 10px';
  @ViewChild('header') public header!: ElementRef<HTMLDivElement>;
  @ViewChild('content') public content!: ElementRef<HTMLDivElement>;
  public constructor(private element: ElementRef<HTMLElement>) { }

  public ngAfterViewInit() {
    this.updateHeight();
    this.enableTransitionsOnNextTick();
    // this.registerHeightChangeListener();
  }
  private enableTransitionsOnNextTick() {
    setTimeout(() => {
      this.element.nativeElement.style.transition = 'all .5s';
    });
  }
  public toggle() {
    if (this.state === 'open') {
      this.close();
    } else {
      this.open();
    }
    console.log(this.state);
  }
  private open() {
    this.state = 'open';
    this.updateHeight();
  }
  private close() {
    this.state = 'closed';
    this.updateHeight();
  }
  private getHeaderHeight() {
    return this.header.nativeElement.clientHeight;
  }
  private getContentHeight() {
    return this.content.nativeElement.clientHeight;
  }
  private updateHeight() {
    if (this.state === 'open') {
      const elementHeight = this.getHeaderHeight() + this.getContentHeight();
      this.setHeight(elementHeight);
    } else {
      this.setHeight(this.getHeaderHeight());
    }
  }
  private setHeight(height: number) {
    this.element.nativeElement.style.height = height + 'px';
    console.log(this.element.nativeElement.style.height);
  }
}
