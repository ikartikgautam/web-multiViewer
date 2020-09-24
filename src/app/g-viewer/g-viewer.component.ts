import { Component, Input, OnInit, } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MiscService } from '../services/misc.service';

@Component({
  selector: 'app-g-viewer',
  templateUrl: './g-viewer.component.html',
  styleUrls: ['./g-viewer.component.scss']
})
export class GViewerComponent implements OnInit {

  @Input() url: string;

  constructor(private san: DomSanitizer) { }

  link

  //https://docs.google.com/gview?url=https://file-examples.com/wp-content/uploads/2017/02/file-sample_100kB.doc&&embedded=true

  ngOnInit(): void {

    var pre = 'https://docs.google.com/gview?url='
    var suff = '&embedded=true'

    var temp = pre + this.url + suff

    this.link = this.san.bypassSecurityTrustResourceUrl(temp);

    let iframe = document.getElementById('iframe') as HTMLIFrameElement

    var refresher = setInterval(() => {
      if (this.loaded) {
        clearInterval(refresher);
        return;
      }
      iframe.src = iframe.src
    }, 5000);

  }

  loaded = false;

  done() {
    console.log("done")
    this.loaded = true;
  }

}
