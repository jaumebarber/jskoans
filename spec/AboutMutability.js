describe("About Mutability", () => {

  it("should expect object properties to be public and mutable", () => {
    var aPerson = {firstname: "John", lastname: "Smith" };
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toEqual(FILL_ME_IN);
  });

  it("should understand that constructed properties are public and mutable", () => {
    function Person(firstname, lastname)
    {
      this.firstname = firstname;
      this.lastname = lastname;
    }
    var aPerson = new Person ("John", "Smith");
    aPerson.firstname = "Alan";

    expect(aPerson.firstname).toEqual(FILL_ME_IN);
  });

  it("should know that variables inside a constructor and constructor args are private", () => {
    function Person(firstname, lastname)
    {
      var fullName = firstname + " " + lastname;

      this.getFirstName = function () { return firstname; };
      this.getLastName = function () { return lastname; };
      this.getFullName = function () { return fullName; };
    }
    var aPerson = new Person ("John", "Smith");

    aPerson.firstname = "Penny";
    aPerson.lastname = "Andrews";
    aPerson.fullName = "Penny Andrews";

    expect(aPerson.getFirstName()).toEqual(FILL_ME_IN);
    expect(aPerson.getLastName()).toEqual(FILL_ME_IN);
    expect(aPerson.getFullName()).toEqual(FILL_ME_IN);

    aPerson.getFullName = function () {
      return aPerson.lastname + ", " + aPerson.firstname;
    };

    expect(aPerson.getFullName()).toEqual(FILL_ME_IN);
  });

});
