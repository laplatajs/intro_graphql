### Schema
* <!-- .element: class="fragment" -->GraphQL se basa en un ___schema___, en el cual se define un conjunto de __tipos__ que describen completamente los __datos__ y las __interacciones__ disponibles
* <!-- .element: class="fragment" -->La query que proviene del cliente se __valida__ contra el schema
* <!-- .element: class="fragment" -->Podríamos respondernos:
  * <!-- .element: class="fragment" -->Qué campos podemos consultar?
  * <!-- .element: class="fragment" -->Qué clase de objetos deberíamos retornar?
  * <!-- .element: class="fragment" -->Cuáles son los campos disponibles en las sub-consultas?

-v-

### Schema

* <!-- .element: class="fragment" -->El componente base de un schema en GraphQL es el __Tipo de objeto__ ([GraphQLObjectType])
  * <!-- .element: class="fragment" -->Representa un objeto (datos) que puede ser obtenido desde el serivcio
  * <!-- .element: class="fragment" -->Además contiene los campos que componen al tipo de objeto

_Schema_<!-- .element: class="fragment" -->
```
type Animal {
    nombre: String!
    especie: String!
    edad(unidad: UnidadEdad = MES): Int!
    queCome: [Comida]!
}
```
<!-- .element: class="fragment" -->

[GraphQLObjectType]: http://graphql.org/graphql-js/type/#graphqlobjecttype

-v-

### Schema
#### Root Type
* En la raiz del schema hay un tipo que representa los posibles puntos de entrada a nuestro servicio

_Schema_
```
type QueryType {
  mascota(nombre: String!): Animal
  mascotas(first: Int): [Animal]!
  ...
}

type MutationType {
  createMascota(nombre: String!): Animal
  ...
}

schema {
  query: QueryType
  mutation: MutationType
}
```

-v-

### Schema
#### __Query__ + __Mutation__

<div class="grid">
  <div class="col-8">
    _Schema_
    <pre><code>type Query {
    mascota(nombre: String!): Animal
    mascotas(first: Int): [Animal]!
}

type Mutation {
  createMascota(nombre: String!): Animal
}</code></pre>
  </div>
  <div class="col-4">
    _Schema_
    <pre><code>schema {
    query: Query
    mutation: Mutation
}
    </code></pre>
  </div>
</div>

* __Query__ y __Mutation__ son dos tipos "especiales" dentro de un schema
* Todo servicio GraphQL:
  * __Debe__ tener un objeto de tipo __Query__
  * __Puede__ tener un objeto tipo __Mutation__
* Definen el __punto de entrada__ para toda query
* Sus __fields__ se manejan de la misma manera que un objeto convencional

-v-

### Schema
#### __Arguments__
_Schema_
```
type Animal {
    nombre: String!
    especie: String!
    edad(unidad: UnidadEdad = MES): Int!
    queCome: [Comida]!
}
```

* Todo __field__ en un __object__ en GraphQL puede tener __argumentos__.
* Son pasados por nombre.
* Si no son requeridos, pueden especificar un valor por default.
* Del ejemplo: Se puede especificar en qué unidad de tiempo se requiere el campo edad. Si no se especifica se toma el default: __MES__

-v-

### Schema
#### __Valores escalares__

* Los campos en un objeto deben __resolverse__ de manera concreta en cierto punto -> __valores escalares__
* Built-in: __Int__, __Float__, __String__, __Boolean__, __ID__
* Se pueden definir más valores ([GraphQLScalarType]), serialización de por medio.
* Ejemplo:
  <pre><code>scalar Date // -> Se podría serializar a un timestamp (Int)</code></pre>

[GraphQLScalarType]: http://graphql.org/graphql-js/type/#graphqlscalartype

-v-

### Schema
#### __Enumerativos__

* Son un tipo especial de valor escalar
* Como en otros lenguajes, representan un conjunto finito de valores posibles

<div class="grid-2">
  <div class="col">
  _Schema_
<pre><code>
enum Comida {
    VEGETALES
    CARNE
    BALANCEADO
    PANTUFLA
}

</code></pre>
  </div>
  <div class="col">
  _Response_
<pre><code>{
    ...
    "queCome": [
      "BALANCEADO",
      "PANTUFLA"
    ]
    ...
}
</code></pre>
  </div>
</div>

Note: Vienen los ejemplos mas adelante

-v-

### Schema
#### __Listas__

* Ejemplo:

<div class="grid-2">
  <div class="col">
  _Schema_
<pre><code>
type Animal {
    ...
    queCome: [Comida]!
    ...
}


</code></pre>
  </div>
  <div class="col">
  _Response_
<pre><code>{
    ...
    "queCome": [
      "BALANCEADO",
      "PANTUFLA"
    ]
    ...
}
</code></pre>
  </div>
</div>

-v-

### Schema
#### __Non-Nulls__

* Se utiliza el char "__!__"
* Si no se respeta => GraphQL Execution Error
* También se utiliza en argumentos para campos

_Schema_
<pre class="w-110"><code>
type Animal {
    nombre: String!                       // String NO-NULL
    especie: String!                      // String NO-NULL
    edad(unidad: unidadEdad = MES): Int!  // Int NO-NULL
    queCome: [Comida]!                    // lista (Puede contener nulos como elementos)
    listaSinNulls: [String!]              // null ó [] ó lista de elementos sin null values
}
</code></pre>

-v-

### Schema
#### __Interfaces__

* Tipo abstracto con fields (análogo a un tipo común)
* Un tipo __implementa__ una interface con los fields que define
* Útiles para retornar un objeto o un __conjunto de objetos de diferentes tipos__

_Schema_
```
interface Mascota {
    nombre: String!
    especie: String!
}

type Perro implements Mascota {
    nombre: String!
    especie: String!
    esGuardian: Boolean!
}

type Gato implements Mascota {
    nombre: String!
    especie: String!
    horasQueDuerme: Int!
}
```
<!-- .element: class="f-small" -->

-v-

### Schema
#### __Union Types__

* Similar a __Interface__
* No define campos en común
* Se utilizan Types concretos. No se pueden crear Unions de Interfaces u otros Unions

_Schema_
```
type Perro {                          type Mascota = Perro | Gato
    nombre: String!,   
    raza: String!                     type Query {
    esGuardian: Boolean!                  mascotas: Mascota,
}                                     }

type Gato {
    nombre: String!
    especie: String!
    horasQueDuerme: Int!
}
```

-v-

### Schema
#### __Input Type__

* Permite crear tipos de objetos para ser pasados como argumentos
* Ideales para mutations
* Un __Input Type__ puede contener otro __Input Type__ como campo

<div class="grid-3 w-110 m-top" >
  <div class="col-3">
    _schema_
    <pre class="f-small"><code>input PerroInput {
    nombre: String!
    raza: String!
}   </code></pre>
  </div>
  <div class="col-5">
    _request_
    <pre class="f-small"><code>mutation createPerro($perro: PerroInput!) {
    createPerro($perro) {
        nombre
        raza
    }
}</code></pre>
  </div>
  <div class="col-4">
    _variables_
    <pre class="f-small"><code>{
    "perro": {
        "nombre": "Pirlo",
        "raza": "Puro Perro"
    }
}</code></pre>
  </div>
</div>