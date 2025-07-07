/**
 * EmitControllerParser is used to write and read configuration data.
 *
 * @class EmitControllerParser
 */
export default class EmitControllerParser {
    private readonly _controller;
    /**
     * The constructor of the class.
     *
     * @constructor
     * @param {any} controller The controller object.
     */
    constructor(controller: any);
    /**
     * Writes the configuration data to a JSON format.
     *
     * @returns {object} The configuration object.
     */
    write: () => any;
    /**
     * Reads the configuration data from a JSON format.
     *
     * @param {object} config The configuration object.
     */
    read: (config: any) => void;
}
