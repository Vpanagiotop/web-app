import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './applications/applications/applications.component';
import { ContentsComponent } from './applications/contents/contents.component';
import { AddNewMaterialComponent } from './applications/materials/add-new-material/add-new-material.component';
import { ConcreteOptionsComponent } from './applications/materials/concrete-options/concrete-options.component';
import { OptimizationContentsComponent } from './applications/optimization/optimization-contents/optimization-contents.component';
import { OptimizationViewportComponent } from './applications/optimization/optimization-viewport/optimization-viewport.component';
import { CoverComponent } from './applications/reinforced-concrete/common/cover/cover.component';
import { FlexuralDesignRCBeamComponent } from './applications/reinforced-concrete/cross-section-analysis/flexural-design-rc-beam/flexural-design-rc-beam.component';
import { SpreadFootingComponent } from './applications/reinforced-concrete/foundation/spread-footing/spread-footing.component';
import { ReinforcedConcreteContentsComponent } from './applications/reinforced-concrete/reinforced-concrete-contents/reinforced-concrete-contents.component';
import { ReinforcedConcreteViewportComponent } from './applications/reinforced-concrete/reinforced-concrete-viewport/reinforced-concrete-viewport.component';
import { ViewportComponent } from './applications/viewport/viewport.component';
import { InputOptionsComponent } from './input-options/input-options.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PanelComponent } from './panel/panel.component';
import { PopupFormComponent } from './popup-form/popup-form.component';
import { SelectOptionsComponent } from './select-options/select-options.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { TitleBoxComponent } from './title-box/title-box.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    ContactComponent,
    ApplicationsComponent,
    ReinforcedConcreteViewportComponent,
    SideBarComponent,
    ContentsComponent,
    PanelComponent,
    OptimizationContentsComponent,
    SpreadFootingComponent,
    ReinforcedConcreteContentsComponent,
    OptimizationViewportComponent,
    ViewportComponent,
    ConcreteOptionsComponent,
    SelectOptionsComponent,
    AddNewMaterialComponent,
    PopupFormComponent,
    InputOptionsComponent,
    TitleBoxComponent,
    FlexuralDesignRCBeamComponent,
    CoverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
