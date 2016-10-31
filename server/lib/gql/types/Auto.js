const GraphQL = require('graphql');
const VehiculoInterface = require('lib/gql/types/VehiculoInterface');
const VehiculoBase = require('lib/gql/types/VehiculoBase');
const CombustibleType = require('lib/gql/types/Combustible');

const autoBase = Object.assign({}, VehiculoBase(), {
    interfaces: () => [ VehiculoInterface ],
    name: 'Auto',
    // isTypeOf: obj => obj.combustible
});

autoBase.fields.combustible = {
    type: CombustibleType
};

const Auto = new GraphQL.GraphQLObjectType(autoBase);

module.exports = Auto;
