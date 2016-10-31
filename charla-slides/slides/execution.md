### Execution

* Cada campo en cada tipo tiene un __resolver__
* __Trivial resolver__: Si no se especifica se intentará acceder al campo con el mismo nombre sobre el Object que se esté consultando
* Si el campo es de tipo _Scalar_ ó _Enum_ la ejecución se completa
* Sino se repite el proceso para el objeto resultante
* El resolver __puede__ retornar Promises

-v-

### Execution
#### Resolver function

```
  function resolve(obj, args, context) {
      // ...
      // Return a new (Promise of) Type, Scalar, Enum, etc
  }
```
* ```obj```<!-- .element: class="hljs javascript"--> El objeto padre
* ```args```<!-- .element: class="hljs javascript"--> Los argumentos especificados
* ```context```<!-- .element: class="hljs javascript"--> Valor pasado a todo resolver. Contiene información útil de contexto (Auth, DB, etc.).

Note: Un parámetro más: info => http://pcarion.com/2015/09/26/graphql-resolve/
  Después viene el ejemplo

-v-

### Execution
#### Resultado

* Se van resolviendo los campos desde los objetos mas internos hacia afuera
* Se construye un __key-value map__ con todos los valores recolectados
* La estructura de este resultado es idéntica a la solicitada en la __query__
* En general se utiliza __JSON__ para la _response_, puede usarse otro formato

_Response_
```json
{
    "data": {
        "mascota" {
            "especie": "Puro Perro",
            "edad": 7,
            "queCome": [
                "BALANCEADO",
                "PANTUFLA"
            ]
        }
    }
}
```