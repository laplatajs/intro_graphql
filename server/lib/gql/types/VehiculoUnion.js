const GraphQL = require('graphql');
const Bicicleta = require('lib/gql/types/Bicicleta');
const Auto = require('lib/gql/types/Auto');

module.exports = new GraphQL.GraphQLUnionType({
    name: 'VehiculoUnion',
    types: [ Bicicleta, Auto ],
    resolveType: obj => obj.rodado ? Bicicleta : Auto
});
