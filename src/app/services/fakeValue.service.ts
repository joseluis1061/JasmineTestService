import { of } from 'rxjs';

export class FakeValueService {
  private value:string = 'my fake value';

  constructor() { }

  getValue(){
    return this.value;
  }

  setValue(newValue: string){
    this.value = newValue;
  }

  promiseValue(){
    return Promise.resolve('Fake Promise value');
  }

  getObservableValue(){
    return of('Observable value');
  }
}
