import assets, { AssetDocument } from "@/utils/models/asset.model"

export class assetService {
    static getAll = async () => {
        return await assets.find({});
    };

    static create = async () => {
        const asset = {
            name: "Bubi",
            location: "Tohav Oti",
            price: { current: 120, previous: 100 }
        };
        assets.create(asset)
    };
}