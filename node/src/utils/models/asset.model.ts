import { Document, model, Schema } from 'mongoose';
import { Asset } from '../types/asset.type';

export interface AssetDocument extends Document, Asset{}

const AssetSchema: Schema = new Schema({
    name: { type: String, required: true },
    location: { type: String, required: true },
    price: {type: Object, required: false},
    available: { type: Boolean, required: false },
},
    { collection: 'assets' }
);

export default model<AssetDocument>('assets', AssetSchema);