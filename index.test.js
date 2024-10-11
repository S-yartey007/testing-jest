import {
  Calculator,
  calcutator,
  capitalise,
  reverseString,
  caesarCipher,
  analyzeArray,
} from "./index.js";

test("Capitalise function", () => {
  const arr = ["emma", "vic", "yartey"];
  arr.forEach((string) => {
    const first = string[0].toUpperCase();
    const rest = string.slice(1);
    const expected = first + rest;
    expect(capitalise(string)).toBe(expected);
  });
});

test("Reverses a string", () => {
  const arr = ["emma", "vic", "xylofone"];

  arr.forEach((string) => {
    const expected = string.split("").reverse().join("");
    expect(reverseString(string)).toBe(expected);
  });
});

test("Calculator", () => {
  expect(calcutator).toBeInstanceOf(Calculator);
  expect(calcutator.add(3, 5)).toBe(8);
  expect(calcutator.subtract(4, 3)).toBe(1);
  expect(calcutator.divide(4, 4)).toBe(1);
  expect(calcutator.multiply(4, 3)).toBe(12);
});

test("caesarCipher", () => {
  expect(caesarCipher).toBeDefined();
  expect(caesarCipher("abc", 1)).toBe("bcd");
  expect(caesarCipher("abc", 2)).toBe("cde");
  expect(caesarCipher("xyz", 3)).toBe("abc");
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze an array", () => {
  expect(analyzeArray).toBeDefined();
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
