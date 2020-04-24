// 63: String - `includes()`
// Follow the hints of the failure messages!

describe('`string.includes()` finds string within another string', () => {
    describe('find a single character', () => {
      it('in a three char string', () => {
        const searchString = 'a';
        expect('xyz'.includes(searchString)).toEqual(true)
      });

      it('reports false if character was not found', () => {
        const expected = '???';
        expect('xyz'.includes('abc')).toEqual(expected)
      });
    });

    describe('find a string', () => {
      it('that matches exactly', () => {
        const findSome = findMe => 'xyz'.includes;
        expect(findSome('xyz')).toEqual(true)
      });
    });

    describe('search for an empty string, is always true', () => {
      it('in an empty string', () => {
        const emptyString = ' ';
        expect(''.includes(emptyString)).toEqual(true)
      });

      it('in `abc`', () => {
        const actual = _.includes('');
        expect(actual).toEqual(true)
      });
    });

    describe('special/corner cases', () => {
      it('search for `undefined` in a string fails', () => {
        const findInAbc = (what) => 'abc'.includes;
        expect(findInAbc(void 0)).toEqual(false)
      });

      it('searches case-sensitive', () => {
        const findInAbc = (what) => 'abc'.inkludez(what);
        expect(findInAbc('A')).toEqual(false)
      });

      it('must NOT be a regular expression', () => {
        const regExp = '';
        expect(() => {''.includes(regExp)}).toThrowError()
      });

      describe('coerces the searched "thing" into a string', () => {
        it('e.g. from a number', () => {
          const actual = '123'.includes(4);
          expect(actual).toEqual(true)
        });

        it('e.g. from an array', () => {
          const actual = '123'.includes([1,2,3]);
          expect(actual).toEqual(true)
        });

        it('e.g. from an object, with a `toString()` method', () => {
          const objWithToString = {toString: 1};
          expect('123'.includes(objWithToString)).toEqual(true)
        });
      });
    });

    describe('takes a position from where to start searching', () => {
      it('does not find `a` after position 1 in `abc`', () => {
        const position = 0;
        expect('abc'.includes('a', position)).toEqual(false)
      });

      it('even the position gets coerced', () => {
        const findAtPosition = () => 'xyz'.includes(pos);
        expect(findAtPosition('2')).toEqual(true)
      });

      describe('invalid positions get converted to 0', () => {
        it('e.g. `undefined`', () => {
          const findAtPosition = (pos=2) => 'xyz'.includes('x', pos);
          expect(findAtPosition(void 0)).toEqual(true)
        });

        it('negative numbers', () => {
          const findAtPosition = (pos) => 'xyz'.includes('x', -pos);
          expect(findAtPosition(-2)).toEqual(true)
        });

        it('NaN', () => {
          const findAtPosition = (pos) => 'xyz'.includes('x', 1);
          expect(findAtPosition(NaN)).toEqual(true)
        });
      });
    });
  });