// Pattern Fast _ Slow pointers
// Given the head of a Singly LinkedList, write a function to determine if the LinkedList has a cycle in it or not.
var hasCycle = function (head) {
  if (head == null) return false;

  let slow = head,
    fast = head;

  while (fast != null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return true;
  }
  return false;
};
// Time Complexity O(N)
// Space Complexity O(1)

// Given the head of a LinkedList with a cycle, find the length of the cycle.

function findCycle(head) {
  if (head == null && head.next == null) return false;
  let slow = head,
    fast = head;
  while (fast.next != null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow == fast) return findCycleLength(slow);
  }
  return false;
}

const findCycleLength = (slow) => {
  let current = slow;
  cycle_length = 0;
  while (true) {
    current = current.next;
    cycle_length += 1;
    if (current == slow) break;
  }
  return cycle_length;
};

// Time Complexity O(N)
// Space Complexity O(1)
