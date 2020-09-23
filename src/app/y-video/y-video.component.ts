import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-y-video',
  templateUrl: './y-video.component.html',
  styleUrls: ['./y-video.component.scss']
})
export class YVideoComponent implements OnInit {

  @Input() id: string;

  constructor() { }

  ngOnInit(): void {
    const tag = document.createElement('script');

    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);
  }

}
