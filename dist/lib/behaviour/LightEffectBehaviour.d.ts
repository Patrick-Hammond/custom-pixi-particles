import { Point } from '../util';
import { Behaviour } from './index';
import Particle from '../Particle';
export default class LightEffectBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    lightSource: Point;
    lightIntensity: number;
    lightColor: {
        r: number;
        g: number;
        b: number;
    };
    attenuationFactor: number;
    ambientLight: number;
    directionalLight: boolean;
    direction: Point;
    spreadAngle: number;
    volumetricLight: boolean;
    volumetricIntensity: number;
    fogDensity: number;
    init: () => void;
    apply: (particle: Particle, deltaTime: number) => void;
    /**
     * Gets the name of the behaviour
     * @return {string} The name of the behaviour
     */
    getName(): string;
    /**
     * @description Retrieves the properties of the object.
     * @returns {Object} The properties of the object.
     */
    getProps(): {
        enabled: boolean;
        priority: number;
        lightSource: {
            x: number;
            y: number;
        };
        lightIntensity: number;
        lightColor: {
            r: number;
            g: number;
            b: number;
        };
        attenuationFactor: number;
        ambientLight: number;
        directionalLight: boolean;
        direction: {
            x: number;
            y: number;
        };
        spreadAngle: number;
        volumetricLight: boolean;
        volumetricIntensity: number;
        fogDensity: number;
        name: string;
    };
}
