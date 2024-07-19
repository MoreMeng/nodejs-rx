const Query = require("../models/query.model");

exports.opAnywhere = (req, res) => {
  const date_start = /^\d{4}-\d{2}-\d{2}$/.test(req.params.from);
  const date_end = /^\d{4}-\d{2}-\d{2}$/.test(req.params.to);
  console.log(date_start, date_end);
  if (date_start && date_end) {
    const sqlstm = `SELECT
    EXTRACT(MONTH FROM vs.vstdate) AS month,
    SUM(CASE WHEN vs.hospmain = '10689' THEN 1 ELSE 0 END) sum_10689,
    SUM(CASE WHEN vs.hospmain <> '10689' AND ov.ovstist = '04' THEN 1 ELSE 0 END) sum_refer,
    SUM(CASE WHEN vs.hospmain <> '10689' AND ov.ovstist <> '04' THEN 1 ELSE 0 END) sum_nonrefer,
    COUNT(*) as count_vn
FROM
    vn_stat vs
LEFT JOIN ovst ov ON ov.vn = vs.vn
LEFT JOIN pttype py ON py.pttype = vs.pttype
WHERE
    vs.vstdate BETWEEN '${req.params.from}' AND '${req.params.to}'
    AND py.hipdata_code IN ('UCS', 'WEL')
GROUP BY
    EXTRACT(MONTH FROM vs.vstdate)
ORDER BY
    month;`;

    Query.executeQuery(sqlstm, res);
  } else {
    res.send("Invalid date format");
  }
};
