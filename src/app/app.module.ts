import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AspectRatioComponent } from './components/aspect-ratio/aspect-ratio.component';
import { XmlJsJsonComponent } from './components/xml-js-json/xml-js-json.component';
import { MinifierComponent } from './components/minifier/minifier.component';

@NgModule({
  declarations: [
    AppComponent,
    AspectRatioComponent,
    XmlJsJsonComponent,
    MinifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
