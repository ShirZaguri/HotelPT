import { createAsset, getAssets } from '@/controllers/asset.controller';
import { Router } from 'express';

const assetRouter = Router();
assetRouter.get('/', getAssets);
assetRouter.post('/', createAsset);

export default assetRouter;