![Its Been Done][itsbeendone]
  

Esto ya se ha hecho!

[itsbeendone]: <img/itsbeendone.gif>

-v-

### GraphQL vs REST
#### GraphQL 
* Relativamente "nuevo"
* Estructura de response __definida en el cliente__
* Response exactamente como queremos
* Un solo endpoint
* Un solo request para obtener varios "recursos"
* Especificación
* Convenciones (mutation/queries)

Note: 1. REST también...

-v-

### GraphQL vs REST
#### GraphQL 

* Introspection
* Estándar para devolución de errores
* Más código para definición de tipos
* Utilidades: 
	* buildschema
	* GraphiQL
* Implementado en varios lenguajes

-v-

#### REST
* Basado en HTTP (GET/POST/PUT/PATCH/DELETE)
* Lleva muchos años utilizándose
* Personalización (relaciones, filtros, etc.)
* Varias llamadas para recursos del mismo tipo \*
* Escalabilidad: 
  * Nuevo recurso => nuevo endpoint

\* Relativamente

-v-

### GraphQL vs REST
#### Request

<div class="grid">
	<div class="col">
		GraphQL
		<pre><code>{
   user(id: 400) {
     id,
     name,
     isViewerFriend,
     profilePicture(size: 50)  {
       uri,
       width,
       height
     }
   }
}		</code></pre>
	</div>
	<div class="col">
	REST
	<pre><code>/users/4000?
  field=id&
  field=name&
  field=isViewerFriend&
  field=profilePicture&
  filter:profilePicture.size=50&
  field=profilePicture.uri&
  field=profilePicture.width&
  field=profilePicture.height</code></pre>
	</div>
</div>

-v-

### GraphQL vs REST
#### GraphQL + REST

* Podemos encapsular una API REST con GraphQL
* Implica comunicación adicional

![REST API][restapi]

[restapi]: <img/graphql-rest.jpg>