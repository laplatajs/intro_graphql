## WTF con GraphQL?<!-- .element: class="no-upper" -->
![GraphQL][graphql]<!-- .element: class="logo-graphql" -->
#### Intro + Experiencia
<small>[@estebanprimost] / <a href="mailto:esteban.primost@gmail.com">esteban.primost@gmail.com</a></small>

![LaPlataJS][laplatajs]<!-- .element: class="logo" -->
#### [__LaPlataJS__]<!-- .element: class="no-upper" -->

[@estebanprimost]: <https://twitter.com/estebanprimost>
[laplatajs]: </img/lpjs-logo.png>
[graphql]: </img/graphql.svg>
[__LaPlataJS__]: http://laplatajs.github.io

---

## GraphQL<!-- .element: class="no-upper" -->
* <!-- .element: class="fragment" --> __G__raph__QL__ (QL = Query Language).
* <!-- .element: class="fragment" -->Lenguaje de consulta declarativo para __APIs__.
* <!-- .element: class="fragment" -->Creado por Facebook en 2012. Primer release en 2015.
* <!-- .element: class="fragment" -->Protocolo? Especificación? Filosofía?
* <!-- .element: class="fragment" -->Describe __interacciones y datos__ entre cliente y servidor.
* <!-- .element: class="fragment" -->Mapea y unifica las capacidades del server en una __interfaz de comunicación__.
* <!-- .element: class="fragment" -->Independiente de:
  * Storage system
  * Lenguaje (cliente/servidor)

---

#### Interacción

<div class="grid-3">
  <div class="col">
    __Query__<br/>
    <small>_Cliente_</small>
    <pre><small><code>{
    mascota(nombre: "Pirlo") {
        especie,
        edad,
        queCome
    }
}   </code></small></pre>
  </div>

  <div class="col">
    __Schema__<br/>
    <small>_Servidor_</small>
    <pre><small><code>type Query {
    mascota(nombre: String!): Animal
}

type Animal {
    nombre: String!,
    especie: String!,
    edad: Int!,
    queCome: [Comida]!
}

enum Comida {
    VEGETALES,
    CARNE,
    BALANCEADO,
    PANTUFLA
}   </code></small></pre>
  </div>

  <div class="col">
    __Response__<br/>
    <small>JSON</small>
    <pre><small><code>{
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
}   </code></small></pre>
  </div>
</div>

1. <!-- .element: class="fragment" -->Construimos y enviamos una __query__ desde el _cliente_
2. <!-- .element: class="fragment" -->El server valida la __query__ con el __schema__ definido en el _servidor_ y se resuelve
3. <!-- .element: class="fragment" -->Se genera un __response__ con el mismo formato de la __query__

Note: No hay lenguaje todavía!
