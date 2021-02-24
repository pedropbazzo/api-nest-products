import { IProduct } from '../models/product';
export declare class ProductsService {
    private products;
    addProduct(productName: string, productDesc: string, productAddedDate: string): string;
    getProducts(): import("rxjs").Observable<IProduct[]>;
    getProductById(productId: string): import("rxjs").Observable<IProduct>;
    updateProduct(productId: string, productName: string, productDesc: string, prodAddedDate: string): import("rxjs").Observable<IProduct>;
    deleteProduct(productId: string): import("rxjs").Observable<IProduct[]>;
}
