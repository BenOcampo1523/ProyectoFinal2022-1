const db = require('./db.service');

class AnimalesService {
    constructor() {
        this.generate();
    }

    generate() {

    }

    async crear(data) {
        const result = await db.query(
            `INSERT INTO animales (nombre, vacuna, adoptado, caracteristicas)
            VALUES ('${data.nombre}', ${data.vacuna}, '${data.adoptado}', '${data.caracteristicas}')`
        );

        return result;
    }

    async consultar() {
        const result = await db.query(`SELECT * FROM animales`);
        return result;
    }

    async consultarUno(id) {
        const result = await db.query(`SELECT * FROM animales WHERE id_animal=${id}`);
        return result;
    }

    async actualizar(id, cambios) {
        const result = await db.query(
            `UPDATE animales SET
            nombre='${cambios.nombre}', vacuna='${cambios.vacuna}', adoptado='${cambios.adoptado}', caracteristicas='${cambios.caracteristicas}'
            WHERE id_animal=${id};`
        );
        return result;
    }

    async eliminar(id) {
        const result = await db.query(
            `DELETE FROM animales WHERE id_animal = ${id}`
        );
        return result;
    }
}

module.exports = AnimalesService;