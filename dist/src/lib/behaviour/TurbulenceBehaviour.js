import Behaviour from './Behaviour';
import BehaviourNames from './BehaviourNames';
import { Point } from '../util';
export default class TurbulenceBehaviour extends Behaviour {
    constructor() {
        super(...arguments);
        this.priority = 1000;
        this.position = new Point();
        this.positionVariance = new Point();
        this.velocity = new Point();
        this.velocityVariance = new Point();
        this.acceleration = new Point();
        this.accelerationVariance = new Point();
        this.sizeStart = new Point(1, 1);
        this.sizeEnd = new Point(1, 1);
        this.startVariance = 0;
        this.endVariance = 0;
        this.emitPerSecond = 0;
        this.duration = 0;
        this.maxLifeTime = 0;
        this.enabled = false;
        this.showVortices = false;
        this.effect = 0;
        this.turbulence = false;
        this.vortexOrgSize = 128;
        this.init = (particle, model, turbulencePool) => {
            if (!this.enabled)
                return;
            particle.showVortices = this.showVortices;
            particle.turbulence = this.turbulence;
            this.turbulencePool = turbulencePool;
        };
        this.apply = (particle) => {
            if (!this.enabled)
                return;
            if (particle.turbulence)
                return;
            this.turbulencePool.list.forEach((vortex) => {
                let vx = 0;
                let vy = 0;
                let factor = 0;
                const dx = particle.x - vortex.x;
                const dy = particle.y - vortex.y;
                if (dx > this.vortexOrgSize * vortex.size.x)
                    return;
                if (dy > this.vortexOrgSize * vortex.size.x)
                    return;
                if (this.effect === 0 || this.effect === 1) {
                    if (!this.effect) {
                        vx = -dy + vortex.velocity.x;
                        vy = dx + vortex.velocity.y;
                    }
                    else {
                        vx = dy + vortex.velocity.x;
                        vy = -dx + vortex.velocity.y;
                    }
                    factor = 1 / (1 + (dx * dx + dy * dy) / (this.vortexOrgSize * vortex.size.x));
                }
                else if (this.effect === 2) {
                    vx = dx + vortex.velocity.x;
                    vy = dy + vortex.velocity.y;
                    factor = 1 / (1 + (dx * dx + dy * dy) / (this.vortexOrgSize * vortex.size.x));
                }
                else if (this.effect === 3) {
                    vx = dx - vortex.velocity.x;
                    vy = dy - vortex.velocity.y;
                    factor = 1 / (1 + (dx * dx + dy * dy) / (this.vortexOrgSize * vortex.size.x));
                }
                else if (this.effect === 4) {
                    vx = -dx + vortex.velocity.x;
                    vy = -dy + vortex.velocity.y;
                    factor = 1 / (1 + (dx * dx + dy * dy) / (this.vortexOrgSize * vortex.size.x));
                }
                else if (this.effect === 5) {
                    vx = -dx - vortex.velocity.x;
                    vy = -dy - vortex.velocity.y;
                    factor = 1 / (1 + (dx * dx + dy * dy) / (this.vortexOrgSize * vortex.size.x));
                }
                particle.velocity.x += (vx - particle.velocity.x) * factor;
                particle.velocity.y += (vy - particle.velocity.y) * factor;
            });
        };
    }
    getName() {
        return BehaviourNames.TURBULENCE_BEHAVIOUR;
    }
    getProps() {
        return {
            enabled: this.enabled,
            priority: this.priority,
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            positionVariance: {
                x: this.positionVariance.x,
                y: this.positionVariance.y,
            },
            velocity: {
                x: this.velocity.x,
                y: this.velocity.y,
            },
            velocityVariance: {
                x: this.velocityVariance.x,
                y: this.velocityVariance.y,
            },
            acceleration: {
                x: this.acceleration.x,
                y: this.acceleration.y,
            },
            accelerationVariance: {
                x: this.accelerationVariance.x,
                y: this.accelerationVariance.y,
            },
            sizeStart: {
                x: this.sizeStart.x,
                y: this.sizeStart.y,
            },
            sizeEnd: {
                x: this.sizeEnd.x,
                y: this.sizeEnd.y,
            },
            startVariance: this.startVariance,
            endVariance: this.endVariance,
            emitPerSecond: this.emitPerSecond,
            duration: this.duration,
            maxLifeTime: this.maxLifeTime,
            effect: this.effect,
            name: this.getName(),
        };
    }
}
//# sourceMappingURL=TurbulenceBehaviour.js.map