const { graphql, buildSchema } = require('graphql');

const schema = buildSchema(`
    type Query {
        dameLosEnum: [unEnum]
    }

    enum unEnum {
        EN_1
        EN_2
        EN_3
    }
`);

const root = {
    dameLosEnum: () => {
        return ["EN_1", "EN_2", "EN_3"];
    }
};

// const schemaPrinter = require('graphql/utilities/schemaPrinter');
// console.log(schemaPrinter.printSchema(schema));

graphql(schema, '{ dameLosEnum }', root).then(response => {
    console.log(response);
});
