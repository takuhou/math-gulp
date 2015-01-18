var should = require('should');
var math = require('../math.js');

describe('math', function(){
  it('1+1は2', function(){
    math.addition(1, 1).should.equal(2);
  });

  it('1*1は1', function(){
    math.multiplication(1, 1).should.equal(1);
  });
});