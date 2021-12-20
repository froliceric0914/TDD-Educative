const fizzBuzz = require("./index")

describe('fizzBuzz()', () => {
  it('return "FizzBuzz" for multiples 3 and 5', () => {
    expect(fizzBuzz(15)).toBe("FizzBuzz");
    expect(fizzBuzz(30)).toBe("FizzBuzz");
  });

  it('return "FizzBuzz" for multiples 3', () => {
    expect(fizzBuzz(33)).toBe("Fizz");
    expect(fizzBuzz(3)).toBe("Fizz");
  });

  it('return "FizzBuzz" for multiples 3 and 5', () => {
    expect(fizzBuzz(5)).toBe("Buzz");
    expect(fizzBuzz(25)).toBe("Buzz");
  });

  it('return "FizzBuzz" for multiples neither 3 or 5', () => {
    expect(fizzBuzz(1)).toBe("1");
    expect(fizzBuzz(22)).toBe("22");
  });
});