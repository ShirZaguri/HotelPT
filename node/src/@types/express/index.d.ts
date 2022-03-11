import price from '@/utils/types/price.type';
// TODO: delete user not exist
declare module 'express' {
    export interface Request {
        body: {
            asset: any;
        };
    }
}