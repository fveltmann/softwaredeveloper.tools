import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspectRatioComponent } from './components/aspect-ratio/aspect-ratio.component';
import { XmlJsJsonComponent } from './components/xml-js-json/xml-js-json.component';

const routes: Routes = [
  {
    path: 'aspect-ratio',
    component: AspectRatioComponent,
  },
  {
    path: 'xml-js-json',
    component: XmlJsJsonComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
