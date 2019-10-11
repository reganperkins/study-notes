
interface IOptions{
  enqueue: (item: any) => number;
  dequeue: () => any;
  peek: () => string;
  length: number;
  isEmpty: () => boolean;
}

function createQueue(): IOptions {
  const queue = [];
  return {
    enqueue(item) {
      return queue.unshift(item);
    },
    dequeue() {
      if (!queue.length) {
        return undefined;
      }
      return queue.pop();
    },
    peek () {
      if (!queue.length) {
        return undefined;
      }
      return queue[queue.length - 1];
    },
    get length () {
      return queue.length;
    },
    isEmpty () {
      return queue.length === 0;
    }
  }
}
function queueDemo() {
  const queue = createQueue();
  console.log('length -', queue.length);
  console.log('isEmpty -', queue.isEmpty());
  queue.enqueue('fix');
  queue.enqueue('bug');
  queue.enqueue('be happy - your done!');
  console.log('length -', queue.length);
  console.log('peek -', queue.peek());
  queue.dequeue();
  console.log('peek -', queue.peek());
  queue.dequeue();
  console.log('peek -', queue.peek());
  queue.dequeue();
  console.log('empty -', queue.isEmpty());
}

queueDemo();

export {
  createQueue
};