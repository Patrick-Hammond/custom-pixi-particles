import BehaviourParser from '../parser/BehaviourParser';
import { Random } from '../util';
/**
 * Creates a new Behaviour
 *
 * @class
 */
export default class Behaviour {
    constructor() {
        /**
         * A protected property used to store the priority of the behaviour
         *
         * @protected
         */
        this.priority = 0;
        /**
         * Calculates the variance from a given value
         *
         * @param {number} value - a given value
         * @returns {number} the variance based on the given value
         */
        this.varianceFrom = (value) => {
            if (value === 0)
                return 0;
            return Random.uniform(-1.0, 1.0) * value;
        };
        /**
         * Gets the parser for the behaviour
         *
         * @returns {BehaviourParser} The parser for the behaviour
         */
        this.getParser = () => {
            return new BehaviourParser(this);
        };
    }
    /**
     * Gets the name of the behaviour
     *
     * @returns {string} The name of the behaviour
     */
    getName() {
        throw new Error('This method has to be overridden in subclass');
    }
}
//# sourceMappingURL=Behaviour.js.map