/**
 * @class Color
 * @classdesc The Color class is used for representing colors
 * @property {number} r - The red component of the color
 * @property {number} g - The green component of the color
 * @property {number} b - The blue component of the color
 * @property {number} alpha - The alpha component of the color
 * @property {number} hex - The hex representation of the color
 * @constructor
 * @param {number} [r=0] - The red component of the color
 * @param {number} [g=0] - The green component of the color
 * @param {number} [b=0] - The blue component of the color
 * @param {number} [alpha=1] - The alpha component of the color
 */
export default class Color {
    private _r;
    private _g;
    private _b;
    private _alpha;
    private _hex;
    private updateHex;
    constructor(r?: number, g?: number, b?: number, alpha?: number);
    /**
     * @function r
     * @memberof Color
     * @description Gets the red component of the Color object
     * @returns {number} The red component of the Color object
     */
    get r(): number;
    /**
     * @function r
     * @memberof Color
     * @description Sets the red component of the Color object
     * @param {number} value - The red component value to set
     */
    set r(value: number);
    /**
     * @function g
     * @memberof Color
     * @description Gets the green component of the Color object
     * @returns {number} The green component of the Color object
     */
    get g(): number;
    /**
     * @function g
     * @memberof Color
     * @description Sets the green component of the Color object
     * @param {number} value - The green component value to set
     */
    set g(value: number);
    /**
     * @function b
     * @memberof Color
     * @description Gets the blue component of the Color object
     * @returns {number} The blue component of the Color object
     */
    get b(): number;
    /**
     * @function b
     * @memberof Color
     * @description Sets the blue component of the Color object
     * @param {number} value - The blue component value to set
     */
    set b(value: number);
    /**
     * @function alpha
     * @memberof Color
     * @description Gets the alpha value of the Color object
     * @returns {number} The alpha value of the Color object
     */
    get alpha(): number;
    /**
     * @function hex
     * @memberof Color
     * @description Gets the Color object's hex value
     * @returns {number} The hex value of the Color object
     */
    set alpha(value: number);
    /**
     * @function hex
     * @memberof Color
     * @description Gets the Color object's hex value
     * @returns {number} The hex value of the Color object
     */
    get hex(): number;
    /**
     * @function hex
     * @memberof Color
     * @description Sets the Color object's value from a hex value
     * @param {number} value - The hex value to set the Color object from
     */
    set hex(value: number);
    /**
     * @function copyFrom
     * @memberof Color
     * @description Copies the values of an IColor object to the Color object
     * @param {IColor} color - The IColor object to copy from
     */
    copyFrom: (color: IColor) => void;
    /**
     * @function copyFromRawData
     * @memberof Color
     * @description Copies the values of a raw data object to the Color object
     * @param {object} data - The raw data object to copy from
     */
    copyFromRawData: (data: {
        _r: number;
        _g: number;
        _b: number;
        _alpha: number;
    }) => void;
    /**
     * @function add
     * @memberof Color
     * @description Adds the values of a color object to the Color object
     * @param {IColor} color - The IColor object to add
     */
    add: (color: IColor) => void;
    /**
     * @function set
     * @memberof Color
     * @description Sets the values of the color object
     * @param {number} r - The red component of the color
     * @param {number} g - The green component of the color
     * @param {number} b - The blue component of the color
     * @param {number} alpha - The alpha component of the color
     */
    set: (r: number, g: number, b: number, alpha: number) => void;
}
export interface IColor {
    r: number;
    g: number;
    b: number;
    alpha: number;
}
