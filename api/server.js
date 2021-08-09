const express = require("express");
const accountRoutes = require("./accounts/accounts-router");

const server = express();

server.use(express.json());
server.use("/api/accounts", accountRoutes)
server.get('/', (req, res, next) => {
  res.send(`
    <h1>Sprint 1 Challenge</h1>
    <h2>Build a Web API</h2>
    <h3>Web44, Unit 4, Sprint 1</h3>
    <p>Murray Warnock</p>
    <p>August 6, 2021</p>
  `);
  next();
});

server.use('*', (req, res, next) => {
    console.log(`hitting ${req.method} ${req.baseUrl}`);
    next({ status: 404, message: 'not found' }); 
});

server.use((err, req, res, next) => { 
  res.status(err.status || 500).json({ message: `ERROR: ${err.message}` });
  next(); // There should be no next....
});  

module.exports = server;
