const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLEnumType({
  	name: 'UnidadPeso',
  	values: {
        TONELADA: {
            value: 'TONELADA'
        },
    	KILO: {
            value: 'KILO'
        },
    	LIBRA: {
            value: 'LIBRA'
        },
    	ONZA: {
            value: 'ONZA' 
        }
  	}
});
