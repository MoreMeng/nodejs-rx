module.exports = (app) => {
  const routes = require(`../controllers/opd.controller`);

  app.get("/opd/:from/:to", routes.opAnywhere)
};
