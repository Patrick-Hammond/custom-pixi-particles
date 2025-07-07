import { Emitter } from '../emitter';
import Model from '../Model';
/**
 * @class EmitterParser
 * @description This class parses an Emitter object
 * @param {Emitter} emitter - the emitter object to be parsed
 */
export default class EmitterParser {
    /**
     * @memberof EmitterParser
     * @property {Emitter} emitter - the emitter object to be parsed
     */
    private readonly emitter;
    /**
     * @constructor
     * @param {Emitter} emitter - the emitter object to be parsed
     */
    constructor(emitter: any);
    /**
     * @function write
     * @description Writes the emitter configuration to a json object
     * @returns {Object} - the emitter configuration
     */
    write: () => any;
    /**
     * @function read
     * @description Reads the emitter configuration from a json object
     * @param {Object} config - the emitter configuration
     * @param {Model} model - the model to be updated
     * @returns {Emitter} - the emitter
     */
    read: (config: any, model: Model) => Emitter;
    /**
     * @function update
     * @description Updates the emitter configuration from a json object
     * @param {Object} config - the emitter configuration
     * @param {Model} model - the model to be updated
     * @param {boolean} resetDuration - should duration be reset
     * @returns {Emitter} - the emitter
     */
    update: (config: any, model: Model, resetDuration: boolean) => Emitter;
    /**
     * Retrieves an existing behaviour or creates a new behaviour
     * @param {string} name - The name of the behaviour to retreive or create
     * @param {any[]} existingBehaviours - An array of existing behaviours
     * @return {any} The existing behaviour or a new behaviour
     */
    getExistingOrCreate: (name: string, existingBehaviours: any) => any;
    /**
     * Creates a new behaviour
     * @param {string} name - The name of the behaviour to create
     * @return {any} The new behaviour
     */
    createBehaviour: (name: string) => any;
    /**
     * Creates a new behaviour properties
     * @param {string} name - The name of the behaviour to create
     * @return {any} The new behaviour properties
     */
    createBehaviourProps: (name: string) => any;
    /**
     * Creates a new emission controller
     * @param {string} name - The name of the emission controller to create
     * @return {any} The new emission controller
     */
    createEmitController: (name: string) => any;
}
