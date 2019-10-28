var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  // Add
  it('it can add numbers together', function(){
    calculator.previousTotal = 1;
    calculator.add(4);
    assert.strictEqual(calculator.runningTotal, 5)
  })

  // Subtract
  it('it can subtract numbers', function(){
    calculator.previousTotal = 7;
    calculator.subtract(4);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  // Multiply
  it('it can multiply numbers', function(){
    calculator.previousTotal = 3;
    calculator.multiply(5);
    assert.strictEqual(calculator.runningTotal, 15)
  })

  // Divide
  it('it can divide numbers', function(){
    calculator.previousTotal = 21;
    calculator.divide(7);
    assert.strictEqual(calculator.runningTotal, 3)
  })

  // Concatenate multiple number clicks
  it('it can concatenate multiple number clicks together', function(){
  calculator.numberClick(5);
  calculator.numberClick(5);
  assert.strictEqual(calculator.runningTotal, 55)
  })

  // Concatenate multiple operation clicks
  it('it can concatenate multiple operation clicks together', function(){
  calculator.numberClick(5);
  calculator.operatorClick('+');
  calculator.numberClick(5);
  calculator.operatorClick('+');
  calculator.numberClick(5);
  calculator.operatorClick('=');
  assert.strictEqual(calculator.runningTotal, 15)
  })

  // Concatenate multiple operation clicks
  it('it can concatenate multiple operation clicks together', function(){
  calculator.numberClick(5);
  calculator.operatorClick('+');
  calculator.clearClick();
  calculator.numberClick(5);
  calculator.operatorClick('=');
  assert.strictEqual(calculator.runningTotal, 10)
  })

});
