const GraphQL = require('graphql');
const VehiculoInput = require('lib/gql/types/VehiculoInput');

module.exports = new GraphQL.GraphQLInputObjectType({
    name: 'BicicletaInput',
    fields: {
        vehiculo: {
            type: new GraphQL.GraphQLNonNull(VehiculoInput)
        },
        rodado: {
            type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLInt)
        }
    }
})
