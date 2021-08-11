const db = require("../../data/db-config");

const getAll = () => {
  return db('accounts');
}

const getById = async id =>  {
  const account =  await db('accounts').where('id', id);
//   if (account.length > 0) {
//     return account[0];
//   } else {
//     return account;
//   }
  return account;
}

const getByName = async name => {
  const account =  await db('accounts').where('name', 'like', `'%${name}%'`);
  if (account.length > 0) {
    return account[0];
  }
  return account;
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
