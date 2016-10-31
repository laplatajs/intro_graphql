require('./bootstrap');

const Hapi = require('hapi');
const HapiGraphQL = require('hapi-graphql');
const GraphQL = require('graphql');
const schema = require('lib/gql/schema/schema');
const root = require('lib/gql/schema/root');

const server = new Hapi.Server();
server.connection({
  	port: 4000,
  	host: 'localhost'
});

server.register({
  	register: HapiGraphQL,
  	options: {
	    query: {
	      	schema,
            rootValue: root,
	      	graphiql: true,
	    },
	    route: {
	      	path: '/graphql',
	      	config: {}
	    }
  	}
}, () =>
  	server.start(() => console.log('Server running at:', server.info.uri))
);
