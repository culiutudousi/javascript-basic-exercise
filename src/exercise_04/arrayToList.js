export default function arrayToList(array) {
  // This function creates a linked list from an array.
  //
  // Your target:
  //
  // * Please implement this function and pass all the tests in array_to_list_spec.js.
  // * Please do NOT modify the signature of the function.

  if (array == null) {
    throw new Error('Creating list from undefined array');
  }
  if (array.length === 0) {
    throw new Error('Creating list from empty array');
  }

  function ListNode(value, next) {
    this.value = value;
    this.next = next;
  }

  return array.reverse().reduce((acc, curr) => new ListNode(curr, acc), null);
}
