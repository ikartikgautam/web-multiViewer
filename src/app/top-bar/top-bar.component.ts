import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  title = 'File View'

  constructor(public para: ActivatedRoute) {

    // Extract query parameters from url
    this.para.queryParams.subscribe(params => {
      if(params['title'])
      this.title = params['title']
    });

  }

  ngOnInit(): void {
  }

}
