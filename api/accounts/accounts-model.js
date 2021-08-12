const db = require("../../data/db-config");

const getAll = () => {
  return db('accounts');
}

const getById = id =>  {
  return db('accounts').where('id', id).first();
}

const getByName = name => {
  return db('accounts').where('name', name).first();
}

const create = (name, budget) => {
  db('account').insert({ name: name, budget: budget })
}

const updateById = (id, account) => {
  // DO YOUR MAGIC
}

const deleteById = id => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  getByName,
  create,
  updateById,
  deleteById,
}
