import * as chai from "chai";
import FizzBuzz from "./fizzBuzz";

describe("A FizzBuzz generator", () => {
    it("should return the number 1 when 1 is played",() => {
        var fizzBuzz = new FizzBuzz(1);
        var result = fizzBuzz.generate(1);
        chai.expect(result).to.equal(1);
    });

    it("should return the number 2 when 2 is played", () => {
        var fizzBuzz = new FizzBuzz();
        var result = fizzBuzz.generate(2);
        chai.expect(result).to.equal(2);
    });

    it('should return "Fizz" when 3 is played', () => {
        var fizzBuzz = new FizzBuzz();
        var result = fizzBuzz.generate(3);
        chai.expect(result).to.equal('Fizz');
    } )
});
