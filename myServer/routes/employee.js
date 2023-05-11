const express = require('express');
const router = express.Router();
const employee = require('../services/employee');

router.get('/getAll', async function(req, res, next) {
    try {
      res.json(await employee.getAll());
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });
 
  router.get('/get/:Id', async function(req, res, next) {
    try {
      res.json(await employee.get({Id:req.params.Id}));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.post('/newEmployee', async function (req, res, next) {
    try {
      res.json(await employee.insertNew(req.body));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  module.exports = router;