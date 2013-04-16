describe("A suite is just a function", function() {
  var a;

  it("and so is a spec", function() {
    a = true;

    expect(a).toBe(true);
  });
});


describe("test2", function() {
  var b;

  it("test number two", function() {
    a = true;

    expect(a).toBe(false);
  });
});