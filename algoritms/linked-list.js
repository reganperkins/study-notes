(function () {
    function createNode(value) {
        return {
            value,
            next: null,
        };
    }
    function createLinkedList() {
        return {
            head: null,
            tail: null,
            length: 0,
            push(item) {
                const node = createNode(item);
                if (!this.head) {
                    this.head = node;
                    this.tail = node;
                    this.length++;
                    return node;
                }
                this.tail.next = node;
                this.tail = node;
                this.length++;
                return node;
            },
            pop() {
                if (this.isEmpty()) {
                    return null;
                }
                const node = this.tail;
                if (this.head === this.tail) {
                    this.head = null;
                    this.tail = null;
                    this.length--;
                    return node;
                }
                let penultimate;
                let current = this.head;
                while (current) {
                    if (current.next === this.tail) {
                        penultimate = current;
                        break;
                    }
                    current = current.next;
                }
                penultimate.next = null;
                this.tail = penultimate;
                this.length--;
                return node;
            },
            delete(index) {
                if (this.isEmpty() || index > this.length) {
                    return null;
                }
                let current = this.head;
                let deleted = null;
                if (index === 0) {
                    deleted = current;
                    this.head = current.next;
                    this.length--;
                    return deleted;
                }
                let counter = 0;
                while (current) {
                    if (counter + 1 === index) {
                        deleted = current.next;
                        current.next = deleted.next;
                        if (deleted.next === null) {
                            this.tail = current;
                        }
                        break;
                    }
                    current = current.next;
                    counter++;
                }
                this.length--;
                return deleted;
            },
            isEmpty() {
                return this.length === 0;
            },
            list() {
                const items = [];
                let current = this.head;
                while (current) {
                    items.push(`${current.value} -> `);
                    current = current.next;
                }
                return items;
            }
        };
    }
    const list = createLinkedList();
    const values = ['a', 'b', 'c', 'd', 'e'];
    const nodes = values.map(val => list.push(val));
    console.log('isEmpty', list.isEmpty());
    console.log(list.list());
    list.pop();
    console.log(list.list());
    list.delete(1);
    console.log(list.list());
})();
