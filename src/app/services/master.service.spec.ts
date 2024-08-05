import { TestBed } from '@angular/core/testing';
import { MasterService } from './master.service';
import { ValueService } from './value.service';

fdescribe('MasterService', () => {

  let masterService: MasterService;
  let valueServiceSpy: jasmine.SpyObj<ValueService>;

  beforeEach(() => {
    // Crear el spy para la función getValue del servicio ValueService
    const spy = jasmine.createSpyObj('ValueService', ['getValue']);
    TestBed.configureTestingModule({
      providers: [
        MasterService,
        { provide: ValueService, useValue: spy} // Remplazar nuestro servicio con el spy
      ]
    });
    masterService = TestBed.inject(MasterService);
    valueServiceSpy = TestBed.inject(ValueService) as jasmine.SpyObj<ValueService>; // Instanciar el servicio en la prueba
  });

  describe('Service MasterService should created', () => {
    it('should be created', () => {
      expect(masterService).toBeTruthy();
    });
  })


  //2. Implementar un muck spia usando el que creamos con testBed
  it('Should return "Fake value spies" and connection to ValueService', () => {
    valueServiceSpy.getValue.and.returnValue("Fake value spies"); // Valor que retorna el espia al ser llamado
    expect(masterService.getNewValue()).toBe("Fake value spies"); //Valor esperado
    expect(valueServiceSpy.getValue).toHaveBeenCalled();  // Verificar el llamado
    expect(valueServiceSpy.getValue).toHaveBeenCalledTimes(1); // Verificar que solo se llame una vez
  });
});
