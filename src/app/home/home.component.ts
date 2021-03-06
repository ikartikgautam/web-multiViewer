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

  voptions

  constructor(public para: ActivatedRoute) {

    // Extract query parameters from url
    this.para.queryParams.subscribe(params => {
      this.type = params['type']
      this.src = params['src']
      this.yid = params['yid']
    });

  }

  ngOnInit(): void {

    this.voptions = { autoplay: true, controls: true, sources: [{ src: this.src, type: 'video/mp4' }] }

    console.log(this.type)
    console.log(this.src)
    console.log(this.yid)

  }

  enableSideButtons() {
    if (this.type == 'vdo' || this.type == 'yvdo')
      return false;
    return true;
  }

}

/* =================

MANUAL FOR PARAMETERS

type = [img,vdo,yvdo,pdf,gview,msview]
src = [www.xyz.com]   //link to resource
yid = [xyz123]    //video id in case of youtube type
title = [asd asd ]    // Title Of the file

================= */