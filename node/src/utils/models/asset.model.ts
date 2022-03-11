import { Document, model, Schema } from 'mongoose';
import { Price } from '../types/price.type';

export interface AssetDocument extends Document {
    price: Price;
    name: string;
    location: string;
    availability?: boolean;
}

const AssetSchema: Schema = new Schema({
    price: {type: Object, required: true},
    name: { type: String, required: true },
    location: { type: String, required: true },
    availability: { type: Boolean, required: false },
},
    { collection: 'assets' }
);

export default model<AssetDocument>('assets', AssetSchema);