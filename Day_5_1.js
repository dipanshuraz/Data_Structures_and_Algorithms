// slow & fast pointer (Two Pointers)
// Given the head of a Singly LinkedList, write a method to return the middle node of the LinkedList. If the total number of nodes in the LinkedList is even, return the second middle node.

const findMidLinkedList = (head) => {
  if (head == null) return false;
  let slow = head,
    fast = head;
  while ((fast != null, fast.next != null)) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

// Time Complexity O(N)
// Space Complexity O(1)
