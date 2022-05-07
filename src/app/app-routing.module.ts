import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationsComponent } from './applications/applications/applications.component';
import { ConcreteComponent } from './applications/materials/concrete/concrete.component';
import { OptimizationContentsComponent } from './applications/optimization/optimization-contents/optimization-contents.component';
import { OptimizationViewportComponent } from './applications/optimization/optimization-viewport/optimization-viewport.component';
import { FlexuralDesignRCBeamComponent } from './applications/reinforced-concrete/cross-section-analysis/flexural-design-rc-beam/flexural-design-rc-beam.component';
import { FlexuralDesignRcColumnComponent } from './applications/reinforced-concrete/cross-section-analysis/flexural-design-rc-column/flexural-design-rc-column.component';
import { SpreadFootingComponent } from './applications/reinforced-concrete/foundation/spread-footing/spread-footing.component';
import { ReinforcedConcreteContentsComponent } from './applications/reinforced-concrete/reinforced-concrete-contents/reinforced-concrete-contents.component';
import { ReinforcedConcreteViewportComponent } from './applications/reinforced-concrete/reinforced-concrete-viewport/reinforced-concrete-viewport.component';
import { HomeComponent } from './pages/home/home.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'applications/RC',
    redirectTo: 'applications/RC/contents',
    pathMatch: 'full'
  },
  {
    path: 'applications/optimization',
    redirectTo: 'applications/optimization/contents',
    pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
    children: [
      { path: 'RC', component: ReinforcedConcreteContentsComponent }
    ]
  },
  { path: 'applications', component: ApplicationsComponent },
  {
    path: 'applications/RC', component: ReinforcedConcreteViewportComponent,
    children: [
      { path: 'contents', component: ReinforcedConcreteContentsComponent },
      { path: 'concrete', component: ConcreteComponent },
      { path: 'flexural-design-RC-beam', component: FlexuralDesignRCBeamComponent },
      { path: 'flexural-design-RC-column', component: FlexuralDesignRcColumnComponent },
      { path: 'SpreadFooting', component: SpreadFootingComponent },]
  },
  {
    path: 'applications/optimization', component: OptimizationViewportComponent,
    children: [
      { path: 'contents', component: OptimizationContentsComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
