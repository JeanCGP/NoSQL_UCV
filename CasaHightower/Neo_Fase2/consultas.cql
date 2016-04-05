/* Consultas */

/* Consulta Extra:  Borrar Todo */

MATCH (n)
OPTIONAL MATCH (n)-[r]-()
DELETE n,r


/* Consulta Extra: Modelo De Dato */

MATCH (a)-[r]->(b)
WHERE labels(a) <> [] AND labels(b) <> []
RETURN DISTINCT head(labels(a)) AS Nodo_A, type(r) as Relacionado, head(labels(b)) AS Nodo_B

/* Consulta Extra: Modelo de Dato. Ver Todo */

MATCH (n)
RETURN n



/* Consulta 1: Cantidad de miembros por cada Familia.*/

MATCH (u:Personaje)-[r:PERTENECE]->(n:Familia) 
RETURN n, count(u)

/* Consulta 2: Cantidad de hombres con dos o más hijos varones por Familia */

MATCH (u:Personaje)-[r:PADRE_DE]->(m:Personaje)
WITH count(m) as CantHijos, u, r.genero as genero
WHERE CantHijos > 1
AND genero="Hombre"
RETURN u, CantHijos

/* Consulta 3: Cuál es el miembro de cada Familia que ha participado en más eventos */

MATCH (p:Personaje)-[r:PARTICIPO_EN]->(e:Evento) 
RETURN p.apellido, count(DISTINCT(e))
ORDER BY count(DISTINCT(e))DESC

/* Si queremos ver el grafo, Esta consulta arroja algo diferente a lo pedido pero nos permite ver el grafo y nos permite verificar esta informacion */

MATCH (p:Personaje)-[r:PARTICIPO_EN]->(e:Evento) 
RETURN p, count(DISTINCT(e))
ORDER BY count(DISTINCT(e))DESC

/* Consulta 4: Cuál es la familia con más facciones aliadas. */

MATCH (f:Familia)-[a:ALIADO_CON]->(n:Familia) 
RETURN f, count(n)
ORDER BY count(n) DESC
LIMIT 1

/* Si quitamos el Limit: Consulta diferente a lo pedido*/

MATCH (f:Familia)-[a:ALIADO_CON]->(n:Familia) 
RETURN f, count(n)
ORDER BY count(n) DESC

/* Consulta 5: Cuál es el miembro (por familia) que ha matado la mayor cantidad de enemigos. */

MATCH (p:Personaje)-[m:MATO_A]->(u:Personaje)
RETURN count(DISTINCT(p.apellido))


/* La consulta anterior es el que me dara el valor del limit */

MATCH (p:Personaje)-[m:MATO_A]->(u:Personaje)
RETURN p.nombre, p.apellido, count(DISTINCT(u))
ORDER BY count(DISTINCT(u)) DESC
LIMIT 3

/* Consulta 6: Cuántas bodas entre miembros de distintas familias ha habido */


MATCH (p:Personaje)-[c:CASADO_CON]->(u:Personaje)
RETURN count(DISTINCT(p.apellido))

/* Si queremos ver la lista de familias que se han casado con un Hightower, basta con ejecutar la
siguiente consulta: */

MATCH (p:Personaje)-[c:CASADO_CON]->(u:Personaje)
RETURN p.apellido, count(DISTINCT(p.apellido))

/* Consulta 7: Cantidad de miembros por familia que han quedado huérfanos de padre. */

MATCH (p:Personaje)-[h:HIJO_DE]->(u:Personaje)
WHERE p.estado="vivo"
AND u.estado="muerto"
return count(DISTINCT(p.nombre)) as Cantidad_Hijos_Huerfanos

/* Consulta 8: Extraída del enunciado del proyecto:
“El señor Baelish necesita determinar qué tan probable es que un miembro de una
familia A mate (o mande a asesinar) a otro B”  */

MATCH (p:Personaje)-[c:CASADO_CON]->(u:Personaje)-[m:MATO_A]->(a:Personaje {nombre: "Owen"})
RETURN p.nombre, SUM(1-(m.rating * c.rating)) AS Probabilidad_Matar_A, a.nombre

/* Para ver EL grafo - Consulta 8 */
MATCH (p:Personaje)-[c:CASADO_CON]->(u:Personaje)-[m:MATO_A]->(a:Personaje {nombre: "Owen"})
RETURN p, SUM(1-(m.rating * c.rating)) AS Probabilidad_Matar_A

/* Consulta 9: Consulta 9: Muestra todas las relaciones que posee el personaje Leyton con los otros
personajes. */

MATCH (p1:Personaje)-[relatedTo]-(p2:Personaje{nombre: "Leyton"}) 
RETURN p1.nombre, Type(relatedTo), relatedTo



