// Pattern Fast _ Slow pointers
// Given the head of a Singly LinkedList that contains a cycle, write a function to find the starting node of the cycle.
// Gaurav Sen : https://www.youtube.com/watch?v=-YiQZi3mLq0

function findCycleStart(head) {
  let cycleLength = 0;
  if (head == null) return false;
  let slow = head,
    fast = head;
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) {
      cycleLength = findCycleLength(slow);
      break;
    }
  }
  return findStart(head, cycleLength);
}

function findCycleLength(slow) {
  let current = slow;
  let cycleLength = 0;
  while (true) {
    current = current.next;
    cycleLength += 1;
    if (current == slow) break;
  }
  return cycleLength;
}

function findStart(head, cycleLength) {
  let pointer1 = head;
  let pointer2 = head;
  // moving pointer 2 till cycleLength
  while (cycleLength > 0) {
    pointer2 = pointer2.next;
    cycleLength -= 1;
  }
  //moving pointers until they meet at the start of the linkedlist
  while (pointer1 !== pointer2) {
    pointer1 = pointer1.next;
    pointer2 = pointer2.next;
  }
  return pointer1;
}

// Time Complexity : O(N)
// Space Complexity : O(1)
