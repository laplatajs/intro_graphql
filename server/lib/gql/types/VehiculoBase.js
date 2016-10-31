const GraphQL = require('graphql');
const MarcaType = require('lib/gql/types/Marca');
const UnidadPesoType = require('lib/gql/types/UnidadPeso');
const _ = require('lodash');

const findUnidad = name => _.find(UnidadPesoType._values, { name }).value

const kiloTo = {
    [findUnidad('KILO')]: 1,
    [findUnidad('LIBRA')]: 2.20462,
    [findUnidad('ONZA')]: 35.274,
    [findUnidad('TONELADA')]: 0.001
}

module.exports = () => ({
	name: 'Vehiculo',
	fields: {
        _id: {
            type: GraphQL.GraphQLID
        },
		peso: {
			type: GraphQL.GraphQLFloat,
            args: {
                unidad: {
                    type: UnidadPesoType,
                    defaultValue: findUnidad('KILO'),
                }
            },
            resolve: (vehiculo, args) => vehiculo.peso * kiloTo[args.unidad]
		},
		marca: {
			type: new GraphQL.GraphQLNonNull(MarcaType),
            // resolve: (vehiculo) => null
		},
        modelo: {
            type: GraphQL.GraphQLString
        },
        anio: {
            type: GraphQL.GraphQLInt,
            resolve: (vehiculo) => new Promise((resolve, reject) => resolve(vehiculo.anio)) // Promise
        }
	}
});
