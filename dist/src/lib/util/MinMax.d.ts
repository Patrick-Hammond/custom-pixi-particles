export default class MinMax {
    min: number;
    max: number;
    constructor(min?: number, max?: number);
    /**
     * Sets the x and y coordinates of a Point
     * @param {number} min - The x coordinate
     * @param {number} max - The y coordinate
     * @return {MinMax} - The MinMax instance
     */
    set: (min: number, max: number) => this;
    /**
     * Copies the x and y coordinates from another Point
     * @param {IMinMax} data - The Point instance to copy from
     * @return {MinMax} - The MinMax instance
     */
    copyFrom: (data: IMinMax) => this;
    /**
     * Copies the x and y coordinates from an object with numeric x and y properties
     * @param {IMinMax} data - The object to copy from
     * @return {MinMax} - The MinMax instance
     */
    copyFromRawData: (data: IMinMax) => void;
    /**
     * Adds the x and y coordinates of another Point to this Point
     * @param {IMinMax} data - The other Point instance
     * @return {MinMax} - The MinMax instance
     */
    add: (data: IMinMax) => this;
}
export interface IMinMax {
    min: number;
    max: number;
}
