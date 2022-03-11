import { Router } from "express";
import assetRouter from "./asset.route";

const baseRouter = Router();
baseRouter.use('/assets', assetRouter);

export default baseRouter;
