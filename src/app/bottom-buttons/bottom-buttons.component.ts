import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-bottom-buttons',
  templateUrl: './bottom-buttons.component.html',
  styleUrls: ['./bottom-buttons.component.scss']
})
export class BottomButtonsComponent implements OnInit {

  @Output() zoomInFn = new EventEmitter();
  @Output() zoomOutFn = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  zoomIn() {
    this.zoomInFn.emit();
  }

  zoomOut() {
    this.zoomOutFn.emit();
  }

  fullScreen() {
    var element = document.body;
    var requestMethod = element.requestFullscreen;
    requestMethod.call(element)
  }

  hoverIn() {
    var btns = document.getElementById('btn')
    btns.style.opacity = '1';
  }

  hoverOut() {
    var btns = document.getElementById('btn')
    setTimeout(() => {
      btns.style.opacity = '0';
    }, 2000);
  }

}
