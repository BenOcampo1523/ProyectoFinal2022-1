const boom = require('@hapi/boom');
const db = require('./db.service');
const helper = require('../middlewares/helper');
const { config } = require('rxjs');
const { listPerPage } = require('../src/dbconfig');

class AnimalesService {
  constructor() {
    this.generate();
  }

  generate() {

  }

  async crear(data) {
    const result = await db.query(
      `INSERT INTO animales (nombre, vacuna, adoptado, caracteristicas)
      VALUES '${data.nombre}', ${data.vacuna}, '${data.adoptado}', '${data.caracteristicas}'`
    );
    let message = 'Error en alta: No se añadieron datos en la base de datos.';

    if(result.affectedRows) {
      message = 'Se han añadido datos en la base de datos.';
    }

    return message;
  }

  async consultar(page = 1) {
    const offset = helper.getOffset(page, listPerPage)
    const result = await db.query(
      `SELECT * FROM animales`
    );

    const data = helper.emptyOrRows(rows);
    const meta = {page};

    return {data, meta}
  }

  async actualizar(id, cambios) {
    const result = await db.query(
      `UPDATE adopcion_animales.animales SET
      nombre='${cambios.nombre},' vacuna=${cambios.vacuna}, adoptado='${cambios.adoptado}', caracteristicas='${cambios.caracteristicas}'
      WHERE id_animal = ${id};`
    );
    let.message = 'Error al modificar datos especificados.';

    if(result.affectedRows) {
      message = 'Datos actualizados.';
    }

    return message;
  }

  async eliminar(id) {
    const result = await db.query(
      `DELETE FROM animales WHERE id_animal = ${id}`
    );
    let.message = 'Error al eliminar los datos especificados.';

    if(result.affectedRows) {
      message = 'Datos eliminados.';
    }

    return message;
  }
}

module.exports = AnimalesService;
