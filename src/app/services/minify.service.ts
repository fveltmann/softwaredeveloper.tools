import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';
/*
import * as HTMLMinifier from 'html-minifier';
import * as CSSMinifier from 'clean-css';
import { minify as JSMinifier } from 'terser';
//*/

@Injectable({
  providedIn: 'root'
})
export class MinifyService {
  constructor(private http: HttpClient) { }

  css() {
    this.http.get(`${environment.apiUrl}/`).subscribe({
      next: () => console.log('test'),
    });
  }

  /*
  html(value: string): string {
    return HTMLMinifier.minify(value);
  }

  async css(value: any) {
    return await new CSSMinifier(value).minify(value);
  }

  async js(value: string | string[] | { [file: string]: string; }) {
    return await JSMinifier(value);
  }

  xml(value: any) {
    return value;
  }
  //*/
}
