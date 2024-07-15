import { Calculator } from './calculator';

describe('Test for Calculator', () => {
  describe('Multiplicate test', () => {

    it('#multiply should return a nine', () => {
      //Arrage
      const calculator = new Calculator();
      //Act
      const rta = calculator.multiply(3, 3);
      //Assert
      expect(rta).toEqual(9);
    });
    it('#multiply should return a four', () => {
      //Arrage
      const calculator = new Calculator();
      //Act
      const rta = calculator.multiply(2, 2);
      //Assert
      expect(rta).toEqual(4);
    });
    it('#divide should return a nine', () => {
      //Arrage
      const calculator = new Calculator();
      //Act
      const rta = calculator.divide(27, 3);
      //Assert
      expect(rta).toEqual(9);
    });
    it('Matchers test', () => {
      //Arrage
      let name = 'jose';
      let name2;
      //Assert
      expect(name).toBeDefined();
      expect(name2).toBe(undefined);

      expect(3 + 4 === 7).toBeTruthy();
      expect(1 + 2 === 5).toBeFalsy();

      expect(5).toBeLessThan(10);
      expect(15).toBeGreaterThan(10);

      expect('123456').toMatch(/123/);
    });
  })
});
