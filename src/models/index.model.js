const { poolPromise } = require("./db");

const Index = {};

Index.getProp = async (result) => {
  console.log(`Index Model`);

  let query = `select hospitalname, hospitalcode, hnstartnumber from opdconfig`;
  try {
    const pool = await poolPromise;
    const poolRequest = await pool.query(query, (err, rs) => {
      if (err) {
        console.log(`Error while querying database :- ${err}`);
        // res.send(err)
      } else {
        // console.log(rs)
        result(null, rs.rows);
      }
    });

    //   res.json(result.recordset)
  } catch (err) {
    console.log(err);
    // res.status(500)
    // res.send(err.message)
  }
};

module.exports = Index;
