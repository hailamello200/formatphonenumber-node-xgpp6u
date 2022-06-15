const formatPhoneNumber = require('./index');

test('formate numero com 10 digitos', () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])).toBe(
    '(12) 3456-7890'
  );
});

test('formate numero com 11 digitos', () => {
  expect(formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])).toBe(
    '(12) 34567-8901'
  );
});
