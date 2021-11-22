import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from './components/recommendations/recommendations.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path: '', pathMatch: 'full',redirectTo:'welcome'},
  {path:'welcome', component:WelcomeComponent,},
  {path:'recommendations',component:RecommendationsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
