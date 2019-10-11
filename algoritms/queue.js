"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function createQueue() {
    var queue = [];
    return {
        enqueue: function (item) {
            return queue.unshift(item);
        },
        dequeue: function () {
            if (!queue.length) {
                return undefined;
            }
            return queue.pop();
        },
        peek: function () {
            if (!queue.length) {
                return undefined;
            }
            return queue[queue.length - 1];
        },
        get length() {
            return queue.length;
        },
        isEmpty: function () {
            return queue.length === 0;
        }
    };
}
exports.createQueue = createQueue;
function queueDemo() {
    var queue = createQueue();
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
