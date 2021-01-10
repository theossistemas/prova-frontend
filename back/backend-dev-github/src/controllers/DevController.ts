import { Request, Response } from 'express'

import { Dev } from '../models/Dev'

export default {

    async store(req: Request, res: Response) {

        try {

            const body = req.body
            const { login } = body
            const userExists = await Dev.findOne({ login })

            if (userExists)
                return res.status(400).json({
                    title: 'Oops!', message: `Dev ${login} já cadastrado(a).`
                })

            const dev = await Dev.create({ ...body })
            return res.status(200).json(dev)

        } catch (e) {
            return res.status(500).json(
                {
                    title: 'Ocorreu um erro ao tentar cadastar.',
                    message: e.message
                }
            )
        }

    },

    async update(req: Request, res: Response) {

        try {

            const { _id } = req.params
            const body = req.body
            delete body.login
            const userTarget = await Dev.findById({ _id })

            if (!userTarget)
                return res.status(400).json(
                    {
                        title: 'Opa!',
                        message: `Nenhum Dev com esse id: ${_id} cadastrado.`
                    }
                )
            const devTarget = await Dev.findOneAndUpdate({ _id }, { ...body }, { new: true })
            return res.status(200).json(devTarget)

        } catch (e) {
            return res.status(500).json(
                {
                    title: 'Ocorreu um erro ao tentar atualizar.',
                    message: e.message
                }
            )
        }

    },

    async index(req: Request, res: Response) {

        try {

            const devs = await Dev.find()
            return res.json(
                [...devs]
            )

        } catch (e) {
            return res.status(500).send({
                title: 'Ocorreu um erro ao tentar buscar os devs na base de dados.',
                message: e.message
            })
        }

    },

    async show(req: Request, res: Response) {

        try {
            const { _id } = req.params
            const userTarget = await Dev.findById({ _id })
            if (!userTarget)
                return res.status(404).json({
                    title: 'Opa!',
                    message: `Nenhum Dev com esse id: ${_id} cadastrado.`
                })

            return res.send(userTarget)

        } catch (e) {

            return res.status(500).send({
                title: 'Ocorreu um erro ao tentar fazer a pesquisa.',
                message: e.message
            })

        }
    },

    async remove(req: Request, res: Response) {

        try {
            const { _id } = req.params
            const userTarget = await Dev.findById({ _id })
            if (!userTarget)
                return res.status(404).json({
                    title: 'Opa!',
                    message: `Nenhum Dev com esse id: ${_id} cadastrado.`
                })

            await Dev.remove({ _id })
            return res.send(userTarget)

        } catch (e) {

            return res.status(500).send({
                title: 'Ocorreu um erro ao tentar excluir.',
                message: e.message
            })

        }
    }

}