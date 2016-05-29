import expect from 'expect';
import {authorsFormattedForDropdown} from './selectors';

describe('Author selectors', () => {
  describe('authorsFormattedForDropdown', () => {
    it('should return author data formatted for a dropdown', () => {
      const authors = [
        { id: 'asdf', firstName: 'A', lastName: 'F' },
        { id: 'qwer', firstName: 'Q', lastName: 'R' }
      ];
      const expected = [
        { value: 'asdf', text: 'A F' },
        { value: 'qwer', text: 'Q R' }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
