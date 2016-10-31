const GraphQL = require('graphql');
const MarcaType = require('lib/gql/types/Marca');

module.exports = new GraphQL.GraphQLInputObjectType({
    name: 'VehiculoInput',
    fields: {
        peso: {
            type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLFloat)
        },
        marca: {
            type: new GraphQL.GraphQLNonNull(MarcaType)
        },
        modelo: {
            type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLString)
        },
        anio: {
            type: new GraphQL.GraphQLNonNull(GraphQL.GraphQLInt),
            // defaultValue: 2016
        }
    }
})
