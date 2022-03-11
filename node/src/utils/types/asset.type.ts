import { Price } from "./price.type";

export type Asset = {
    name: string;
    location: string;
    price?: Price | number;
    available?: boolean;
}

type OptionalPick<T, K extends PropertyKey> = Pick<T, Extract<keyof T, K>>
export type UpdatebleAssetProps = OptionalPick<Asset, "available" | "price">;

