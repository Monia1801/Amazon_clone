import {formatCurrency} from '../scripts/utils/money.js';

//describe(name of test suite in string, function to test in test suite) is used to create a test suite
describe('test suite: fromatCurrency',()=>{

  //it(name of the test in string, function to test) is used to create test
  it('converts cents into dollars',()=>{

    //instead of using if-else we can use expect to compare to values
    //expect converts the parameter to an object
    expect(formatCurrency(2095)).toEqual('20.95');
  });

  it('works with 0',()=>{
    expect(formatCurrency(0)).toEqual('0.00');
  });

  it('rounds up to the nearest cent',()=>{
    expect(formatCurrency(2000.5)).toEqual('20.01');
  });
});

//after completing this load it in the test.html file