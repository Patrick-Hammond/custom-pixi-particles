export default class Model {
    /**
     * Boolean value indicating whether warping is enabled
     */
    warp = false;
    /**
     * The Z position of the camera
     */
    cameraZ = 0;
    /**
     * The conversion rate for cameraZ
     */
    cameraZConverter = 0;
    /**
     * The speed of warp
     */
    warpSpeed = 0;
    /**
     * The base speed of warp
     */
    warpBaseSpeed = 0;
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