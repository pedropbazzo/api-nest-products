export declare class Product implements IProduct {
    prodid: string;
    productName: string;
    productDesc: string;
    prodAddedDate: string;
    constructor(prodid: string, productName: string, productDesc: string, prodAddedDate: string);
}
export interface IProduct {
    prodid?: string | null;
    productName?: string;
    productDesc?: string;
    prodAddedDate?: string;
}
