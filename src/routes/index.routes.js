module.exports = app => {
  const index = require(`../controllers/index.controller.js`)

  app.get(`/`, index.sendProp)

}