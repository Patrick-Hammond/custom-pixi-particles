import { Behaviour } from './index';
import Particle from '../Particle';
export default class CollisionBehaviour extends Behaviour {
    enabled: boolean;
    skipPositionBehaviourOnCollision: boolean;
    skipAngularVelocityBehaviourOnCollision: boolean;
    skipColorBehaviourOnCollision: boolean;
    skipAttractionRepulsionBehaviourOnCollision: boolean;
    skipEmitDirectionBehaviourOnCollision: boolean;
    skipRotationBehaviourOnCollision: boolean;
    skipSizeBehaviourOnCollision: boolean;
    priority: number;
    distance: number;
    lines: {
        point1: {
            x: number;
            y: number;
        };
        point2: {
            x: number;
            y: number;
        };
    }[];
    /**
     * Function that initializes a particle
     */
    init: () => void;
    /**
     * Applies the particle's velocity and acceleration to move it and calculate its size, rotation, and position.
     * @param {Particle} particle - The particle to be moved
     */
    apply: (particle: Particle) => void;
    reflectVelocity: (particle: Particle, normal: {
        x: number;
        y: number;
    }) => void;
    checkCollisionAndReflect: (particle: Particle) => boolean;
    calculateNormal: (point1: {
        x: number;
        y: number;
    }, point2: {
        x: number;
        y: number;
    }) => {
        x: number;
        y: number;
    };
    pointToLineDistance: (x: number, y: number, x1: number, y1: number, x2: number, y2: number) => number;
    /**
     * Gets the name of the behaviour
     * @return {BehaviourNames} The name of the behaviour
     */
    getName(): string;
    /**
     * @description Retrieves the properties of the object.
     * @returns {Object} The properties of the object.
     */
    getProps(): {
        enabled: boolean;
        skipPositionBehaviourOnCollision: boolean;
        skipAngularVelocityBehaviourOnCollision: boolean;
        skipColorBehaviourOnCollision: boolean;
        skipAttractionRepulsionBehaviourOnCollision: boolean;
        skipEmitDirectionBehaviourOnCollision: boolean;
        skipRotationBehaviourOnCollision: boolean;
        skipSizeBehaviourOnCollision: boolean;
        priority: number;
        lines: {
            point1: {
                x: number;
                y: number;
            };
            point2: {
                x: number;
                y: number;
            };
        }[];
        distance: number;
        name: string;
    };
}
