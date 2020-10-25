const { isValidObjectId } = require('mongoose');
const DevModel = require('../entity/dev');

function transformToDTO(document) {
    return {
        id: document._id,
        github: document.github,
        avatarURL: document.avatarURL,
        name: document.name,
        email: document.email,
        city: document.city,
        gratuation: document.gratuation,
        techStack: document.techStack,
    };
}

module.exports = {
    getAll: async (req, res) => {
        const devs = await DevModel.find({}).map(transformToDTO);
        res.send(devs);
    },
    getOne: async (req, res) => {
        const { id } = req.params;

        if (!isValidObjectId(id)) {
            res.status(400).send({ message: 'ID Param is invalid' });
            return;
        }

        const dev = await DevModel.findById(id);

        res.send(transformToDTO(dev));
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