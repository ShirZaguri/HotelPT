import assets from "@/utils/models/asset.model"
import { Asset } from "@/utils/types/asset.type";

// type changableAsset = Pick<Asset, "id" | "availability" | "price">;

export class assetService {
    static getAll = async () => {
        return await assets.find({});
    };

    static create = async (asset: any) => {
        return await assets.create(asset)
    };

    // static update = async (asset: changableAsset) => {
    //     return await assets.create(details.)
    // };
}