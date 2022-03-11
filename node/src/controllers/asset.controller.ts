import { Request, Response } from 'express';
import StatusCodes from 'http-status-codes';
import { assetService } from '@/services/asset.service';

const { BAD_REQUEST, CREATED, OK } = StatusCodes;

/**
 * Get all attractions
 *
 * @param req
 * @param res
 * @returns
 */
export async function getAssets(req: Request, res: Response) {
    const assets = await assetService.getAll();
    return res.status(OK).json({ assets });
}

export async function createAsset(req: Request, res: Response) {
    // const { tripId, attraction, details } = req.body;
    await assetService.create();

    return res.status(OK).send();
}