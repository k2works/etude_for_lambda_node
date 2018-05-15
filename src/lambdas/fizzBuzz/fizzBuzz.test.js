import * as chai from "chai";
import FizzBuzz from "./fizzBuzz";

describe("A FizzBuzz generator", () => {
    it("should return the number 1 when 1 is played",() => {
        var fizzBuzz = new FizzBuzz(1);
        var result = fizzBuzz.generate(1);
        chai.expect(result).to.equal(1);
    });
});
