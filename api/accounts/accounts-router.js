const express = require('express');
const Accounts = require('./accounts-model');
const router = require('express').Router();

const { 
  checkAccountPayload, 
  checkAccountNameUnique, 
  checkAccountId 
} = require('./accounts-middleware');


router.get('/', async (req, res, next) => {
  try {
    const accounts = await Accounts.getAll()
        res.status(200).json(accounts)
    } catch (error) {
        next(error)
    }
});

router.get('/:id', checkAccountId, async (req, res, next) => {
  try {
      return res.status(200).json(req.account);
  } catch (error) {
      next(error) 
  }
})

router.post(
  '/', 
  checkAccountPayload, 
  checkAccountNameUnique, 
  async (req, res, next) => {
  try {
    const newAccount = await Accounts.create({ 
      name:req.body.name.trim(),
      budget: req.body.budget
    });
    res.status(201).json(newAccount)
  } catch (error) {
    next(error)
  }
});

router.put(
  '/:id', 
  checkAccountId,
  checkAccountPayload,
  async (req, res, next) => {
    const updated = await Accounts.updateById(req.params.id, req.body);
    res.json(updated);
    try {
      res.json('update accout');
    } catch (error) {
      next(error);
    }
  });

router.delete('/:id', checkAccountId, async (req, res, next) => {
  // DO YOUR MAGIC
  try {
    await Accounts.deleteById(req.params.id);
    res.json(req.account);
  } catch (error) {
    next(error) 
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500 ).json({message: err.message});
})

module.exports = router;
