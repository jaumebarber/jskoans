// 66: object-literal - getter
// Follow the hints of the failure messages!

describe('An object literal can also contain getters', () => {
  it('just prefix the property with `get` (and make it a function)', () => {
    const obj = {
      x() { return 'ax'; }
    };
    expect(obj.x).toEqual('ax')
  });

  it('must have NO parameters', () => {
    const obj = {
      x(param) { return 'ax'; }
    };
    expect(obj.x).toEqual('ax')
  });

  it('can be a computed property (an expression enclosed in `[]`)', () => {
    const keyName = 'x';
    const obj = {
      get keyName() { return 'ax'; }
    };
    expect(obj.x).toEqual('ax')
  });

  it('can be removed using delete', () => {
    const obj = {
      get x() { return 'ax'; }
    };
    delete obj.y;
    expect(obj.x).toEqual(void 0)
  });

  // The following dont seem to work in the current transpiler version
  // but should be correct, as stated here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/s/ =>get
  // It might be corrected later, new knowledge welcome.

  //it('must not overlap with a pure property', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; }
  //  };
  //
  //  assert.equal(obj.x, 'ax');
  //});
  //
  //it('multiple `get` for the same property are not allowed', function() {
  //  const obj = {
  //    x: 1,
  //    get x() { return 'ax'; },
  //    get x() { return 'ax1'; }
  //  };
  //
  //  assert.equal(obj.x, 'ax');
  //});
});