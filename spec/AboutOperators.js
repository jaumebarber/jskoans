describe("About Operators", () => {
  it("addition", () => {
    var result = 0;
    //starting i at 0, add i to result and increment i by 1 until i is equal to 5
    for (var i = 0; i <= 5; i++) {
      result = result + i;
    }
    expect(result).withContext('What is the value of result?').toEqual(FILL_ME_IN);
  });

  it("assignment addition", () => {
    var result = 0;
    for (var i = 0; i <=5; i++) {
      //the code below is just like saying result = result + i; but is more concise
      result += i;
    }
    expect(result).withContext('What is the value of result?').toEqual(FILL_ME_IN);
  });

  it("subtraction", () => {
    var result = 5;
    for (var i = 0; i <= 2; i++) {
      result = result - i;
    }
    expect(result).withContext('What is the value of result?').toEqual(FILL_ME_IN);
  });

  it("assignment subtraction", () => {
    var result = 5;
    for (var i = 0; i <= 2; i++) {
      result -= i;
    }
    expect(result).withContext('What is the value of result?').toEqual(FILL_ME_IN);
  });

  //Assignment operators are available for multiplication and division as well
  //let's do one more, the modulo operator, used for showing division remainder

  it("modulus", () => {
    var result = 10;
    var x = 5;
    //again this is exactly the same as result = result % x
    result %= x;
    expect(result).withContext('What is the value of result?').toEqual(FILL_ME_IN);
  });
});
