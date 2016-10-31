const db = require('lib/database');
const uuid = require('node-uuid');

module.exports = {
    createVehiculo(vehiculo) {
        const diff = vehiculo.rodado ? { rodado: vehiculo.rodado } : { combustible: vehiculo.combustible };
        const nuevoVehiculo = Object.assign({}, vehiculo.vehiculo, diff, { _id: uuid.v4() });
        return db.get('vehiculos').push(nuevoVehiculo).last().value();
    }
}
