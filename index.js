function capitalise(string) {
  const first = string[0].toUpperCase();
  const rest = string.slice(1);
  return first + rest;
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

class Calculator {
  add(a, b) {
    return a + b;
  }
  subtract(a, b) {
    return a - b;
  }
  divide(a, b) {
    return a / b;
  }
  multiply(a, b) {
    return a * b;
  }
}
const calcutator = new Calculator();

function caesarCipher(string, shift) {
  let newString = "";
  for (let char of string) {
    if (/[A-Z]/.test(char)) {
      const newChar = shiftUpperCase(char, shift);
      newString += newChar;
    } else if (/[a-z]/.test(char)) {
      const newChar = shiftLowerCase(char, shift);
      newString += newChar;
    } else {
      newString += char;
    }
  }

  function shiftLowerCase(char, shift) {
    const asciiValue = char.charCodeAt(0);
    const newAsciiValue =
      ((asciiValue - "a".charCodeAt(0) + shift) % 26) + "a".charCodeAt(0);
    return String.fromCharCode(newAsciiValue);
  }

  function shiftUpperCase(char, shift) {
    const asciiValue = char.charCodeAt(0);
    const newAsciiValue =
      ((asciiValue - "A".charCodeAt(0) + shift) % 26) + "A".charCodeAt(0);
    return String.fromCharCode(newAsciiValue);
  }
  return newString;
}

function analyzeArray(numbers) {
  const result = numbers.reduce(
    (acc, num) => {
      // Accumulate the sum for the average
      acc.sum += num;

      // Check for the minimum number
      if (num < acc.min) {
        acc.min = num;
      }

      // Check for the maximum number
      if (num > acc.max) {
        acc.max = num;
      }

      return acc;
    },
    {
      sum: 0,
      min: Infinity,
      max: -Infinity,
    }
  );

  // Calculate the average
  result.average = result.sum / numbers.length;

  // Add the length property
  result.length = numbers.length;

  // Remove the sum property as it's not needed in the final object
  delete result.sum;

  return result;
}

export {
  analyzeArray,
  caesarCipher,
  capitalise,
  reverseString,
  Calculator,
  calcutator,
};
