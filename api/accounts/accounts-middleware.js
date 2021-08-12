const Accounts = require('../accounts/accounts-model');

exports.checkAccountPayload = (req, res, next) => {
  const error = { status: 400 }
  const { name, budget } = req.body;
  if (name === undefined || budget === undefined) {
    error.message = "name and budget are required"
  } else if (typeof name !== 'string') {
    error.message = 'name of account must be a string'
  } else if (name.trim().length < 3 || name.trim().length > 100) {
    error.message = 'name of account must be between 3 and 100'
    next(error)
  } else if (typeof budget !== 'number' || isNaN(budget)) {
    error.message = 'budget of account must be a number'
  } else if (budget < 0 || budget > 1000000) {
    error.message = 'budget of account is too large or too small'
  } 

  if (error.message) {
    next(error)
  } else {
    next()
  }
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


exports.checkAccountId = async (req, res, next) => {
  const { id } = req.params
  try {
    const account = await Accounts.getById(id)
    if (!account) {
      next({  status: "404", message: `account not found.` })
    } else {
      req.account = account;
      next()
    }
  } catch (error) {
    next(error)
  }
  console.log('checkAccountId middleware')
  next()
}
