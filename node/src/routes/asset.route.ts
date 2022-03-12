import { createAsset, getAssets, updateAsset } from '@/controllers/asset.controller';
import { Router } from 'express';

const assetRouter = Router();
assetRouter.get('/', getAssets);
assetRouter.get('/:id', getAssets);
assetRouter.post('/', createAsset);
assetRouter.patch('/:id', updateAsset);

export default assetRouter;