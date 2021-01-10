import { Router, Request, Response } from 'express'

import DevController from './controllers/DevController'
import SearchController from './controllers/SearchController'

export const router = Router()

router.get('/', (req: Request, res: Response) => {
    return res.send({ message: 'Theos back' })
})

router.get('/devs/:query', SearchController)

router.get('/dev/:_id', DevController.show)

router.get('/devs', DevController.index)

router.post('/devs', DevController.store)

router.delete('/devs/:_id', DevController.remove)

router.put('/devs/:_id', DevController.update)
