import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class MiscService {

  constructor() { }

  private loaded = new BehaviorSubject<boolean>(false); // true is your initial value
  loaded$ = this.loaded.asObservable();

  setLoadStatus(){
    this.loaded.next(true);
  }

  // private get loadStatus(): boolean {
  //   return this.fixed.getValue()
  // }

}
