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

router.get('/:id', (req, res, next) => {
  // DO YOUR MAGIC
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
