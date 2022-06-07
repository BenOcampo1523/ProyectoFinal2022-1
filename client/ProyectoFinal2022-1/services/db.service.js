const config = require('../dbconfig');

async function query(sql) {
  /**
   * async = Palabra reservada que hace que una función regrese un resultado.
   * await = Palabra reservada para poner en espera un resultado o retorno de un async.
   */

  const connection = await mysql.createConnection(config.db);
  const [results,] = await connection.execute(sql);

  if (!results) {
    return [];
  }

  return results;
}

module.exports = query;
