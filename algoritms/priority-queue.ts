(function() {
  interface IOptions {
    list: string[];
    enqueue: (item: string, priority?: boolean) => number,
    dequeue: () => string,
    peek: () => string;
    length: number;
    isEmpty: () => boolean;
  }

  function createPriorityQueue(): IOptions {
    const heighPriorityQueue: string[] = [];
    const lowPriorityQueue: string[] = [];

    return {
      get list() {
        return [...lowPriorityQueue, ...heighPriorityQueue];
      },
      enqueue (item, priority = false) {
        if (priority) {
          return heighPriorityQueue.unshift(item);
        }
        return lowPriorityQueue.unshift(item);
      },
      dequeue() {
        if (!this.list.length) {
          return undefined;
        }
        if (heighPriorityQueue.length > 0) {
          return heighPriorityQueue.pop();
        } 
        return lowPriorityQueue.pop();
      },
      peek() {
        if (!this.list.length) {
          return undefined;
        }
        return this.list[this.list.length - 1];
      },
      get length() {
        return heighPriorityQueue.length + lowPriorityQueue.length;
      },
      isEmpty() {
        return this.list.length === 0;
      }
    };
  };

  const priorityQueue = createPriorityQueue();
  
  priorityQueue.enqueue('fix');
  priorityQueue.enqueue('bug');
  priorityQueue.enqueue('HIGH PRIORITY FIX', true);
  priorityQueue.enqueue('be happy - your done!');

  console.log('length -', priorityQueue.length);
  console.log('peek -', priorityQueue.peek());
  priorityQueue.dequeue();
  console.log('peek -', priorityQueue.peek());
  priorityQueue.dequeue();
  console.log('peek -', priorityQueue.peek());
  priorityQueue.dequeue();
  console.log('peek -', priorityQueue.peek());
  priorityQueue.dequeue();
  console.log('empty -', priorityQueue.isEmpty());

})();
