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
      mode: 'css'
    }
  },
  {
    path: 'minify-html',
    component: MinifierComponent,
    data: {
      mode: 'html'
    }
  },
  {
    path: 'minify-json',
    component: MinifierComponent,
    data: {
      mode: 'json'
    }
  },
  {
    path: 'minify-js',
    component: MinifierComponent,
    data: {
      mode: 'js'
    }
  },
  {
    path: 'minify-xml',
    component: MinifierComponent,
    data: {
      mode: 'xml'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
