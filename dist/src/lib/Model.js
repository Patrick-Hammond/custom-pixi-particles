export default class Model {
    constructor() {
        /**
         * Boolean value indicating whether warping is enabled
         */
        this.warp = false;
        /**
         * The Z position of the camera
         */
        this.cameraZ = 0;
        /**
         * The conversion rate for cameraZ
         */
        this.cameraZConverter = 0;
        /**
         * The speed of warp
         */
        this.warpSpeed = 0;
        /**
         * The base speed of warp
         */
        this.warpBaseSpeed = 0;
    }
    /**
     * Update the model with the behaviour object
     * @param {Object} behaviour - The behaviour object
     */
    update(behaviour) {
        this.warp = behaviour.warp || false;
        this.cameraZConverter = behaviour.cameraZConverter;
        this.warpSpeed = behaviour.warpSpeed;
        this.warpBaseSpeed = behaviour.warpBaseSpeed;
    }
    /**
     * Update the camera position based on the delta time
     * @param {number} deltaTime - The delta time
     */
    updateCamera(deltaTime) {
        if (!this.warp)
            return;
        this.cameraZ += deltaTime * this.cameraZConverter * this.warpSpeed * this.warpBaseSpeed;
    }
}
//# sourceMappingURL=Model.js.map