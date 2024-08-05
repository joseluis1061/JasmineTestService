import { TestBed } from '@angular/core/testing';
import { ValueService } from './value.service';

describe('ValueService Test', () => {
  let service: ValueService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValueService]
    })
    service = TestBed.inject(ValueService);
  });

  describe('Service should created', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  })

  describe('getValue', ()=>{
    it('should return my value string', () => {
      expect(service.getValue()).toEqual('my value');
    })
  })

  describe('setValue', ()=>{
    it('should change value from my value to new value', () => {
      expect(service.getValue()).toEqual('my value');
      service.setValue('new value');
      expect(service.getValue()).toEqual('new value');
    })
  })


  describe('promiseValue', ()=>{
    it('should return promise value string', (doneFn) => {
      (service.promiseValue()
        .then(res => {
          expect(res).toEqual('Promise value');
          doneFn();
        })
      );
    })

    it('should return promise value string async', async () => {
      const res = await service.promiseValue()
      expect(res).toEqual('Promise value')
    })

  })

  describe('getObservableValue', ()=>{
    it('should return observable value string', () => {
      service.getObservableValue().subscribe({
        next: (res) => expect(res).toEqual('Observable value')
      })
    })
  })

});
