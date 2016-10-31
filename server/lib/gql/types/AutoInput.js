const GraphQL = require('graphql');
const Combustible = require('lib/gql/types/Combustible');
const VehiculoInput = require('lib/gql/types/VehiculoInput');

module.exports = new GraphQL.GraphQLInputObjectType({
    name: 'AutoInput',
    fields: {
        vehiculo: {
            type: new GraphQL.GraphQLNonNull(VehiculoInput)
        },
        combustible: {
            type: new GraphQL.GraphQLNonNull(Combustible)
        }
    }
})
