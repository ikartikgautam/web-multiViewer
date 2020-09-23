import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bottom-buttons',
  templateUrl: './bottom-buttons.component.html',
  styleUrls: ['./bottom-buttons.component.scss']
})
export class BottomButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
