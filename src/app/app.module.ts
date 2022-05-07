import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { DxButtonModule, DxDropDownBoxModule, DxDropDownButtonModule, DxFormModule, DxListModule, DxNumberBoxModule, DxSelectBoxModule, DxTabPanelModule, DxTextBoxModule, DxTreeViewModule, DxValidatorModule } from 'devextreme-angular';
import { DxoSelectionModule } from 'devextreme-angular/ui/nested';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicationsComponent } from './applications/applications/applications.component';
import { InputOptionsComponent } from './applications/common/input-options/input-options.component';
import { PopupFormComponent } from './applications/common/popup-form/popup-form.component';
import { SideBarComponent } from './applications/common/side-bar/side-bar.component';
import { TitleBoxComponent } from './applications/common/title-box/title-box.component';
import { ContentsComponent } from './applications/contents/contents.component';
import { AddNewMaterialComponent } from './applications/materials/add-new-material/add-new-material.component';
import { ConcreteOptionsComponent } from './applications/materials/concrete-options/concrete-options.component';
import { ConcreteComponent } from './applications/materials/concrete/concrete.component';
import { OptimizationContentsComponent } from './applications/optimization/optimization-contents/optimization-contents.component';
import { OptimizationViewportComponent } from './applications/optimization/optimization-viewport/optimization-viewport.component';
import { CoverComponent } from './applications/reinforced-concrete/common/cover/cover.component';
import { DimensionsComponent } from './applications/reinforced-concrete/common/dimensions/dimensions.component';
import { MaterialsComponent } from './applications/reinforced-concrete/common/materials/materials.component';
import { FlexuralDesignRCBeamComponent } from './applications/reinforced-concrete/cross-section-analysis/flexural-design-rc-beam/flexural-design-rc-beam.component';
import { FlexuralDesignRcColumnComponent } from './applications/reinforced-concrete/cross-section-analysis/flexural-design-rc-column/flexural-design-rc-column.component';
import { SpreadFootingComponent } from './applications/reinforced-concrete/foundation/spread-footing/spread-footing.component';
import { StripFoundationComponent } from './applications/reinforced-concrete/foundation/strip-foundation/strip-foundation.component';
import { ReinforcedConcreteContentsComponent } from './applications/reinforced-concrete/reinforced-concrete-contents/reinforced-concrete-contents.component';
import { ReinforcedConcreteViewportComponent } from './applications/reinforced-concrete/reinforced-concrete-viewport/reinforced-concrete-viewport.component';
import { ViewportComponent } from './applications/viewport/viewport.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PanelComponent } from './panel/panel.component';
import { SelectOptionsComponent } from './select-options/select-options.component';


@NgModule({
  declarations: [
    AppComponent,
    StripFoundationComponent,
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
    DimensionsComponent,
    MaterialsComponent,
    FlexuralDesignRcColumnComponent,
    ConcreteComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DxSelectBoxModule,
    DxNumberBoxModule,
    DxButtonModule,
    DxValidatorModule,
    DxTextBoxModule,
    DxTabPanelModule,
    DxDropDownBoxModule,
    DxoSelectionModule,
    DxListModule,
    DxFormModule,
    DxTreeViewModule,
    DxDropDownButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
