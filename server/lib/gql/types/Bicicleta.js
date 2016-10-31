const GraphQL = require('graphql');
const VehiculoInterface = require('lib/gql/types/VehiculoInterface');
const VehiculoBase = require('lib/gql/types/VehiculoBase');

const bicicletaBase = Object.assign({}, VehiculoBase(), {
    interfaces: () => [ VehiculoInterface ],
    name: 'Bicicleta',
    // isTypeOf: obj => obj.rodado
});

bicicletaBase.fields.rodado = {
    type: GraphQL.GraphQLInt
};

const Bicicleta = new GraphQL.GraphQLObjectType(bicicletaBase);

module.exports = Bicicleta;
