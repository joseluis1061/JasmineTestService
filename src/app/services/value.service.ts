import { Injectable } from '@angular/core';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ValueService {
  private value:string = 'my value';

  constructor() { }

  getValue(){
    return this.value;
  }

  setValue(newValue: string){
    this.value = newValue;
  }

  promiseValue(){
    return Promise.resolve('Promise value');
  }

  getObservableValue(){
    return of('Observable value');
  }
}
