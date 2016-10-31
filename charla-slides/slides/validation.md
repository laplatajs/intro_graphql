### Validation

* Gracias al sistema de tipos se puede __validar una query__ al ser recibida:
  * Campos No-Nulos
  * Campos que no existen en el tipo de objeto consultado (Objects / Interfaces / Unions)
  * Fragments auto-referenciados o ciclos
  * Consultas vacías: (Excepto Scalars y Enums) deben especificarse los campos a consultar

-v-

### Validation

* [Especificación: http://facebook.github.io/graphql/#sec-Validation]
* Algunas Reglas
  * ArgumentsOfCorrectType
  * FieldsOnCorrectType
  * NoFragmentCycles
  * NoUndefinedVariables
  * ... (Hay más)
* [Acá implementadas para JS]

[Acá implementadas para JS]: https://github.com/graphql/graphql-js/tree/master/src/validation/rules
[Especificación: http://facebook.github.io/graphql/#sec-Validation]: http://facebook.github.io/graphql/#sec-Validation

-v-

### Validation

* Devolución de errores = JSON.

_response_
```
{
  "errors": [
    {
      "message": "Variable \"$nombre\" of required type \"String!\" was not provided.",
      "locations": [
        {
          "line": 1,
          "column": 22
        }
      ]
    }
  ]
}
```
<!-- .element: class="w-110" -->

Note: Otros formatos. Respuesta de error "amigable"