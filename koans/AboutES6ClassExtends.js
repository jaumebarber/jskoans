// 25: class - extends
// Follow the hints of the failure messages!

describe('Classes can inherit from another using `extends`', () => {
  describe('the default super class is `Object`', () => {
    it('a `class A` is an instance of `Object`', () => {
      let A
      expect(new A() instanceof FILL_ME_IN).toBeTruthy();
    });

    it('when B extends A, B is also instance of `Object`', () => {
      class A {}
      class B extends A {}
      expect(new B() instanceof FILL_ME_IN).toBeTruthy();
      expect(new B() instanceof FILL_ME_IN).toBeTruthy();
    });

    it('a class can extend `null`, and is not an instance of Object', () => {
      class NullClass extends null {}
      let nullInstance = new NullClass();
      expect(nullInstance instanceof Object).toEqual(FILL_ME_IN);
    });
  });

  describe('instance of', () => {
    it('when B inherits from A, `new B()` is also an instance of A', () => {
      let A;
      class B extends A {}
      expect(new B() instanceof FILL_ME_IN).toBeTruthy();
    });

    it('extend over multiple levels', () => {
      class A {}
      class B extends A {}
      class C extends B {}
      expect(new C instanceof A).toEqual(FILL_ME_IN);
    });
  });
});
