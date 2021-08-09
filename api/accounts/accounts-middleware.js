const Accounts = require('../accounts/accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountNameUnique = (req, res, next) => {
  // DO YOUR MAGIC
}

exports.checkAccountId = (req, res, next) => {
  const { id } = req.params
  Accounts.getById(id)
      .then(account => {
      if (account) {
          req.account = account
          next()
      } else {
          next({  status: "404", message: `account not found.` })
      }
  })
      .catch(next)}
