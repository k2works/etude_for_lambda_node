import * as chai from "chai";
import FizzBuzz from "./fizzBuzz";

describe("A FizzBuzz generator", () => {
    var fizzBuzz;
    var FIZZ = 'Fizz';
    var BUZZ = 'Buzz';
    var FIZZ_BUZZ = 'FizzBuzz';

    beforeEach(() => {
        fizzBuzz = new FizzBuzz();
    });

    it("should return the number 1 when 1 is played",() => {
        var result = fizzBuzz.generate(1);
        chai.expect(result).to.equal(1);
    });

    it("should return the number 2 when 2 is played", () => {
        var result = fizzBuzz.generate(2);
        chai.expect(result).to.equal(2);
    });

    it('should return "Fizz" when 3 is played', () => {
        var result = fizzBuzz.generate(3);
        chai.expect(result).to.equal('Fizz');
    });

    it('should return "Fizz" when 6 is played', () => {
        var result = fizzBuzz.generate(6);
        chai.expect(result).to.equal(FIZZ);
    });

    it('should return "Buzz" when 5 is played', () => {
        var result = fizzBuzz.generate(5);
        chai.expect(result).to.equal(BUZZ);
    });

    it('should return "Buzz" when 10 is played', () => {
        var result = fizzBuzz.generate(10);
        chai.expect(result).to.equal(BUZZ);
    });

    it('should return "FizzBuzz" when 15 is played', () => {
        var result = fizzBuzz.generate(15);
        chai.expect(result).to.equal(FIZZ_BUZZ);
    });

    it('should return "FizzBuzz" when 30 is played', () => {
        var result = fizzBuzz.generate(30);
        chai.expect(result).to.equal(FIZZ_BUZZ);
    });
});
