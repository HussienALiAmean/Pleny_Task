import { IProduct } from "./IProduct";

export interface IProductPag {
    products: IProduct[];
    total:    number;
    skip:     number;
    limit:    number;
}
