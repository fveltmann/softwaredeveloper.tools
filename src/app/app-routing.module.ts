import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspectRatioComponent } from './components/aspect-ratio/aspect-ratio.component';

const routes: Routes = [
  {
    path: 'aspect-ratio',
    component: AspectRatioComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
