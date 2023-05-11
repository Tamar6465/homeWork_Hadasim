const express = require('express');
const router = express.Router();
const vaccines = require('../services/vaccines');


router.get('/getIdVaccinated/:id/:num', async function(req, res, next) {
    try {
        let num=req.params.num;
        let id=req.params.id;
      res.json(await vaccines.getVaccineNumOfId({Id:id,num:num}));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.get('/getIdVaccinatedAll/:id', async function(req, res, next) {
    try {
        let id=req.params.id;
        console.log(id);
      res.json(await vaccines.getIdAll({Id:id}));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

  router.post('/insertVaccine', async function(req, res, next) {
    try {
        let num=req.params.num;
      res.json(await vaccines.insertVaccine(req.body));
    } catch (err) {
      console.error(`Error while getting programming languages `, err.message);
      next(err);
    }
  });

 
module.exports = router;