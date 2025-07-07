/**
 * @class Random
 *
 * @description This class provides methods to generate random numbers.
 */
class Random {
}
/**
 * @static
 * @method get
 * @returns {number} A random number between 0 and 1
 *
 * @description Generates a random number between 0 and 1.
 */
Random.get = () => {
    return Random.uniform(0, 1);
};
/**
 * Returns a random number between a specified range
 *
 * @param {number} min - The lowest number in the range
 * @param {number} max - The highest number in the range
 *
 * @returns {number} A random number between min and max
 */
Random.uniform = (min, max) => {
    return Math.random() * (max - min) + min;
};
export default Random;
//# sourceMappingURL=Random.js.map