# CineClub
_Documentación sobre webapp Express con TMDB API._

## Stack:
- HTML
- CSS
- JavaScript
- NodeJS
- Express

### Endpoints para consultar información (GET)
| Endpoint | Descripción |
| ------ | ------ |
| __/movie__ | Obtener información sobre la película de la semana (JSON). |
| __/dailymovie__ | Ver, opinar y votar la película de la semana (Vista). |


# Respuestas

### Status Codes
| Código | Descripción |
| ------ | ------ |
| **200** |Película encontrada. |
| **404** | Error en TMDB API request. |

# Ejemplos
### Producto encontrado (200)
```
Movie {
    original_title: "Mad Max: Fury Road"
    overview: "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order."
    poster_path: "/8tZYtuWezp8JbcsvHYO0O46tFbo.jpg"
    release_date: "2015-05-13"
    revenue: 378858340
    runtime: 121
    ES: { 
        homepage:""
        overview: "Perseguido por su turbulento pasado, Mad Max cree que la mejor forma de sobrevivir   es ir solo por el mundo. Sin embargo, se ve arrastrado a formar parte de un grupo que huye a través del desierto en un War Rig conducido por una Emperatriz de élite: Furiosa. Escapan de una Ciudadela tiranizada por Immortan Joe, a quien han arrebatado algo irreemplazable. Enfurecido, el Señor de la Guerra moviliza a todas sus bandas y persigue implacablemente a los rebeldes en una 'guerra de la carretera' de altas revoluciones."
        region: "ES"
        runtime: 120
        tagline: "El mundo se vuelve loco."
        title: "Mad Max: Furia en la carretera"
        }
}
```
> __Recordatorio:__ La pelicula una vez consultada, se guarda en localStorage y permanece ahí por 1 semana. Después, si es que hay un cambio en la película recomendada y esta es diferente a la que tiene el usuario en su navegador, se manda el request a la API. Caso contrario, la aplicación no realiza ninguna petición. Esto para no superar las 50 requests por segundo de TMDB.


### Referencia
