const { isValidObjectId } = require('mongoose');
const DevModel = require('../entity/dev');

module.exports = {
    getAll: async (req, res) => {
        res.send(await DevModel.find({}));
    },
    getOne: async (req, res) => {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            res.status(400).send({ message: 'ID Param is invalid' });
            return;
        }

        res.send(await DevModel.findById(id));
    },
    post: async (req, res) => {
        const data = new DevModel(req.body);
        const errors = data.validateSync();

        if (errors) {
            res.status(400).send(errors);
            return;
        }

        res.status(201).send(await data.save());
    },
    put: async (req, res) => {
        const { id } = req.params;
        const data = req.body;

        if (!isValidObjectId(id)) {
            res.status(400).send({ message: 'ID Param is invalid' });
            return;
        }
        
        const model = new DevModel(data);
        const errors = model.validateSync();
        if (errors) {
            res.status(400).send(errors);
            return;
        }

        res.status(200).send(await DevModel.findByIdAndUpdate(id, { $set: data }, { new: true }));
    },
    delete: async (req, res) => {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            res.status(400).send({ message: 'ID Param is invalid' });
            return;
        }

        const result = await DevModel.findByIdAndRemove(id)
        if (!result) {
            res.status(404).send({ message: 'Dev not found by id [' + id + ']' });
            return;
        }
        
        res.sendStatus(204);
    }
};