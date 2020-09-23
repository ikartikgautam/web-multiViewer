import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  type

  constructor(public para: ActivatedRoute) {

    // Extract query parameters from url
    this.para.queryParams.subscribe(params => {
      this.type = params['type']
    });

  }

  enableSideButtons() {
    if (this.type == 'vdo' || this.type == 'yvdo')
      return false;
    return true;
  }

}
