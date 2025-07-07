export default class ThereBack {
    x: string;
    y: string;
    ease: string;
    constructor(x?: string, y?: string, ease?: string);
    set: (x: string, y: string, ease: string) => this;
    copyFrom: (data: IThereBack) => this;
    copyFromRawData: (data: IThereBack) => void;
}
export interface IThereBack {
    x: string;
    y: string;
    ease: string;
}
