import { Point } from '../util';
import { Behaviour } from './index';
import Particle from '../Particle';
export default class GroupingBehaviour extends Behaviour {
    enabled: boolean;
    priority: number;
    groupCenter: Point;
    groupRadius: number;
    attractionStrength: number;
    repulsionStrength: number;
    orbitSpeed: number;
    randomness: number;
    boundaryEnforcement: boolean;
    dynamicRadiusSpeed: number;
    maxRadius: number;
    minRadius: number;
    clusterPoints: Point[];
    private particleAngles;
    init(particle: Particle): void;
    apply(particle: Particle, deltaTime: number): void;
    /**
     * Adjusts the group radius dynamically over time
     */
    adjustDynamicRadius(deltaTime: number): void;
    /**
     * Applies repulsion forces to keep particles apart
     */
    applyRepulsion(particle: Particle): void;
    /**
     * Enforces boundary limits to keep particles within the group radius
     */
    enforceBoundary(particle: Particle): void;
    /**
     * Finds the nearest cluster point to a given position
     */
    getNearestClusterPoint(position: Point): Point;
    getName(): string;
    getProps(): {
        enabled: boolean;
        priority: number;
        groupCenter: {
            x: number;
            y: number;
        };
        groupRadius: number;
        attractionStrength: number;
        repulsionStrength: number;
        orbitSpeed: number;
        randomness: number;
        boundaryEnforcement: boolean;
        dynamicRadiusSpeed: number;
        maxRadius: number;
        minRadius: number;
        clusterPoints: Point[];
        name: string;
    };
}
