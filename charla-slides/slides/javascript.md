### GraphQL + Node.js

* Librerías:
  * __graphql__: 
    * Core de GraphQL
    * Schema
    * Types
    * etc.
  * __express-graphql__ / __hapi-graphql__
    * Middlewares para montar un servicio graphql
    * No son los únicos...

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__GraphQLSchema__</small>

```javascript
const schema = new GraphQLSchema({
    query: queryType, // GraphQLObjectType
    mutation: mutationType // GraphQLObjectType
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__GraphQLObjectType__</small>

```javascript
const AddressType = new GraphQLObjectType({
    name: 'Address',
    fields: {
        street: { type: GraphQLString },
        number: { type: GraphQLInt },
        formatted: {
            type: GraphQLString,
            resolve(obj) {
                return obj.number + ' ' + obj.street
            }
        }
    }
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__Scalars__</small>

```javascript
const AllScalarsType = new GraphQLObjectType({
    name: 'AllScalars',
    fields: {
        scalarBoolean:    { type: GraphQLBoolean }
        scalarFloat:      { type: GraphQLFloat }
        scalarId:         { type: GraphQLID }
        scalarInt:        { type: GraphQLInt }
        scalarScalartype: { type: GraphQLScalarType }
        scalarString:     { type: GraphQLString }
    }
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__Enums__</small>

```javascript
const RGBType = new GraphQLEnumType({
    name: 'RGB',
    values: {
        RED: { value: 0 },
        GREEN: { value: 1 },
        BLUE: { value: 2 }
    }
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__Interfaces__</small>

```javascript
const PersonType = new GraphQLInterfaceType({
    name: 'Person',
    fields: {
        name: { type: GraphQLString },
        age: { type: GraphQLInt }
    }
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__Unions__</small>

```javascript
const PetType = new GraphQLUnionType({
    name: 'Pet',
    types: [ DogType, CatType ],
    resolveType(value) {
        if (value instanceof Dog) {
            return DogType;
        }
        if (value instanceof Cat) {
            return CatType;
        }
    }
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__GraphQLInputObjectType__</small>

```javascript
const GeoPoint = new GraphQLInputObjectType({
    name: 'GeoPoint',
    fields: {
        lat: { type: new GraphQLNonNull(GraphQLFloat) },
        lon: { type: new GraphQLNonNull(GraphQLFloat) },
        alt: { type: GraphQLFloat, defaultValue: 0 }
    }
});
```

-v-

### GraphQL + Node.js
#### graphql-js
<!-- .element: class="no-upper" -->

<small>__GraphQLList__</small>

```javascript
const PersonType = new GraphQLObjectType({
    name: 'Person',
    fields: () => ({
        parents: { type: new GraphQLList(Person) },
        children: { type: new GraphQLList(Person) }
    })
});
```
