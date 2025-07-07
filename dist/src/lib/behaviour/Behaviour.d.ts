import BehaviourParser from '../parser/BehaviourParser';
/**
 * Creates a new Behaviour
 *
 * @class
 */
export default class Behaviour {
    /**
     * A protected property used to store the priority of the behaviour
     *
     * @protected
     */
    protected priority: number;
    /**
     * Calculates the variance from a given value
     *
     * @param {number} value - a given value
     * @returns {number} the variance based on the given value
     */
    varianceFrom: (value: number) => number;
    /**
     * Gets the name of the behaviour
     *
     * @returns {string} The name of the behaviour
     */
    getName(): void;
    /**
     * Gets the parser for the behaviour
     *
     * @returns {BehaviourParser} The parser for the behaviour
     */
    getParser: () => BehaviourParser;
}
