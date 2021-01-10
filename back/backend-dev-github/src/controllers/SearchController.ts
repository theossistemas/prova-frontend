import { Request, Response } from 'express';
import { Dev } from '../models/Dev'

export default async (req: Request, res: Response) => {

    try {

        const { query } = req.params
        const devs = await Dev.find({
            techs: new RegExp(query, 'i')
        })

        return res.json([...devs])

    } catch (e) {
        return res.status(500).json(
            {
                title: 'Ocorreu um erro ao tentar fazer a busca.',
                message: e.message
            }
        )
    }

}