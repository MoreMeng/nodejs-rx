const Query = require("../models/query.model");
// const _m = require('../../config/medicine')._config
// const _p = require('../../config/paytype.group')._config

/**
 * MedLast
 * 2023-01-23 10:37:11
 * List of medicines previously used
 *
 * @param {string} req id, vn
 * @param {JSON} res
 */
exports.medLast = (req, res) => {
  // SITE 1 = OPD
  let site = 1;
  // HN
  let cause = req.params.id.length > 9 ? `pt_cid = '${req.params.id}'` : `hn = '${("000000000" + req.params.id).slice(-9)}'`;

  let sqlstm = `SELECT site, order_date,order_time,hn,vn,pt_name,rx_code,rx_name,rx_usage_code,rx_dose,rx_time_use,rx_time_use_text,rx_quanty,rx_unit,rx_strength FROM "_MOREMENG_MED_LAST5" WHERE ${cause} ORDER BY vn DESC`;

  if (req.params.vn) {
    sqlstm = `SELECT site, order_date,order_time,hn,vn,pt_name,rx_code,rx_name,rx_usage_code,rx_dose,rx_time_use,rx_time_use_text,rx_quanty,rx_unit,rx_strength FROM "_MOREMENG_MED_LAST5" WHERE ${cause} AND vn = '${req.params.vn}'`;
  }

  Query.executeQuery(sqlstm, res);
};
