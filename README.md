# WTF con GraphQL
## Intro + Experiencia

### LaPlataJS

#### Instalar dependencias:
1. Clone 
2. `cd <este_repo>`
3. `npm install`

#### 1. Ejemplo básico
__Schema + query + data + execution en un solo file__. Ver el fuente: `server/index-basico.js`.
1. Ejecutar: `node server/index-basico.js`. Los resultados por consola.

#### 2. Servidor GraphQL
Arma un servidor para ejecutar queries. La DDBB es un archivo .json en: `/server/database/db.json`.

1. Ejecutar: `npm run start:server`. Este es el server GraphQL.
2. Ir a: `http://localhost:4000/graphql` para ver el GraphiQL y hacer pruebas.


Si se quiere usar otro server REST para probar (no cerrar el server en localhost:4000: 
  1. Ejecutar: `npm run start:json:server`
      Esto levanta otro servidor en el puerto 3000 que hace las veces de REST y __UTILIZA LA MISMA DB .json__.
  2. Modificar los resolvers en `server/lib/gql/schema/query.js` para que levanten los datos del servidor REST anterior.
  3. Ir a: `http://localhost:4000/graphql` para ver el GraphiQL y hacer pruebas.


Probar además un "cliente" que utiliza fetch para ejecutar consultas sobre el servidor (localhost:4000)
1. Ejecutar: `node client/index.js` y ver los resultados en consola.

#### Ejemplos de query:

Vehiculos (inline fragments)
```
{
  vehiculos {
    __typename,
    ... on Bicicleta {
      rodado
    }
    
    ... on Auto {
      combustible
    }
  }
}
```

Parámetros + listado + varios
```
query todas($id: ID!) {
  vehiculos {
    _id
    peso
    marca
    modelo
    anio
    ...on Bicicleta {
      rodado
    }
    ...on Auto {
      combustible
    }
  }
  
  vehiculosUnion {
    __typename
    ...on Bicicleta {
      rodado
    }
  }

  vehiculo(_id: $id) {
    peso(unidad: TONELADA)
  }
}
```
