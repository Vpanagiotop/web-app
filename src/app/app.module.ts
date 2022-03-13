import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { ReinforcedConcreteComponent } from './app-packages/ReinforcedConcrete/reinforced-concrete/reinforced-concrete.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { ContentsComponent } from './app-packages/contents/contents.component';
import { OptimizationComponent } from './app-packages/Optimization-folder/optimization/optimization.component';
import { PanelComponent } from './panel/panel.component';
import { RCContentsComponent } from './app-packages/ReinforcedConcrete/rc-contents/rc-contents.component';
import { OptimizationContentsComponent } from './app-packages/Optimization-folder/optimization-contents/optimization-contents.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactComponent,
    ApplicationsComponent,
    ReinforcedConcreteComponent,
    SideBarComponent,
    ContentsComponent,
    OptimizationComponent,
    PanelComponent,
    RCContentsComponent,
    OptimizationContentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
