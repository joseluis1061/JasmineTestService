import { MasterService } from './master.service';
import { ValueService } from './value.service';
import { FakeValueService } from './fakeValue.service';

fdescribe('MasterService', () => {
  it('should retrun "my value" from real service', () => {
    //1. Como master consume a valueService es necesario instanciarlo
    const valuseService = new ValueService();
    const masterService = new MasterService(valuseService);
    expect(masterService.getNewValue()).toBe("my value");
  });

  //2. Mediante una clase falsa
  it('should retrun "my fake value" from fake class service', () => {
    const fakeValueService = new FakeValueService();
    const masterService = new MasterService(fakeValueService as unknown as ValueService);
    expect(masterService.getNewValue()).toBe("my fake value");
  });

  //3. Mediante un metodo falso
  it('should retrun "my value fake method" from fake method', () => {
    const fakeMethod = {getValue: ()=> {return "my value fake method"}};
    const masterService = new MasterService(fakeMethod as ValueService);
    expect(masterService.getNewValue()).toBe("my value fake method");
  });
});
