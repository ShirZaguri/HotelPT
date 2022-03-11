import { Asset } from "../types/asset.type";
import { AssetXLSX } from "../types/assetXLSX.type";

export const assetConverter = (assets: Asset[]): AssetXLSX[] => {
    return assets.map((asset) => ({
        name: asset.name,
        location: asset.location,
        availability: asset.availability,
        currentPrice: asset.price.current,
        previousPrice: asset.price.previous,
    }))
}