import Particle from '../Particle';
import Model from '../Model';
import TurbulencePool from '../util/turbulencePool';
/**
 * EmitterBehaviours class manages the behaviour of particles
 */
export default class EmitterBehaviours {
    behaviours: any;
    /**
     * Gets all the enabled behaviours
     *
     * @return {any[]} The enabled behaviours
     */
    getAll: () => any;
    /**
     * Clears all the stored behaviours
     */
    clear: () => void;
    /**
     * Adds a behaviour
     *
     * @param {any} behaviour The behaviour to add
     *
     * @return {any} The added behaviour
     */
    add: (behaviour: any) => any;
    /**
     * Checks if there are no behaviours stored
     *
     * @return {boolean} True if there are no behaviours stored, false otherwise
     */
    isEmpty: () => boolean;
    /**
     * Gets a behaviour by name
     *
     * @param {string} name The name of the behaviour to get
     *
     * @return {any | null} The behaviour with the given name or null if not found
     */
    getByName: (name: string) => any;
    /**
     * Removes a behaviour by name
     *
     * @param {string} name The name of the behaviour to remove
     */
    removeByName: (name: string) => void;
    /**
     * Initialises the behaviours
     *
     * @param {Particle} particle The particle
     * @param {Model} model The model
     * @param {Model} turbulencePool The turbulencePool
     */
    init: (particle: Particle, model: Model, turbulencePool: TurbulencePool) => void;
    /**
     * Applies the behaviours
     *
     * @param {Particle} particle The particle
     * @param {number} deltaTime The delta time
     * @param {Model} model The model
     */
    apply: (particle: Particle, deltaTime: number, model: Model) => void;
    /**
     * Update once per frame
     *
     * @param {number} deltaTime The delta time
     */
    update: (deltaTime: number) => void;
}
