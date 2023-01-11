import { generateInvalidPasscode, generatePasscode } from ".";

test("generatePasscode", () => {
  expect(generatePasscode(4)).toMatch(/^[\d]{4}$/);
  expect(generatePasscode(5)).toMatch(/^[\d]{5}$/);
  expect(generatePasscode(6)).toMatch(/^[\d]{6}$/);
});

test("generateInvalidPasscode", () => {
  expect(() => generateInvalidPasscode("0".repeat(3))).toThrowError();
  expect(() => generateInvalidPasscode("0".repeat(7))).toThrowError();

  expect(generateInvalidPasscode("0000")).toBe("0001");
  expect(generateInvalidPasscode("0999")).toBe("1000");
  expect(generateInvalidPasscode("9999")).toBe("0000");

  expect(generateInvalidPasscode("00000")).toBe("00001");
  expect(generateInvalidPasscode("09999")).toBe("10000");
  expect(generateInvalidPasscode("99999")).toBe("00000");

  expect(generateInvalidPasscode("000000")).toBe("000001");
  expect(generateInvalidPasscode("099999")).toBe("100000");
  expect(generateInvalidPasscode("999999")).toBe("000000");
});
