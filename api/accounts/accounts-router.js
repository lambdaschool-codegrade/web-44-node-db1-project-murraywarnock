const express = require('express');
const Accounts = require('./accounts-model');
const router = require('express').Router()

router.get('/', async (req, res, next) => {
  try {
    const result = await Accounts.getAll()
        res.status(200).json(result)
    } catch (error) {
        next(error)
    };
})

router.get('/:id', async (req, res, next) => {
  console.log(`hitting ${req.method} ${req.baseUrl}`);
  try {
      const result = await Accounts.getById(req.params.id)
      res.status(200).json(result)
  } catch (error) {
      next(error)
  }
})

router.post('/', (req, res, next) => {
  // DO YOUR MAGIC
})

router.put('/:id', (req, res, next) => {
  // DO YOUR MAGIC
});

router.delete('/:id', (req, res, next) => {
  // DO YOUR MAGIC
})

router.use((err, req, res, next) => { // eslint-disable-line
  // DO YOUR MAGIC
})

module.exports = router;
