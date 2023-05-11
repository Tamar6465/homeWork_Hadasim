
const express = require('express');
const router = express.Router();
const sick = require('../services/sick');
router.get('/getIdSick/:id', async function(req, res, next) {
    try {
        let id=req.params.id;
      res.json(await sick.getIdSick({Id:id}));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });
  router.get('/getIdRecoveryDate/:id', async function(req, res, next) {
    try {
        let id=req.params.id;
      res.json(await sick.getIdRecovery({Id:id}));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.post('/insertEmployeeSick', async function(req, res, next) {
    try {
      res.json(await sick.insertEmployeeSick(req.body));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.post('/insertEmployeeRecovery', async function(req, res, next) {
    try {
      res.json(await sick.insertEmployeeRecovery(req.body));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });
  module.exports=router;