var developerService = require('../service/developer');
const developer = require('../model/developer');

exports.create = function (req, res, next) {
  var body = new Developer(req.body);
  if (!body.name) {
    res.status(400).send('Name is missing');
    return;
  }
  developerService.createDeveloper(body, function (error, response) {
    if (response) {
      res.status(201).send(response);
    } else if (error) {
      res.status(400).send(error);
    }
  });
}

exports.findByName = function (req, res) {
  var params = req.params || {};
  var query = {
    name: params.name
  };

  if (!query) {
    res.status(400).send('Bad Request');
    return;
  }

  developerService.findDeveloper(query, function (error, response) {
    if (error) {
      res.status(404).send(error);
      return;
    }
    if (response) {
      res.status(200).send(response);
      return;
    }
    if (!response) {
      res.status(204).send('No Data Found');
    }
  });
}

exports.findById = function (req, res) {
  var params = req.params || {};
  var id = params._id;
  console.log('================================');
  console.log('id');
  console.log(id);
  console.log('================================');

  if (!id) {
    res.status(400).send('Id is missing');
    return;
  }
  developerService.findDeveloperById(id, (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.satatus(400).send(err);
    }
  });
}



exports.list = function (req, res) {
  developerService.listDevelopers(function (error, response) {
    if (error) {
      res.status(404).send(error);
      return;
    }
    if (response) {
      res.status(200).send(response);
      return;
    }
    if (!response) {
      res.status(204).send('No Data Found');
    }
  });
}

exports.updateById = function (req, res) {
  var body = req.body;

  if (!body.id) {
    res.status(400).send('Id is missing');
    return;
  }
  var updateData = body.data || {}
  developerService.updateDeveloperById(body.id, updateData, (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  });
}

exports.update = function (req, res) {
  var body = req.body;
  var query = body.query;
  var data = body.data;
  var options = body.options
  if (!query) {
    res.status(400).send('Bad request');
    return;
  }

  developerService.updateDeveloper(query, data, options, (err, response) => {
    if (response) {
      res.status(200).send(response);
    } else if (err) {
      res.status(400).send(err);
    }
  });
}

exports.delete = function (req, res) {
  //var body = req.body || {};
  var query = req.body;

  console.log("body=======================");
  //console.log(body);
  console.log("query=====================");
  console.log(query);


  if (!query) {
    res.status(400).send('Bad Request');
    return;
  }
  developerService.deleteDeveloper(query, function (error, response) {
    if (error) {
      res.status(400).send(error);
      return;
    }
    if (response) {
      if (response.n === 1 && response.ok === 1) {
        res.status(202).send(query);
      }
      if (response.n === 0 && response.ok === 1) {
        res.status(204).send({
          message: 'No data found'
        });
      }
    }
  });
}

class Developer {
  constructor(developerData) {
    this.avatar = developerData.avatar || '';
    this.name = developerData.name || '';
    this.email = developerData.email || '';
    this.city = developerData.city || '';
    this.formacao = developerData.formacao || '';
    this.technologies = developerData.technologies || '';
  }
}
