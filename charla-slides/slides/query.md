### Query
#### __Fields__
* Forma básica de __consulta__
* Especificamos realmente _lo que queremos_
* Debe respetar el __schema__

<div class="grid-2">
  <div class="col">
    _query_
    <pre class="f-small"><code>{
    pirlo: mascota(nombre: "Pirlo") {
        especie
        edad
        queCome
    }
}   </code></pre>
  </div>
  <div class="col">
    _response_
    <pre class="f-small"><code>{
    "data": {
        "pirlo" {
            "especie": "Puro Perro",
            "edad": 7,
            "queCome": [
                "BALANCEADO",
                "PANTUFLA"
            ]
        }
    }
}</code></pre>
  </div>
</div>

-v-

### Query
#### __Arguments__

<div class="grid-2">
  <div class="col">
    _query_
    <pre class="f-small"><code>{
    mascota(nombre: "Pirlo") {
        especie
        edad(unidad: AÑO)
        queCome
    }
}   </code></pre>
  </div>
  <div class="col">
    _response_
    <pre class="f-small"><code>{
    "data": {
        "mascota" {
            "especie": "Puro Perro",
            "edad": 0.58, // 7 Meses
            "queCome": [
                "BALANCEADO",
                "PANTUFLA"
            ]
        }
    }
}</code></pre>
  </div>
</div>

-v-

### Query
#### __Alias__

<div class="grid-2">
  <div class="col">
    _query_
    <pre class="f-small"><code>{
  pirlo: mascota(nombre: "Pirlo") {
    especie
  }

  cr7: mascota(nombre: "CR7") {
    especie
  }
}   </code></pre>
  </div>
  <div class="col">
    _response_
    <pre class="f-small"><code>{
    "data": {
        "pirlo" {
            "especie": "Puro Perro"
        },
        "cr7" {
            "especie": "Puro Gato"
        }
    }
}</code></pre>
  </div>
</div>

-v-

### Query
#### __Fragments__

* Conjunto de campos para reutilizar en queries

<div class="grid-2">
  <div class="col">
    _query_
    <pre class="f-small"><code>{
  pirlo: mascota(nombre: "Pirlo") {
    ...datosMascota
  }

  cr7: mascota(nombre: "CR7") {
    ...datosMascota
  }

  fragment datosMascota on Mascota {
  	nombre
  	especie
  	edad
  }
}   </code></pre>
  </div>
  <div class="col">
    _response_
    <pre class="f-small"><code>{
    "data": {
        "pirlo" {
        	"nombre": "Pirlo",
            "especie": "Puro Perro",
            "edad": 7
        },
        "cr7" {
        	"nombre": "CR7",
            "especie": "Puro Gato",
            "edad": 14
        }
    }
}</code></pre>
  </div>
</div>

-v-

### Query
#### __Inline Fragments__

* Utilizados para realizar queries sobre campos que retornen __Interfaces__ ó __Union Types__
* Permiten acceder a los campos del objeto en concreto

<div class="grid-noGutter">
  <div class="col-6">
    _query_
    <pre class="f-small"><code>{
  mascotas {
    nombre
    especie
    ... on Gato {
      horasQueDuerme
    }
    ... on Perro {
      esGuardian
    }
  }
}</code></pre>
  </div>
  <div class="col-6">
    _response_
    <pre class="f-small"><code>{
  "data": {
  "mascotas": [
    {
      "nombre": "Pirlo",
      "especie": "Puro Perro",
      "esGuardian": true
    },
    {
      "nombre": "CR7",
      "especie": "Puro Gato",
      "horasQueDuerme": 22
    }
    ]
  }
}</code></pre>
  </div>
</div>

Note: En Union types son obligatorios de usar

-v-

### Query
#### __Variables__

* Se definen __en la query__
* Pueden ser requeridas (!)

<br />

<div class="grid-3 w-140">
  <div class="col-4">
    _query_
    <pre class="f-small"><code>{
  query ($nombre: String!) {
    mascota(nombre: $nombre) {
	  especie
	  edad
	}
  }
}   </code></pre>
  </div>
  <div class="col-3">
    _variables_
    <pre class="f-small"><code>{
    "nombre": "Pirlo"
}</code></pre>
  </div>
  <div class="col-5">
    _response_
    <pre class="f-small"><code>{
    "data": {
        "mascota" {
            "especie": "Puro Perro",
            "edad": 7
        }
    }
}</code></pre>
  </div>
</div>

-v-

### Query
#### __Directives__

* Controlan la __estructura de la respuesta__
* Además infieren en el comportamiento del server
* Se pueden crear custom directives
* Built-in en el core de GraphQL:
  
_Schema_ 
<pre><code>
@include(if: Boolean) # Incluye el campo si if = true

@skip(if: Boolean) # Omite el campo si if = true

</code></pre>

-v-

### Query
#### __Directives__

<div class="grid-noGutter w-110">
  <div class="col-5">
    _query_
    <pre class="f-small"><code>{
  query mascotas($sinComida: Boolean) {
    mascotas(sinComida: $sinComida) {
      nombre
	  queCome @skip(if: $sinComida)
	}
  }
}   </code></pre>
  </div>
  <div class="col-3">
    _variables_
    <pre class="f-small"><code>{
    "sinComida": true
}</code></pre>
  </div>
  <div class="col-4">
    _response_
    <pre class="f-small"><code>{
	"data": {
		"mascotas": [
			{
	        	"nombre": "Pirlo"
			},
			{
				"nombre": "CR7"
			}
		]
	}
}</code></pre>
  </div>
</div>

-v-

### Query
#### __Mutations__

* Operación utilizada para modificar información en el server
* Múltiples mutations invocadas: __Se ejecutan secuencialmente__ (vs Query = Paralelo)
* Deben retornar algún tipo: usualmente se utiliza retornar el objeto creado

<div class="grid-noGutter w-110">
  <div class="col-5">
    _query_
    <pre class="f-small"><code>mutation ($mascota: Mascota) {
  createMascota (mascota: $mascota) {
    nombre
    especie
  }
}</code></pre>
  </div>
  <div class="col-3">
    _variables_
    <pre class="f-xsmall"><code>{
  "mascota": {
    "nombre": "Curl Agüero",
    "especie": "Puro Perro"
  }
}</code></pre>
  </div>
  <div class="col-4">
    _response_
    <pre class="f-small"><code>{
  "data": {
	"createMascota": {
      "nombre": "Curl Agüero",
      "especie": "Puro Perro"
    }
  }
}</code></pre>
  </div>
</div>

Note: Nada impide ejecutar "mutations" en Queries... pero => Convención
