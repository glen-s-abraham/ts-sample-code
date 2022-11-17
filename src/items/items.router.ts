/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as ItemService from "./items.service";
import { BaseItem, Item } from "./item.interface";
import { get, post, put, del } from "./items.controller";

/**
 * Router Definition
 */
export const itemsRouter = express.Router();

/**
 * Controller Definitions
 */

// GET items
itemsRouter.get('/', async (req: Request, res: Response) => {
    try {
        res.status(200).json(await get());
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// GET items/:id
itemsRouter.get('/:id', async (req: Request, res: Response) => {
    try {
        const id:number = parseInt(req.params.id,10);
        res.status(200).json(await get(id));
    } catch (e: any) {
        res.status(500).send(e.message);
    }
});

// POST items
itemsRouter.post('/',async (req:Request,res:Response)=>{
    try {
        res.status(200).json(await post(req.body));
    } catch (e: any) {
        res.status(500).send(e.message);
    }
})

// PUT items/:id
itemsRouter.put('/:id',async (req:Request,res:Response)=>{
    try {
        let id:number = parseInt(req.params.id,10);
        res.status(200).json(await put(id,req.body));
    } catch (e: any) {
        res.status(500).send(e.message);
    }
})

// DELETE items/:id
itemsRouter.delete('/:id',async (req:Request,res:Response)=>{
    try {
        let id:number = parseInt(req.params.id,10);
        res.status(200).json(await del(id));
    } catch (e: any) {
        res.status(500).send(e.message);
    }
})