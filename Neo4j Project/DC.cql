CREATE (Aquaman:Superheroe {nombre:"Arthur Curry", alterego:"Aquaman", procedencia:"Atlantis"})
CREATE (Batman:Superheroe {nombre:"Bruce Wayne", alterego:"Batman", procedencia:"Gotham city"})
CREATE (CanarioNegro:Superheroe {nombre:"Dinah Laurel Lance", alterego:"Canario negro", procedencia:"Star city"})
CREATE (Catwoman:Superheroe {nombre:"Selina Kyle", alterego:"Catwoman", procedencia:"Gotham city"})
CREATE (Cazadora:Superheroe {nombre:"Helena Wayne", alterego:"Cazadora", procedencia:"Gotham city"})
CREATE (Cyborg:Superheroe {nombre:"Victor Stone", alterego:"Cyborg", procedencia:"Desconocida"})
CREATE (Flash:Superheroe {nombre:"Barry Allen", alterego:"Flash", procedencia:"Central city"})
CREATE (FlechaVerde:Superheroe {nombre:"Oliver Queen", alterego:"Flecha verde", procedencia:"Star city"})
CREATE (LinternaVerde:Superheroe {nombre:"Hal Jordan", alterego:"Linterna verde", procedencia:"Ciudad Costera"})
CREATE (Mera:Superheroe {nombre:"Mera", alterego:"Mera", procedencia:"Atlantis"})
CREATE (Robin:Superheroe {nombre:"Damian Wayne", alterego:"Robin", procedencia:"Gotham city"})
CREATE (Superman:Superheroe {nombre:"Clark Kent", alterego:"Superman", procedencia:"Krypton"})
CREATE (WonderWoman:Superheroe {nombre:"Diana Prince", alterego:"Wonder woman", procedencia:"Temiscira"})

// Creación de las personas
CREATE (IrisWest:Persona {nombre:"Iris West", procedencia:"Central city"})
CREATE (LoisLane:Persona {nombre:"Lois Lane", procedencia:"Metrópolis"})
CREATE (JorEl:Persona {nombre:"Jor-El", procedencia:"Krypton"})

// Creación de los supervillanos
CREATE (Ares:Supervillano {nombre:"Ares", alterego:"Ares", procedencia:"Desconocida"})
CREATE (CaptainBoomerang:Supervillano {nombre:"George Harkness", alterego:"Captain Boomerang", procedencia:"Central city"})
CREATE (Darkseid:Supervillano {nombre:"Darkseid", alterego:"Darkseid", procedencia:"Desconocida"})
CREATE (GorillaGrodd:Supervillano {nombre:"Gorilla Grodd", alterego:"Gorilla Grodd", procedencia:"Central city"})
CREATE (HarleyQuinn:Supervillano {nombre:"Harleen Frances Quinzel", alterego:"Harley Quinn", procedencia:"Gotham city"})
CREATE (Joker:Supervillano {nombre:"Jack Napier", alterego:"Joker", procedencia:"Gotham city"})
CREATE (JuicioFinal:Supervillano {nombre:"Juicio Final", alterego:"Juicio Final", procedencia:"Desconocida"})
CREATE (LexLuthor:Supervillano {nombre:"Lex Luthor", alterego:"Lex Luthor", procedencia:"Metrópolis"})
CREATE (MantaNegra:Supervillano {nombre:"Manta Negra", alterego:"Manta Negra", procedencia:"Desconocida"})
CREATE (Merlyn:Supervillano {nombre:"Malcolm Merlyn", alterego:"Merlyn", procedencia:"Star city"})
CREATE (Parallax:Supervillano {nombre:"Parallax", alterego:"Parallax", procedencia:"Desconocida"})
CREATE (RasalGhul:Supervillano {nombre:"Ra's al Ghul", alterego:"Ra's al Ghul", procedencia:"Desconocida"})
CREATE (ReyTiburon:Supervillano {nombre:"Nanaue", alterego:"Rey tiburón", procedencia:"Hawaii"})
CREATE (Sinestro:Supervillano {nombre:"Sinestro", alterego:"Sinestro", procedencia:"Korugar"})
CREATE (TaliaalGhul:Supervillano {nombre:"Talia al Ghul", alterego:"Talia al Ghul", procedencia:"Desconocida"})
CREATE (ZafiroEstelar:Supervillano {nombre:"Carol Ferris", alterego:"Zafiro Estelar", procedencia:"Ciudad Costera"})

// Creación de los equipos
CREATE (LigaDeLaInjusticia:Equipo {nombre:"Liga de la injusticia"})
CREATE (LigaDeLaJusticia:Equipo {nombre:"Liga de la justicia"})

// Creación de la relación LUCHO_CONTRA
CREATE
(Aquaman)-[:LUCHO_CONTRA]->(MantaNegra),
(Aquaman)-[:LUCHO_CONTRA]->(ReyTiburon),
(Batman)-[:LUCHO_CONTRA]->(Joker),
(Batman)-[:LUCHO_CONTRA]->(HarleyQuinn),
(Batman)-[:LUCHO_CONTRA]->(RasalGhul),
(CanarioNegro)-[:LUCHO_CONTRA]->(Merlyn),
(Flash)-[:LUCHO_CONTRA]->(CaptainBoomerang),
(Flash)-[:LUCHO_CONTRA]->(GorillaGrodd),
(FlechaVerde)-[:LUCHO_CONTRA]->(Merlyn),
(LinternaVerde)-[:LUCHO_CONTRA]->(Sinestro),
(LinternaVerde)-[:LUCHO_CONTRA]->(Parallax),
(LinternaVerde)-[:LUCHO_CONTRA]->(Darkseid),
(Superman)-[:LUCHO_CONTRA]->(JuicioFinal),
(Superman)-[:LUCHO_CONTRA]->(LexLuthor),
(Superman)-[:LUCHO_CONTRA]->(Darkseid),
(WonderWoman)-[:LUCHO_CONTRA]->(Ares),
(WonderWoman)-[:LUCHO_CONTRA]->(Darkseid)

// Creación de la relación RELACION_CON
CREATE
(Aquaman)-[:RELACION_CON {relacion:"casados"}]->(Mera),
(Batman)-[:RELACION_CON {relacion:"novios"}]->(TaliaalGhul),
(Batman)-[:RELACION_CON {relacion:"novios"}]->(Catwoman),
(Flash)-[:RELACION_CON {relacion:"novios"}]->(IrisWest),
(FlechaVerde)-[:RELACION_CON {relacion:"novios"}]->(CanarioNegro),
(Joker)-[:RELACION_CON {relacion:"novios"}]->(HarleyQuinn),
(LinternaVerde)-[:RELACION_CON {relacion:"casados"}]->(ZafiroEstelar),
(Superman)-[:RELACION_CON {relacion:"casados"}]->(LoisLane)

// Creación de la relacion FAMILIAR_DE
CREATE
(Batman)-[:FAMILIAR_DE {relacion:"padre"}]->(Robin),
(Batman)-[:FAMILIAR_DE {relacion:"padre"}]->(Cazadora),
(Catwoman)-[:FAMILIAR_DE {relacion:"madre"}]->(Cazadora),
(RasalGhul)-[:FAMILIAR_DE {relacion:"padre"}]->(TaliaalGhul),
(Superman)-[:FAMILIAR_DE {relacion:"hijo"}]->(JorEl),
(TaliaalGhul)-[:FAMILIAR_DE {relacion:"madre"}]->(Robin)

// Creación de la relacion FORMO_PARTE_DE
CREATE
(Aquaman)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(Batman)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(CanarioNegro)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(Catwoman)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(Cyborg)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(Flash)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(FlechaVerde)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(LinternaVerde)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(Superman)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia),
(WonderWoman)-[:FORMO_PARTE_DE]->(LigaDeLaJusticia)

CREATE
(CaptainBoomerang)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(GorillaGrodd)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(Joker)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(LexLuthor)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(MantaNegra)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(RasalGhul)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(Sinestro)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia),
(TaliaalGhul)-[:FORMO_PARTE_DE]->(LigaDeLaInjusticia)