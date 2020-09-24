import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-ms-viewer',
  templateUrl: './ms-viewer.component.html',
  styleUrls: ['./ms-viewer.component.scss']
})
export class MsViewerComponent implements OnInit {

  @Input() url: string;

  link

  constructor(private san: DomSanitizer) { }

  ngOnInit(): void {
    var one = 'https://view.officeapps.live.com/op/embed.aspx?src='

    var temp = one + this.url

    this.link = this.san.bypassSecurityTrustResourceUrl(temp);

  }



}
