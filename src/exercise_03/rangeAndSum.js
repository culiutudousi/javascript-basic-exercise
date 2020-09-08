export function range(start, end) {
  // This function creates an array which contains numbers within a range specified by `start`
  // and `end`.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (start === end) {
    return [];
  }
  if (end > start) {
    return [...Array(end - start).keys()].map((v, i) => start + i);
  }
  return [...Array(start - end).keys()].map((v, i) => start - i);
}

export function sum(...numbers) {
  // This function sums all the numbers in the array and returns the final result.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in range_and_array_spec.js.
  // * Please do NOT modify the signature of the function.

  if (!numbers || numbers.length === 0) {
    return 0;
  }
  return numbers.reduce((prev, curr) => prev + curr);
}
