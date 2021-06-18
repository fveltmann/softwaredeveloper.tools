import { Component, OnInit } from '@angular/core';
import { ConverterService } from 'src/app/services/converter.service';

@Component({
  selector: 'app-xml-js-json',
  templateUrl: './xml-js-json.component.html',
  styleUrls: ['./xml-js-json.component.scss']
})
export class XmlJsJsonComponent implements OnInit {
  xml: string = '';
  json: string = '';

  constructor(public converterService: ConverterService) { }
  ngOnInit(): void { }
}
