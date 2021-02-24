import { ProductsService } from './products.service';
export declare class ProductsController {
    private readonly productsService;
    constructor(productsService: ProductsService);
    addProduct(productName: string, productDesc: string, productAddedDate: string): string;
    getAllProducts(): import("rxjs").Observable<import("../models/product").IProduct[]>;
    getProduct(prodId: string): import("rxjs").Observable<import("../models/product").IProduct>;
    updateProduct(productId: string, productName: string, productDesc: string, productAddedDate: string): import("rxjs").Observable<import("../models/product").IProduct>;
    removeProduct(prodId: string): import("rxjs").Observable<import("../models/product").IProduct[]>;
}
