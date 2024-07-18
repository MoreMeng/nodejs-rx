const { poolPromise } = require("./db");

const Query = {};

Query.executeQuery = async (sqlstm, result) => {
  if (process.env.NODE_ENV === "development")
    console.log(`\x1b[90m%s\x1b[0m`, `sql: ${sqlstm}`);

  try {
    const pool = await poolPromise;
    const poolRequest = await pool.query(sqlstm, (err, rs) => {
      if (err) {
        console.log(`Error while querying database :- ${err}`);
      } else {
        result.send(rs.rows);
      }
    });
  } catch (err) {
    console.log(err);
  }
};

module.exports = Query;
