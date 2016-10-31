const GraphQL = require('graphql');
const VehiculoBase = require('lib/gql/types/VehiculoBase');

const VehiculoInterface = VehiculoBase();
VehiculoInterface.name = 'VehiculoInterface';
VehiculoInterface.resolveType = (object) => object.rodado ? require('lib/gql/types/Bicicleta') : require('lib/gql/types/Auto');


module.exports = new GraphQL.GraphQLInterfaceType(VehiculoInterface);
