import { AwesomeProduct } from "@fundamentalconf/awesome-ui/models-product";

export interface Cart {
    total: number;
    products: AwesomeProduct[];
}