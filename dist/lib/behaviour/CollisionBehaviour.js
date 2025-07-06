import { Behaviour, BehaviourNames } from './index';
export default class CollisionBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.enabled = false;
        this.skipPositionBehaviourOnCollision = false;
        this.skipAngularVelocityBehaviourOnCollision = false;
        this.skipColorBehaviourOnCollision = false;
        this.skipAttractionRepulsionBehaviourOnCollision = false;
        this.skipEmitDirectionBehaviourOnCollision = false;
        this.skipRotationBehaviourOnCollision = false;
        this.skipSizeBehaviourOnCollision = false;
        this.priority = 10000;
        this.distance = 10;
        this.lines = [
            { point1: { x: 0, y: 0 }, point2: { x: 0, y: 0 } },
        ];
        /**
         * Function that initializes a particle
         */
        this.init = () => {
            // do nothing
        };
        /**
         * Applies the particle's velocity and acceleration to move it and calculate its size, rotation, and position.
         * @param {Particle} particle - The particle to be moved
         */
        this.apply = (particle) => {
            if (!this.enabled)
                return;
            this.checkCollisionAndReflect(particle);
        };
        this.reflectVelocity = (particle, normal) => {
            const dotProduct = particle.velocity.x * normal.x + particle.velocity.y * normal.y;
            particle.velocity.x = particle.velocity.x - 2 * dotProduct * normal.x;
            particle.velocity.y = particle.velocity.y - 2 * dotProduct * normal.y;
            if (this.skipPositionBehaviourOnCollision) {
                particle.skipPositionBehaviour = true;
            }
            if (this.skipAngularVelocityBehaviourOnCollision) {
                particle.skipAngularVelocityBehaviour = true;
            }
            if (this.skipColorBehaviourOnCollision) {
                particle.skipColorBehaviour = true;
            }
            if (this.skipAttractionRepulsionBehaviourOnCollision) {
                particle.skipAttractionRepulsionBehaviour = true;
            }
            if (this.skipEmitDirectionBehaviourOnCollision) {
                particle.skipEmitDirectionBehaviour = true;
            }
            if (this.skipRotationBehaviourOnCollision) {
                particle.skipRotationBehaviour = true;
            }
            if (this.skipSizeBehaviourOnCollision) {
                particle.skipSizeBehaviour = true;
            }
        };
        this.checkCollisionAndReflect = (particle) => {
            if (this.lines.length === 0)
                return false; // No lines to check collision
            for (const line of this.lines) {
                const { point1, point2 } = line;
                // Check if the particle is near the line segment (using point-line distance)
                const dist = this.pointToLineDistance(particle.x, particle.y, point1.x, point1.y, point2.x, point2.y);
                if (dist <= this.distance) {
                    // Reflect velocity based on the line's normal
                    const normal = this.calculateNormal(point1, point2);
                    this.reflectVelocity(particle, normal);
                    return true; // Stop further checks after first collision
                }
            }
            return false;
        };
        this.calculateNormal = (point1, point2) => {
            const dx = point2.x - point1.x;
            const dy = point2.y - point1.y;
            const length = Math.sqrt(dx * dx + dy * dy);
            return { x: -dy / length, y: dx / length }; // Perpendicular vector (normalized)
        };
        this.pointToLineDistance = (x, y, x1, y1, x2, y2) => {
            const A = x - x1;
            const B = y - y1;
            const C = x2 - x1;
            const D = y2 - y1;
            const dot = A * C + B * D;
            const lenSq = C * C + D * D;
            const param = lenSq !== 0 ? dot / lenSq : -1;
            let xx;
            let yy;
            if (param < 0) {
                xx = x1;
                yy = y1;
            }
            else if (param > 1) {
                xx = x2;
                yy = y2;
            }
            else {
                xx = x1 + param * C;
                yy = y1 + param * D;
            }
            const dx = x - xx;
            const dy = y - yy;
            return Math.sqrt(dx * dx + dy * dy);
        };
    }
    /**
     * Gets the name of the behaviour
     * @return {BehaviourNames} The name of the behaviour
     */
    getName() {
        return BehaviourNames.COLLISION_BEHAVIOUR;
    }
    /**
     * @description Retrieves the properties of the object.
     * @returns {Object} The properties of the object.
     */
    getProps() {
        return {
            enabled: this.enabled,
            skipPositionBehaviourOnCollision: this.skipPositionBehaviourOnCollision,
            skipAngularVelocityBehaviourOnCollision: this.skipAngularVelocityBehaviourOnCollision,
            skipColorBehaviourOnCollision: this.skipColorBehaviourOnCollision,
            skipAttractionRepulsionBehaviourOnCollision: this.skipAttractionRepulsionBehaviourOnCollision,
            skipEmitDirectionBehaviourOnCollision: this.skipEmitDirectionBehaviourOnCollision,
            skipRotationBehaviourOnCollision: this.skipRotationBehaviourOnCollision,
            skipSizeBehaviourOnCollision: this.skipSizeBehaviourOnCollision,
            priority: this.priority,
            lines: this.lines,
            distance: this.distance,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=CollisionBehaviour.js.map