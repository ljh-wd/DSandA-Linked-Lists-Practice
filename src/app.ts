import express from "express";

const app = express();
const port = 3000;

app.listen(port);

let arr1 = [1, 2, 3, 4];
let arr2 = [5, 6, 7, 8];
let arr3 = [9, 10, 11, 12];

let data = [arr1, arr2, arr3];

class ListNode {
  data: any[];
  next: ListNode | null;
  prev: ListNode | null;

  constructor(
    data: any[],
    next: ListNode | null = null,
    prev: ListNode | null = null
  ) {
    (this.data = data), (this.next = next), (this.prev = prev);
  }
}

function arrayToLinkedList(array: any[][]): ListNode | null {
  let head: ListNode | null = null;
  let current: ListNode | null = null;

  for (let i = 0; i < array.length; i++) {
    const element = array[i];

    const newNode = new ListNode(element);

    if (head === null) {
      head = newNode;
    } else if (current !== null) {
      current.next = newNode;
      current.prev = current;
    }

    current = newNode;
  }
  return head;
}

let head: ListNode | null = arrayToLinkedList(data);

function traverseLinkedList(head: ListNode | null): void {
  let current = head;

  while (current !== null) {
    // console.log(current);
    console.log(current.data);
    current = current.next;
  }
}

traverseLinkedList(head);
