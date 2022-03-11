import assets from "@/utils/models/asset.model"
import { UpdatebleAssetProps } from "@/utils/types/asset.type";
import { Price } from "@/utils/types/price.type";
import { Types } from 'mongoose';


export class assetService {
    static getAll = async () => {
        return await assets.find({});
    };

    static create = async (asset: any) => {
        if (asset.price) {
            asset.price = await assetService.priceConverter(asset.price)
        }
        return await assets.create(asset)
    };

    static update = async (id: string, updateDetails: UpdatebleAssetProps) => {
        if (updateDetails.price) {
            updateDetails.price = await assetService.priceConverter(updateDetails.price as number, id)
        }
        return await assets.findOneAndUpdate({
            _id: new Types.ObjectId(id)
        },
            updateDetails)
    };

    static priceConverter = async (newPrice: number, id?: string): Promise<Price> => {
        const assetToUpdate = id ? await assets.findOne({ _id: new Types.ObjectId(id) }) : undefined;
        return {
            current: newPrice,
            previous: (assetToUpdate?.price as Price)?.current || newPrice,
        }
    }
}