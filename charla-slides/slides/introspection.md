### Introspection
#### \_\_schema

* Es posible consultar a un servicio GraphQL acerca de la información del schema
* Se utiliza el mismo mecanismo de consulta que para las queries de nuestra API

<div class="grid">
  <div class="col">
    <pre><code>{
  \_\_schema {
    queryType {
      name
    }
  }
}</code></pre>
  </div>
  <div class="col">
    <pre><code>{
  "data": {
    "__schema": {
      "queryType": {
        "name": "Query"
      }
    }
  }
}</code></pre>
  </div>
</div>

* Listado de top-level queries disponibles

-v-

### Introspection
#### \_\_type

* Info acerca de un tipo

<div class="grid">
  <div class="col">
    <pre><code>{
  \_\_type(name: "Animal") {
    fields {
      name
    }
  }
}</code></pre>
  </div>
  <div class="col">
    <pre><code>{
  "data": {
    "__type": {
      "fields": [
        {
          "name": "nombre"
        },
        {
          "name": "especie"
        },
        {
          "name": "edad"
        },
        {
          "name": "queCome"
        }
    }
  }
}</code></pre>
  </div>
</div>
