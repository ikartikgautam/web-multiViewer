import { Component, EventEmitter, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  @Input() url: string;

  constructor() { }

  ngOnInit(): void {
  }

  zoom = 1.0;

  zoomIn() {
    this.zoom = this.zoom + 0.1
  }
  zoomOut() {
    this.zoom = this.zoom - 0.1
  }

}
