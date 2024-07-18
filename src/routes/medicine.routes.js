module.exports = (app) => {
  const routes = require(`../controllers/medicine.controller`);

  /**
   * MedLast
   * - List of medicines previously used
   * - 2023-01-23 10:37:11
   * @param {id} req HN or CID
   * @param {vn} req visit number
   * @param {*} res
   */
  app.get("/medlast/:id", routes.medLast);
  app.get("/medlast/:id/:vn", routes.medLast);
};
