/**
 * Class used to parse a behaviour object into a JSON config object and vice versa
 */
export default class BehaviourParser {
    private readonly _behaviour;
    /**
     * Constructs a BehaviourParser object.
     * @param {any} behaviour The behaviour to be parsed.
     */
    constructor(behaviour: any);
    /**
     * Writes the behaviour to a config object.
     * @returns {object} The config object.
     */
    write: () => any;
    /**
     * Reads a config object and sets the behaviour appropriately.
     * @param {object} config The config object to be read.
     */
    read: (config: any) => void;
}
