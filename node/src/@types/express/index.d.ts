import { Asset } from '@/utils/types/asset.type';
import price from '@/utils/types/price.type';
// TODO: delete user not exist
declare module 'express' {
    export interface Request {
        body: {
            asset: Asset;
            updateDetails: UpdatebleAssetProps;
        };
    }
}