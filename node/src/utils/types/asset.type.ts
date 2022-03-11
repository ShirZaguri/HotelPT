import { Price } from "./price.type";

export type Asset = {
    price: Price;
    name: string;
    location: string;
    availability?: boolean;
}

