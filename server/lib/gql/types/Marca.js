const GraphQL = require('graphql');

module.exports = new GraphQL.GraphQLEnumType({
  	name: 'Marca',
  	values: {
    	RENAULT: {
            value: 'RENAULT'
        },
    	PEUGEOT: {
            value: 'PEUGEOT'
        },
    	FIAT: {
            value: 'FIAT' 
        },
        BMX: {
            value: 'BMX'
        }
  	}
});
