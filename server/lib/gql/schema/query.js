const GraphQL = require('graphql');
const VehiculoType = require('lib/gql/types/Vehiculo');
const VehiculoInterface = require('lib/gql/types/VehiculoInterface');
const VehiculoUnion = require('lib/gql/types/VehiculoUnion');
const MarcaType = require('lib/gql/types/Marca');
const Bicicleta = require('lib/gql/types/Bicicleta');
const Auto = require('lib/gql/types/Auto');
const db = require('lib/database');
const _ = require('lodash');
const fetch = require('node-fetch');

module.exports = new GraphQL.GraphQLObjectType({
    name: 'Query',
    fields: {
        vehiculos: {
            type: new GraphQL.GraphQLList(VehiculoInterface),
            args: {
                marca: {
                    type: MarcaType
                }
            },
            // // Ejemplo de redirección a REST:
            // // Levantar REST de la misma DDBB (json): npm run start:json:server
            // resolve: (root, args) => {
            //     const params = _.map(args, (value, name) => `${name}=${value}`).join('&');
            //     return fetch(`http://localhost:3000/vehiculos?${params}`).then(r => r.json());
            // }
            resolve: (root, args) => _.filter(db.get('vehiculos').value(), args)
        },
        vehiculo: {
            type: VehiculoInterface,
            args: {
                _id: {
                    type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLID)
                }
            },
            resolve: (root, args) => {
                // Levantar REST de la misma DDBB (json): npm run start:json:server
                // return fetch(`http://localhost:3000/vehiculos/${args._id}`).then(r => r.json());
                return db.get('vehiculos').find('_id', args._id).value()
            }
        },
        vehiculosUnion: {
            type: new GraphQL.GraphQLList(VehiculoUnion),
            resolve: (root, args) => {
                return db.get('vehiculos').value()
            }
        }
    }
});
