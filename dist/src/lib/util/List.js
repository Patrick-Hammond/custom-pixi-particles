/**
 * List is a class which allows items to be added, removed and iterated through.
 *
 * @class List
 */
export default class List {
    constructor() {
        /**
         * Stores the first item of the list
         *
         * @member {any}
         */
        this.first = null;
        /**
         * Stores the length of the list
         *
         * @member {number}
         */
        this.length = 0;
    }
    /**
     * Returns true if the list is empty
     *
     * @returns {boolean}
     */
    isEmpty() {
        return this.first === null;
    }
    /**
     * Adds an item to the list
     *
     * @param {any} item
     * @returns {any}
     */
    add(item) {
        item.prev = null;
        item.next = null;
        if (this.first) {
            this.first.prev = item;
        }
        item.next = this.first;
        this.first = item;
        this.length++;
        return item;
    }
    /**
     * Iterates through the list, calling the callback for each item
     *
     * @param {any} callback
     */
    forEach(callback) {
        let current = this.first;
        let next = null;
        while (current) {
            next = current.next;
            callback(current);
            current = next;
        }
    }
    /**
     * Removes an item from the list
     *
     * @param {any} item
     */
    remove(item) {
        const previous = item.prev;
        const next = item.next;
        if (previous)
            previous.next = next;
        if (next)
            next.prev = previous;
        if (this.first === item)
            this.first = item.next;
        item.prev = null;
        item.next = null;
        this.length--;
    }
    /**
     * Resets the list
     *
     */
    reset() {
        this.first = null;
        this.length = 0;
    }
}
//# sourceMappingURL=List.js.map