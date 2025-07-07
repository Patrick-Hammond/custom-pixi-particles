/**
 * List is a class which allows items to be added, removed and iterated through.
 *
 * @class List
 */
export default class List {
    /**
     * Stores the first item of the list
     *
     * @member {any}
     */
    first: any;
    /**
     * Stores the length of the list
     *
     * @member {number}
     */
    length: number;
    /**
     * Returns true if the list is empty
     *
     * @returns {boolean}
     */
    isEmpty(): boolean;
    /**
     * Adds an item to the list
     *
     * @param {any} item
     * @returns {any}
     */
    add(item: any): any;
    /**
     * Iterates through the list, calling the callback for each item
     *
     * @param {any} callback
     */
    forEach(callback: any): void;
    /**
     * Removes an item from the list
     *
     * @param {any} item
     */
    remove(item: any): void;
    /**
     * Resets the list
     *
     */
    reset(): void;
}
