const express = require('express');
const devApi = require('../api/dev');


module.exports = () => {
    const router = express.Router();
    
    router.get('/devs', devApi.getAll);
    router.get('/devs/:id', devApi.getOne)
    router.post('/devs', devApi.post);
    router.put('/devs/:id', devApi.put);
    router.delete('/devs/:id', devApi.delete);

    return router;
};