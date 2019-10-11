var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
(function () {
    function createPriorityQueue() {
        var heighPriorityQueue = [];
        var lowPriorityQueue = [];
        return {
            get list() {
                return __spreadArrays(lowPriorityQueue, heighPriorityQueue);
            },
            enqueue: function (item, priority) {
                if (priority === void 0) { priority = false; }
                if (priority) {
                    return heighPriorityQueue.unshift(item);
                }
                return lowPriorityQueue.unshift(item);
            },
            dequeue: function () {
                if (!this.list.length) {
                    return undefined;
                }
                if (heighPriorityQueue.length > 0) {
                    return heighPriorityQueue.pop();
                }
                return lowPriorityQueue.pop();
            },
            peek: function () {
                if (!this.list.length) {
                    return undefined;
                }
                return this.list[this.list.length - 1];
            },
            get length() {
                return heighPriorityQueue.length + lowPriorityQueue.length;
            },
            isEmpty: function () {
                return this.list.isEmpty();
            }
        };
    }
    ;
    var priorityQueue = createPriorityQueue();
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
