(function () {
    function createStack() {
        var stack = [];
        return {
            add: function (item) {
                return stack.push(item);
            },
            remove: function () {
                if (!stack.length)
                    return undefined;
                return stack.pop();
            },
            peek: function () {
                if (!stack.length)
                    return undefined;
                return stack[stack.length - 1];
            },
            length: function () {
                return stack.length;
            },
            isEmpty: function () {
                return stack.length === 0;
            }
        };
    }
    var stack = createStack();
    stack.add('undies');
    stack.add('socks');
    stack.add('pants');
    stack.add('shoes');
    console.log(stack.peek());
    stack.remove();
    console.log(stack.peek());
    stack.remove();
    console.log(stack.peek());
    console.log(stack.isEmpty());
    stack.remove();
    console.log(stack.peek());
    stack.remove();
    console.log(stack.isEmpty());
})();
