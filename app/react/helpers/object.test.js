import { getNestedProperty } from './object';

test('Object helper getNestedProperty', () => {
  const obj = {
    a: {
      b: {
        c: 'Hello',
      },
    },
  };

  expect(getNestedProperty(obj, 'a.b.c')).toBe(obj.a.b.c);
});
