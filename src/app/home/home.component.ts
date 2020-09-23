import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  type
  src
  yid

  constructor(public para: ActivatedRoute) {

    // Extract query parameters from url
    this.para.queryParams.subscribe(params => {
      this.type = params['type']
      this.src = params['src']
      this.yid = params['yid']
    });

  }

  ngOnInit(): void {

    console.log(this.type)
    console.log(this.src)
    console.log(this.yid)

  }

}

/* =================

MANUAL FOR PARAMETERS

type = [img,vdo,yvdo,pdf,doc,excel,*rtf]
src = [www.xyz.com]   //link to resource
yid = [xyz123]    //video id in case of youtube type

================= */