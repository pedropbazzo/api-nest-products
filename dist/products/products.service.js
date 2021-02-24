"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductsService = void 0;
const common_1 = require("@nestjs/common");
const product_1 = require("../models/product");
const rxjs_1 = require("rxjs");
let ProductsService = class ProductsService {
    constructor() {
        this.products = [];
    }
    addProduct(productName, productDesc, productAddedDate) {
        const prodId = Math.random().toString();
        let product = new product_1.Product(prodId, productName, productDesc, productAddedDate);
        this.products.push(product);
        return prodId;
    }
    getProducts() {
        return rxjs_1.of([...this.products]);
    }
    getProductById(productId) {
        console.log(productId);
        let index = this.products.findIndex(p => p.prodid === productId);
        let searchProduct = index == 0 || index > 0 ? this.products[index] : {};
        return rxjs_1.of(searchProduct);
    }
    updateProduct(productId, productName, productDesc, prodAddedDate) {
        const index = this.products.findIndex(p => p.prodid === productId);
        var product;
        if (index == 0 || index > 0) {
            product = { productName: productName, productDesc: productDesc, prodAddedDate: prodAddedDate };
            this.products[index] = product;
        }
        return rxjs_1.of(product);
    }
    deleteProduct(productId) {
        const index = this.products.findIndex(p => p.prodid === productId);
        return rxjs_1.of(this.products.splice(index, 1));
    }
};
ProductsService = __decorate([
    common_1.Injectable()
], ProductsService);
exports.ProductsService = ProductsService;
//# sourceMappingURL=products.service.js.map