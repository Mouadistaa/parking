import { toSlug } from "../src/utils/toSlug";
import { generateRandomNumberId } from "../src/utils/generateRandomNumberId";


test('toSlug converts strings to slugs', () => {
  expect(toSlug('Je suis un exemple')).toBe('je-suis-un-exemple');
  expect(toSlug('Éxãmplê çhäractères!')).toBe('example-characteres');
});

test('generateRandomNumberId generates a 6-digit number', () => {
  const id = generateRandomNumberId();
  expect(id).toBeGreaterThanOrEqual(100000);
  expect(id).toBeLessThanOrEqual(999999);
});
