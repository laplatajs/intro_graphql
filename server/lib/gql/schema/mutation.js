const GraphQL = require('graphql');
const Vehiculo = require('lib/gql/types/Vehiculo');
const VehiculoInput = require('lib/gql/types/VehiculoInput');
const Auto = require('lib/gql/types/Auto');
const Bicicleta = require('lib/gql/types/Bicicleta');
const BicicletaInput = require('lib/gql/types/BicicletaInput');
const AutoInput = require('lib/gql/types/AutoInput');


module.exports = new GraphQL.GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createBicicleta: {
            type: Bicicleta,
            args: {
                bicicleta: {
                    type: BicicletaInput
                }
            },
            resolve: (root, { bicicleta }) => {
                return root.createVehiculo(bicicleta);
            }
        },
        createAuto: {
            type: Auto,
            args: {
                auto: {
                    type: AutoInput
                }
            },
            resolve: (root, { auto }) => {
                return root.createVehiculo(auto);
            }
        }
    }
});
