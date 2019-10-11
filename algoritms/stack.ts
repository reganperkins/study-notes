(function() {
  interface IStackOptions {
    add: (item: string) => number;
    remove: () => string;
    peek: () => string;
    length: () => number;
    isEmpty: () => boolean;
  }

  function createStack():IStackOptions {
    const stack = [];
    return {
      add(item) {
        return stack.push(item);
      },
      remove() {
        if (!stack.length) return undefined;
        return stack.pop();
      },
      peek() {
        if (!stack.length) return undefined;
        return stack[stack.length - 1];
      },
      length() {
        return stack.length;
      },
      isEmpty() {
        return stack.length === 0;
      }
    };
  }
  const stack = createStack();

  stack.add('undies');
  stack.add('socks');
  stack.add('pants');
  stack.add('shoes');
  console.log(stack.peek())
  stack.remove()
  console.log(stack.peek())
  stack.remove()
  console.log(stack.peek())
  console.log(stack.isEmpty())
  stack.remove()
  console.log(stack.peek())
  stack.remove()
  console.log(stack.isEmpty())

})();
