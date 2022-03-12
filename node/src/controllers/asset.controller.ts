import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { assetService } from '@/services/asset.service';

const { OK } = StatusCodes;

export async function getAssets(req: Request, res: Response) {
    const { id } = req.params;
    const assets = await assetService.get(id);
    return res.status(OK).json({ assets });
}

export async function createAsset(req: Request, res: Response) {
    const { asset } = req.body;
    const newAsset = await assetService.create(asset);
    return res.status(OK).send(newAsset);
}

export async function updateAsset(req: Request, res: Response) {
    const { id } = req.params;
    const { updateDetails } = req.body;
    await assetService.update(id, updateDetails);
    return res.status(OK).send();
}