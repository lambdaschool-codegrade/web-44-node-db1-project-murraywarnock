const Accounts = require('../accounts/accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  // DO YOUR MAGIC
  console.log('checkAccountPayload middleware')
  next()
}

exports.checkAccountNameUnique = (req, res, next) => {
//   const { name } = req.params.body
//   Accounts.getByName(name)
//       .then(account => {
//       if (account.length > 0 ) {
//         next({  status: "404", message: "that name is taken" })
//       } else {
//           next()
//       }
//   })
//       .catch(next)
  console.log('checkAccountNameUnique middleware')  
  next()
}


exports.checkAccountId = (req, res, next) => {
  // const { id } = req.params
  // Accounts.getById(id)
  //   .then(account => {
  //     if (account.length > 0 ) {
  //         req.account = account[0];
  //         next()
  //     } else {
  //         next({  status: "404", message: `account not found.` })
  //     }
  //   })
  //   .catch(next)
  console.log('checkAccountId middleware')
  next()
}
