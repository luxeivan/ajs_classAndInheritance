import character from '../Character';

test('Character', () => {
  const result = character([1, 2, 3]);

  expect(result).toBe(6);
});
