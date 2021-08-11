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
  const { id } = req.params
  try {
      const account = await Accounts.getById(id);
      return res.status(200).json(account);
  } catch (error) {
      next(error) 
  }
})

router.post(
  '/', 
  checkAccountPayload, 
  checkAccountNameUnique, 
  async (req, res, next) => {
  // console.log(`hitting ${req.method} ${req.baseUrl}`);
  // try {
  //   const newAccountId = await Accounts.create(req.body);
  //   const newAccount = await Accounts.getById(newAccountId);
  //   res.status(200).json(newAccount[0]);
  // } catch (error) {
  //   next(error);
  // }
  try {
    res.json('create account')
  } catch (error) {
    next(error)
  }
});

router.put(
  '/:id', 
  checkAccountId,
  checkAccountPayload, 
  checkAccountNameUnique,
  (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('update account')
  } catch (error) {
    next(error) 
  }
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // DO YOUR MAGIC
  try {
    res.json('delete account')
  } catch (error) {
    next(error) 
  }
})

router.use((err, req, res, next) => { // eslint-disable-line
  res.status(err.status || 500 ).json({message: err.message});
})

module.exports = router;
