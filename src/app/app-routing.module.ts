import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OptimizationContentsComponent } from './app-packages/Optimization-folder/optimization-contents/optimization-contents.component';
import { OptimizationComponent } from './app-packages/Optimization-folder/optimization/optimization.component';
import { RCContentsComponent } from './app-packages/ReinforcedConcrete/rc-contents/rc-contents.component';
import { ReinforcedConcreteComponent } from './app-packages/ReinforcedConcrete/reinforced-concrete/reinforced-concrete.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
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
      { path: 'RC', component: ReinforcedConcreteComponent }
    ]
  },
  { path: 'applications', component: ApplicationsComponent },
  {
    path: 'applications/RC', component: ReinforcedConcreteComponent,
    children: [
      { path: 'contents', component: RCContentsComponent }]
  },
  {
    path: 'applications/optimization', component: OptimizationComponent,
    children: [
      { path: 'contents', component: OptimizationContentsComponent }]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
