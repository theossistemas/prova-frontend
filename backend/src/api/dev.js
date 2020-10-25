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
        graduation: document.graduation,
        techStack: document.techStack,
    };
}

module.exports = {
    getAll: async (req, res) => {
        try {
            const devs = await DevModel.find({});
            res.send(devs.map(transformToDTO));
        } catch(err) {
            res.status(500).send(err);
        }
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
        try {
            const { id } = req.params;
            const data = req.body;
            
            console.log('put(', id, ')');

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

            const updated = await DevModel.findByIdAndUpdate(id, { $set: data }, { new: true });
            res.status(200).send(updated);
        } catch (error) {
            console.error(error);
        }
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