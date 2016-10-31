const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLEnumType({
  	name: 'Combustible',
  	values: {
    	NAFTA: {
            value: 'NAFTA'
        },
    	GASOIL: {
            value: 'GASOIL'
        }
  	}
});
