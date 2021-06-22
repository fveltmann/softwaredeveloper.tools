import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinifierMode } from 'src/app/enums/minifier-mode';
import { MinifierResponse } from 'src/app/interfaces/minifier-response';
import { MinifierService } from 'src/app/services/minifier.service';

@Component({
  selector: 'app-minifier',
  templateUrl: './minifier.component.html',
  styleUrls: ['./minifier.component.scss']
})
export class MinifierComponent implements OnInit {
  mode: MinifierMode;
  input: any;
  output: any;

  constructor(
    route: ActivatedRoute,
    public minifierService: MinifierService
  ) {
    this.mode = route.snapshot.data.mode;
  }

  ngOnInit(): void { }

  minifiy() {
    if (!this.input) return;

    this.minifierService.minify({ data: this.input }, this.mode).subscribe({
      next: (data: MinifierResponse) => {
        this.output = data.minified;
      }
    });
  }
}
