/**
 * Class that provides helper methods for checking compatibility.
 */
class CompatibilityHelper {
}
/**
 * Reads the duration from the given configuration.
 *
 * @param {Object} config - The configuration object.
 * @return {Number} The duration from the given configuration, or -1 if not found.
 */
CompatibilityHelper.readDuration = (config) => {
    if (config.duration) {
        return config.duration;
    }
    return -1;
};
export default CompatibilityHelper;
//# sourceMappingURL=CompatibilityHelper.js.map