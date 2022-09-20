import { utilFormatNumber } from './util-format-number';

describe('utilFormatNumber', () => {
  it('should work', () => {
    expect(utilFormatNumber(1000)).toEqual('1.000,00 €');
  });
});
