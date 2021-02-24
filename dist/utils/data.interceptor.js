"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const operators_1 = require("rxjs/operators");
let DataInterceptor = class DataInterceptor {
    intercept(context, next) {
        const startTime = Date.now();
        return next.handle().pipe(operators_1.map(data => {
            if (data == null) {
                return new common_1.NotFoundException();
            }
            const endTime = Date.now();
            const elapsed = endTime - startTime;
            return {
                elapsed,
                data: class_transformer_1.classToPlain(data)
            };
        }));
    }
};
DataInterceptor = __decorate([
    common_1.Injectable()
], DataInterceptor);
exports.DataInterceptor = DataInterceptor;
//# sourceMappingURL=data.interceptor.js.map