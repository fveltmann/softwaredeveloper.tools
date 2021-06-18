import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AspectRatioComponent } from './components/aspect-ratio/aspect-ratio.component';
import { MinifierComponent } from './components/minifier/minifier.component';
import { XmlJsJsonComponent } from './components/xml-js-json/xml-js-json.component';

const routes: Routes = [
  {
    path: 'aspect-ratio',
    component: AspectRatioComponent,
  },
  {
    path: 'xml-js-json',
    component: XmlJsJsonComponent,
  },
  {
    path: 'minify-css',
    component: MinifierComponent,
    data: {
      type: 'css'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
