import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { MinifierMode } from '../enums/minifier-mode';
import { MinifierResponse } from '../interfaces/minifier-response';

@Injectable({
  providedIn: 'root'
})
export class MinifierService {
  constructor(private http: HttpClient) { }

  minify(payload: Object, mode: MinifierMode): Observable<MinifierResponse> {
    return this.http.post<MinifierResponse>(`${environment.apiUrl}/minify/${mode}`, payload);
  }

  css(payload: Object): Observable<MinifierResponse> {
    return this.minify(payload, MinifierMode.CSS);
  }

  html(payload: Object): Observable<MinifierResponse> {
    return this.minify(payload, MinifierMode.HTML);
  }

  xml(payload: Object): Observable<MinifierResponse> {
    return this.minify(payload, MinifierMode.XML);
  }

  json(payload: Object): Observable<MinifierResponse> {
    return this.minify(payload, MinifierMode.JSON);
  }

  js(payload: Object): Observable<MinifierResponse> {
    return this.minify(payload, MinifierMode.JS);
  }
}
