class Stack {
  constructor() {
    this.item = [];
    this.count = 0;
  }

  // Add Elements
  push(elem) {
    this.item[this.count] = elem;
    this.count += 1;
    console.log(`${elem}  - ${this.count}`);
    return this.count - 1;
  }
  // remove top elem (pop)
  pop() {
    if (this.count == 0) return undefined;
    let deleteItem = this.item[this.count - 1];
    this.count -= 1;
    console.log(`${deleteItem} removed`);
    return deleteItem;
  }
  // check top elem (peek)
  peek() {
    console.log(`top elem ${this.item[this.count - 1]}`);
    return this.item[this.count - 1];
  }
  // if Empty
  isEmpty() {
    console.log(this.count === 0);
    return this.count === 0;
  }

  // return size
  size() {
    console.log(this.count);
    return this.count;
  }
  // print all elem from stack
  print() {
    let str = '';
    for (let i = 0; i < this.count; i++) {
      str += this.item[i] + ' ';
    }
    return str;
  }
  // clear stack
  clear() {
    this.item = [];
    this.count = 0;
    console.log('stack clear');
    return this.item;
  }
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.print());
stack.pop();
stack.peek();
stack.size();
stack.isEmpty();
