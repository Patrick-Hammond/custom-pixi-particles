// tslint:disable:prefer-for-of
/**
 * EmitterBehaviours class manages the behaviour of particles
 */
export default class EmitterBehaviours {
    constructor() {
        this.behaviours = [];
        /**
         * Gets all the enabled behaviours
         *
         * @return {any[]} The enabled behaviours
         */
        this.getAll = () => {
            return this.behaviours.filter((behaviour) => {
                return behaviour.enabled;
            });
        };
        /**
         * Clears all the stored behaviours
         */
        this.clear = () => {
            this.behaviours = [];
        };
        /**
         * Adds a behaviour
         *
         * @param {any} behaviour The behaviour to add
         *
         * @return {any} The added behaviour
         */
        this.add = (behaviour) => {
            if (this.getByName(behaviour.getName()) !== null) {
                throw new Error('Emitter duplicate');
            }
            this.behaviours.push(behaviour);
            this.behaviours.sort((a, b) => {
                return b.priority - a.priority;
            });
            return behaviour;
        };
        /**
         * Checks if there are no behaviours stored
         *
         * @return {boolean} True if there are no behaviours stored, false otherwise
         */
        this.isEmpty = () => {
            return this.getAll().length === 0;
        };
        /**
         * Gets a behaviour by name
         *
         * @param {string} name The name of the behaviour to get
         *
         * @return {any | null} The behaviour with the given name or null if not found
         */
        this.getByName = (name) => {
            for (let i = 0; i < this.behaviours.length; ++i) {
                if (this.behaviours[i].getName() === name) {
                    return this.behaviours[i];
                }
            }
            return null;
        };
        /**
         * Removes a behaviour by name
         *
         * @param {string} name The name of the behaviour to remove
         */
        this.removeByName = (name) => {
            const behaviours = [];
            for (let i = 0; i < this.behaviours.length; ++i) {
                if (this.behaviours[i].getName() !== name) {
                    behaviours.push(this.behaviours[i]);
                }
            }
            this.behaviours = behaviours;
        };
        /**
         * Initialises the behaviours
         *
         * @param {Particle} particle The particle
         * @param {Model} model The model
         * @param {Model} turbulencePool The turbulencePool
         */
        this.init = (particle, model, turbulencePool) => {
            for (let i = 0; i < this.behaviours.length; ++i) {
                this.behaviours[i].init(particle, model, turbulencePool);
            }
        };
        /**
         * Applies the behaviours
         *
         * @param {Particle} particle The particle
         * @param {number} deltaTime The delta time
         * @param {Model} model The model
         */
        this.apply = (particle, deltaTime, model) => {
            model.updateCamera(deltaTime);
            for (let i = 0; i < this.behaviours.length; ++i) {
                this.behaviours[i].apply(particle, deltaTime, model);
            }
        };
        /**
         * Update once per frame
         *
         * @param {number} deltaTime The delta time
         */
        this.update = (deltaTime) => {
            for (let i = 0; i < this.behaviours.length; ++i) {
                if (this.behaviours[i].update)
                    this.behaviours[i].update(deltaTime);
            }
        };
    }
}
//# sourceMappingURL=EmitterBehaviours.js.map