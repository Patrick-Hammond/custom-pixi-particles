import { Behaviour } from './index';
import Particle from '../Particle';
export default class StretchBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    baseScale: number;
    stretchFactor: number;
    minStretch: number;
    maxStretch: number;
    init: (particle: Particle) => void;
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Gets the name of the behaviour.
     * @return {string} The name of the behaviour.
     */
    getName(): string;
    /**
     * Retrieves the properties of the behaviour.
     * @returns {object} The properties of the behaviour.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        baseScale: number;
        stretchFactor: number;
        minStretch: number;
        maxStretch: number;
        name: string;
    };
}
