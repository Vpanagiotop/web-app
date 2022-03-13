import { Component, OnInit, ViewChild, ElementRef, ComponentRef } from '@angular/core';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public navbarHeight = 0;
  public viewportHeight = 0;
  @ViewChild('viewport') public viewport!: ElementRef<HTMLDivElement>;
  public ngOnInit() {
    this.updateScrollMode();
    addEventListener('resize', () => this.updateScrollMode());
  }
  public onScroll() {
    this.updateScrollMode();
  }
  private updateScrollMode() {
    if (this.isScrolled()) {
      this.enterScrollMode();
    } else {
      this.clearScrollMode();
    }
  }
  private isScrolled() {
    return this.viewport?.nativeElement.scrollTop || 0;
  }
  private enterScrollMode() {
    const navbarHeight = 80;
    this.navbarHeight = navbarHeight;
    this.viewportHeight = innerHeight - navbarHeight;
  }
  private clearScrollMode() {
    this.navbarHeight = 80;
    this.viewportHeight = innerHeight - 40;
  }
};