const GraphQL = require('graphql');
const queryType = require('lib/gql/schema/query');
const mutationType = require('lib/gql/schema/mutation');
const Bicicleta = require('lib/gql/types/Bicicleta');
const VehiculoInterface = require('lib/gql/types/VehiculoInterface');
const Auto = require('lib/gql/types/Auto');

module.exports = new GraphQL.GraphQLSchema({
	query: queryType,
    mutation: mutationType,
    types: [ Bicicleta, Auto, VehiculoInterface ]
});
