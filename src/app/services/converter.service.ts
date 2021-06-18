import { Injectable } from '@angular/core';
import * as XmlConverter from 'xml-js';

@Injectable({
  providedIn: 'root'
})
export class ConverterService {

  constructor() { }

  xmlToJson(xml: any, options: XmlConverter.Options.XML2JSON = {}): string {
    return XmlConverter.xml2json(xml, options);
  }

  jsonToXml(json: string, options: XmlConverter.Options.JS2XML = {}): string {
    console.log( XmlConverter.json2xml(json, options));
    return XmlConverter.json2xml(json, options);
  }
}
