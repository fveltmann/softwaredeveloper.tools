import { Component, OnInit } from '@angular/core';
import { MinifyService } from 'src/app/services/minify.service';

@Component({
  selector: 'app-minifier',
  templateUrl: './minifier.component.html',
  styleUrls: ['./minifier.component.scss']
})
export class MinifierComponent implements OnInit {
  input: any;

  constructor(public minifyService: MinifyService) { }

  ngOnInit(): void { }

}
