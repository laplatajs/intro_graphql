const GraphQL = require('graphql');
const VehiculoBase = require('lib/gql/types/VehiculoBase');

module.exports = new GraphQL.GraphQLObjectType(Object.assign({}, VehiculoBase(), { name: 'Vehiculo' }));
