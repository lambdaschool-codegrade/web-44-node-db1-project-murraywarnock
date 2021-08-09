const db = require("../../data/db-config");

const getAll = () => {
  return db('accounts');
}

const getById = id => {
  const account =  db('accounts').where('id', id);
  // if (account.length > 0) {
    return account;
  // }
}

const create = account => {
  // DO YOUR MAGIC
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
  create,
  updateById,
  deleteById,
}
