use admin
db.createUser(
  {
    user: "admin",
    pwd: "password",
    roles: [ { role: "userAdminAnyDatabase", db: "admin" } ]
  }
)

//db.auth("admin", "password")

use HouseHightower

db.dropAllUsers( {w: "majority", wtimeout: 5000} )

db.createUser( { "user" : "JefeHightower",
                 "pwd": "welighttheway",
                 "customData" : { personajeId: 5000 },
                 "roles" : [ 
                             { role: "readWrite", db: "HouseHightower" },
              
                             ] })

db.createUser( { "user" : "MiembroHightower",
                 "pwd": "welighttheway",
                 "customData" : { personajeId: 5000 },
                 "roles" : [ 
                             { role: "read", db: "HouseHightower" },
              
                             ] })
db.territorio.drop()
db.familia.drop()
db.evento.drop()
db.personaje.drop()


var insert_territorio = [
{
    "_id" : 1000,
    "reino" : "Kingdom of the Reach",
    "region" : "Reach",
    "continente" : "Westeros",
    "capital" : "Highgarden",
    "castillo" : [ 
        "Bandallon", 
        "Bitterbridge", 
        "Blackcrown", 
        "Brightwater Keep", 
        "Cider Hall", 
        "Goldengrove", 
        "Grassy Vale", 
        "Honeyholt", 
        "Horn Hill", 
        "Old Oak", 
        "Red Lake", 
        "Three Towers", 
        "Sun House", 
        "Uplands"
    ],
    "gobernante" : "House Tyrell",
    "ciudad" : [ 
        {
            "nombre_ciudad" : "Oldtown",
            "poblacion_estimada" : 500000,
            "gobernante" : "House HighTower",
            "religion" : "The Faith of the Seven"
        }
    ]
}
]
db.territorio.insert(insert_territorio)

var insert_familia = [
/* 1 */
{
    "_id" : 2000,
    "familia" : "HighTower",
    "lema" : "Iluminamos el camino",
    "asentamiento" : "EL Faro",
    "fundador" : "Uthor of the High Tower",
    "lealtad_OverLord" : "Casa Tyrell",
    "vasallos" : [ 
        "House Cuy", 
        "House Bulwer", 
        "House Beesbury"
    ],
    "jefe_de_Familia" : [ 
        5000
    ],
    "heredero_a_Jefe" : [ 
        5001
    ],
    "aliados" : [ 
        2015
    ],
    "enemigos" : [ 
        2001, 
        2016, 
        2002
    ]
},
/* 2 */
{
    "_id" : 2015,
    "familia" : "Baratheon of Storm End",
    "lema" : "Nuestra es la furia",
    "asentamiento" : "Bastión de Tormentas",
    "fundador" : "Orys Baratheon",
    "vasallos" : [ 
        "House Caron", 
        "House Dondarrion", 
        "House Selmy", 
        "House Swann", 
        "House Tarth", 
        "House Trant", 
        "House Errol", 
        "House Estermont", 
        "House Musgood", 
        "House Grandison", 
        "House Peasebury", 
        "House Connington", 
        "House Seaworth", 
        "House Wylde"
    ],
    "jefe_de_Familia" : [ 
        5010
    ],
    "heredero_a_Jefe" : [ 
        null
    ]
},
/* 3 */
{
    "_id" : 2016,
    "familia" : "Baratheon of King Landing",
    "fundador" : "Robert I",
    "lealtad_OverLord" : null,
    "vasallos" : [ 
        "House Slynt", 
        "House Rosby", 
        "House Thorne", 
        "House Blount", 
        "House Rykker", 
        "House Gaunt", 
        "House Stokewort"
    ],
    "jefe_de_Familia" : [ 
        5010
    ],
    "heredero_a_Jefe" : [ 
        null
    ]
},
/* 4 */
{
    "_id" : 2002,
    "familia" : "Martell",
    "lema" : "Nunca Doblegado, Nunca Roto",
    "asentamiento" : "Palacio Antiguo de Lanza del Sol",
    "fundador" : "Morgan Martell",
    "lealtad_OverLord" : "House Baratheon of King Landing",
    "vasallos" : [ 
        "House Allyrion", 
        "House Blackmont", 
        "House Dalt", 
        "House Dayne", 
        "House Gargalen", 
        "House Jordayne", 
        "House Qorgyle", 
        "House Manwoody", 
        "House Santagar", 
        "House Uller", 
        "House Yronwood"
    ],
    "jefe_de_Familia" : [ 
        5011
    ]
},
/* 5 */
{
    "_id" : 2001,
    "familia" : "Lannister",
    "lema" : "Oye mi rugido",
    "asentamiento" : "Casterly Rock",
    "fundador" : "Lann the Clever",
    "lealtad_OverLord" : "House Baratheon of King Landing",
    "vasallos" : [ 
        "House Clegane", 
        "House Swyft", 
        "House Crakehall", 
        "House Lefford", 
        "House Marbrand", 
        "House Payne", 
        "House Westerling", 
        "House Reyne"
    ],
    "jefe_de_Familia" : [ 
        5012
    ]
},
/* 6 */
{
    "_id" : 2003,
    "familia" : "Florent",
    "asentamiento" : "Exiliado"
},
/* 7 */
{
    "_id" : 2004,
    "familia" : "Rowan",
    "asentamiento" : "Castillo Sotodeoro",
    "lealtad_OverLord" : "House Tyrell"
},
/* 8 */
{
    "_id" : 2005,
    "familia" : "Redwyne",
    "asentamiento" : "El Rejo",
    "fundador" : "Gilbert de las Vides",
    "lealtad_OverLord" : "House Tyrell"
},
/* 9 */
{
    "_id" : 2006,
    "familia" : "Cupps"
},
/* 10 */
{
    "_id" : 2007,
    "familia" : "Ambrose",
    "lema" : "Nunca descansar",
    "lealtad_OverLord" : "House Tyrell"
},
/* 11 */
{
    "_id" : 2008,
    "familia" : "Mormont",
    "lema" : "Aquí Aguantamos",
    "asentamiento" : "Bear Islam",
    "lealtad_OverLord" : "House Stark"
},
/* 12 */
{
    "_id" : 2009,
    "familia" : "Fossoway",
    "lealtad_OverLord" : "House Tyrell"
},
/* 13 */
{
    "_id" : 2010,
    "familia" : "Tyrell",
    "lema" : "Crecer Fuerte",
    "asentamiento" : "Highgarden",
    "fundador" : "Alester Tyrell",
    "vasallos" : [ 
        "House Tarly", 
        "House Hightower", 
        "House Florent", 
        "House Fossoway", 
        "House Redwyne", 
        "House Oakheart"
    ],
    "jefe_de_Familia" : [ 
        5000
    ],
    "heredero_a_Jefe" : [ 
        5001
    ],
    "aliados" : [ 
        2015, 
        2003, 
        2009, 
        2005
    ],
    "enemigos" : [ 
        2001, 
        2016, 
        2002
    ]
},
/* 14 */
{
    "_id" : 2011,
    "familia" : "Targaryen",
    "lema" : "Fuego y Sangre",
    "asentamiento" : "Un dragon tricefalo de gules"
},
/* 15 */
{
    "_id" : 2012,
    "familia" : "Gardener"
},
/* 16 */
{
    "_id" : 2666,
    "familia" : "Night Watch"
},
/* 17 */
{
    "_id" : 2013,
    "familia" : "Beesbury"
},
/* 18 */
{
    "_id" : 2014,
    "familia" : "Lydden"
},
/* 19 */
{
    "_id" : 2017,
    "familia" : "Buckler"
},
/* 20 */
{
    "_id" : 2018,
    "familia" : "Cordwayner"
},
/* 21 */
{
    "_id" : 2019,
    "familia" : "Caswell"
},
/* 22 */
{
    "_id" : 2020,
    "familia" : "Staedmon"
},
/* 23 */
{
    "_id" : 2021,
    "familia" : "Brax"
},
/* 24 */
{
    "_id" : 2022,
    "familia" : "Darry"
},
/* 25 */
{
    "_id" : 2023,
    "familia" : "Reyne"
},
/* 26 */
{
    "_id" : 2024,
    "familia" : "Connington"
}]
db.familia.insert(insert_familia)

var insert_evento = [
{
    "_id" : 101,
    "nombre" : "Juego de tronos"
}
,
/* 2 */
{
    "_id" : 102,
    "nombre" : "Choque de Reyes"
}
,
/* 3 */
{
    "_id" : 103,
    "nombre" : "Tormenta de Espadas"
}
,
/* 4 */
{
    "_id" : 104,
    "nombre" : "Festin de Cuervos"
}
,
/* 5 */
{
    "_id" : 105,
    "nombre" : "Danza de Dragones"
}
]
db.evento.insert(insert_evento)

var insert_personaje = [
/* 1 */
{
    "_id" : 5000,
    "nombre" : "Leyton",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord of the Hightower", 
        "Lord of the Port", 
        "Voice of Oldtown", 
        "Defender of the Citadel", 
        "Beacon of the South"
    ],
    "pertenece" : [ 
        2000
    ],
    "apodo" : "Old Man of Oldtown",
    "padre_de" : [ 
        {
            "_id" : 5031,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5032,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5033,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5034,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5035,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5036,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5037,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5038,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5039,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5040,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5030
    ],
    "eventos" : [ 
        102, 
        104
    ],
    "mato_a" : [ 
        5085
    ],
    "estado" : "vivo"
},
/* 2 */
{
    "_id" : 5030,
    "nombre" : "Rhea",
    "apellido" : "Florent",
    "pertenece" : [ 
        2000, 
        2003
    ],
    "madre_de" : [ 
        {
            "_id" : 5031,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5032,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5033,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5034,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5035,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5036,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5037,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5038,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5039,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5040,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5000
    ],
    "estado" : "vivo"
},
/* 3 */
{
    "_id" : 5031,
    "nombre" : "Baelor",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Heredero de Antigua", 
        "Ser"
    ],
    "pertenece" : [ 
        2000
    ],
    "apodo" : [ 
        "Baelor Brightsmile", 
        "Baelor Breakwind"
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "casado_con" : [ 
        5042
    ],
    "eventos" : [ 
        104
    ],
    "estado" : "vivo"
},
/* 4 */
{
    "_id" : 5042,
    "nombre" : "Rhonda",
    "apellido" : "Rowan",
    "pertenece" : [ 
        2000, 
        2004
    ],
    "casado_con" : [ 
        5031
    ],
    "estado" : "vivo"
},
/* 5 */
{
    "_id" : 5032,
    "nombre" : "Malora",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5030,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 6 */
{
    "_id" : 5034,
    "nombre" : "Garth",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "eventos" : [ 
        104
    ],
    "estado" : "vivo"
},
/* 7 */
{
    "_id" : 5035,
    "nombre" : "Denyse",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000, 
        2005
    ],
    "padre_de" : [ 
        {
            "_id" : 5043,
            "genero" : "Mujer"
        }
    ],
    "casado_con" : [ 
        5044
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 8 */
{
    "_id" : 5043,
    "nombre" : "Denys",
    "apellido" : "Redwyne",
    "pertenece" : [ 
        2005
    ],
    "hijo_de" : [ 
        {
            "_id" : 5044,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5035,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 9 */
{
    "_id" : 5044,
    "nombre" : "Desmond",
    "apellido" : "Redwyne",
    "pertenece" : [ 
        2005
    ],
    "padre_de" : [ 
        {
            "_id" : 5043,
            "genero" : "Mujer"
        }
    ],
    "casado_con" : [ 
        5035
    ],
    "estado" : "vivo"
},
/* 10 */
{
    "_id" : 5036,
    "nombre" : "Leyla",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000, 
        2006
    ],
    "casado_con" : [ 
        5045
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 11 */
{
    "_id" : 5037,
    "nombre" : "Alysanne",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000, 
        2007
    ],
    "madre_de" : [ 
        {
            "_id" : 5046,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5047
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 12 */
{
    "_id" : 5038,
    "nombre" : "Lynesse",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000, 
        2008
    ],
    "casado_con" : [ 
        5048
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "eventos" : [ 
        104
    ],
    "estado" : "vivo"
},
/* 13 */
{
    "_id" : 5039,
    "nombre" : "Gunthor",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "casado_con" : [ 
        5049
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "eventos" : [ 
        104
    ],
    "estado" : "vivo"
},
/* 14 */
{
    "_id" : 5040,
    "nombre" : "Humfrey",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "eventos" : [ 
        104
    ],
    "estado" : "vivo"
},
/* 15 */
{
    "_id" : 5045,
    "nombre" : "Jon",
    "apellido" : "Cupps",
    "pertenece" : [ 
        2006
    ],
    "casado_con" : [ 
        5036
    ],
    "estado" : "vivo"
},
/* 16 */
{
    "_id" : 5046,
    "nombre" : "Alyn",
    "apellido" : "Ambrose",
    "pertenece" : [ 
        2007
    ],
    "hijo_de" : [ 
        {
            "_id" : 5047,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5037,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "eventos" : [ 
        102, 
        103, 
        104
    ],
    "estado" : "vivo"
},
/* 17 */
{
    "_id" : 5047,
    "nombre" : "Arthur",
    "apellido" : "Ambrose",
    "pertenece" : [ 
        2007
    ],
    "padre_de" : [ 
        {
            "_id" : 5046,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5037
    ],
    "estado" : "vivo"
},
/* 18 */
{
    "_id" : 5048,
    "nombre" : "Jorah",
    "apellido" : "Mormon",
    "pertenece" : [ 
        2008
    ],
    "titulos" : [ 
        "Ser", 
        "Lor of Bear Island", 
        "Lord Commander of the Queen Guardian"
    ],
    "casado_con" : [ 
        5038
    ],
    "eventos" : [ 
        101, 
        102, 
        103, 
        104, 
        105
    ],
    "mato_a" : [ 
        5083, 
        5084
    ],
    "estado" : "vivo"
},
/* 19 */
{
    "_id" : 5049,
    "nombre" : "Jeyne",
    "apellido" : "Fossoway",
    "pertenece" : [ 
        2009
    ],
    "casado_con" : [ 
        5039
    ],
    "estado" : "vivo"
},
/* 20 */
{
    "_id" : 5033,
    "nombre" : "Alerie",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000, 
        2010
    ],
    "titulo" : "Lady of Highgarden",
    "madre_de" : [ 
        {
            "_id" : 5051,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5052,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5053,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5055,
            "genero" : "Mujer"
        }
    ],
    "casado_con" : [ 
        5056
    ],
    "hijo_de" : [ 
        {
            "_id" : 5000,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5032,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 21 */
{
    "_id" : 5056,
    "nombre" : "Mace",
    "apellido" : "Tyrell",
    "pertenece" : [ 
        2010
    ],
    "titulo" : "Lady of Highgarden",
    "padre_de" : [ 
        {
            "_id" : 5051,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5052,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5053,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5055,
            "genero" : "Mujer"
        }
    ],
    "casado_con" : [ 
        5033
    ],
    "mato_a" : [ 
        5079, 
        5080, 
        5081, 
        5082
    ],
    "estado" : "vivo"
},
/* 22 */
{
    "_id" : 5051,
    "nombre" : "Willas",
    "apellido" : "Tyrell",
    "pertenece" : [ 
        2010
    ],
    "titulo" : "Heredero de Highgarden",
    "hijo_de" : [ 
        {
            "_id" : 5056,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5033,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "estado" : "vivo"
},
/* 23 */
{
    "_id" : 5052,
    "nombre" : "Garlan",
    "apellido" : "Tyrell",
    "pertenece" : [ 
        2010
    ],
    "titulo" : "Lord of Brightwater Keep",
    "hijo_de" : [ 
        {
            "_id" : 5056,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5033,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "casado_con" : [ 
        5053
    ],
    "estado" : "vivo"
},
/* 24 */
{
    "_id" : 5053,
    "nombre" : "Leonette",
    "apellido" : "Fossoway",
    "pertenece" : [ 
        2010
    ],
    "casado_con" : [ 
        5052
    ],
    "estado" : "vivo"
},
/* 25 */
{
    "_id" : 5055,
    "nombre" : "Margaery",
    "apellido" : "Tyrell",
    "pertenece" : [ 
        2010, 
        2015, 
        2016
    ],
    "apodo" : [ 
        "The Little Queen", 
        "The Little Rose", 
        "Maid MArgaery"
    ],
    "titulo" : "Queen of the Seven Kingdoms",
    "hijo_de" : [ 
        {
            "_id" : 5056,
            "parentesco" : "Padre",
            "estado" : "vivo"
        }, 
        {
            "_id" : 5033,
            "parentesco" : "Madre",
            "estado" : "vivo"
        }
    ],
    "casada_con" : [ 
        5061, 
        5062, 
        5063
    ],
    "estado" : "vivo"
},
/* 26 */
{
    "_id" : 5061,
    "nombre" : "Renly",
    "apellido" : "Baratheon",
    "pertenece" : [ 
        2015
    ],
    "titulo" : "King of Highgarden",
    "casada_con" : [ 
        5055
    ],
    "estado" : "muerto"
},
/* 27 */
{
    "_id" : 5062,
    "nombre" : "Joffrey",
    "apellido" : "Baratheon",
    "pertenece" : [ 
        2016
    ],
    "titulo" : "King of the Seven Kingdoms",
    "casada_con" : [ 
        5055
    ],
    "estado" : "muerto"
},
/* 28 */
{
    "_id" : 5063,
    "nombre" : "Tommen",
    "apellido" : "Baratheon",
    "pertenece" : [ 
        2016
    ],
    "titulo" : "King of the Seven Kingdoms",
    "casada_con" : [ 
        5055
    ],
    "estado" : "vivo"
},
/* 29 */
{
    "_id" : 5065,
    "nombre" : "Lyonel",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5067,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5066
    ],
    "estado" : "muerto"
},
/* 30 */
{
    "_id" : 5066,
    "nombre" : "Amanda",
    "apellido" : "Caron",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5067,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5065
    ],
    "estado" : "muerto"
},
/* 31 */
{
    "_id" : 5067,
    "nombre" : "Myles",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5065,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5066,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "vivo"
},
/* 32 */
{
    "_id" : 5071,
    "nombre" : "Willam",
    "apellido" : "Dustin",
    "estado" : "muerto"
},
/* 33 */
{
    "_id" : 5072,
    "nombre" : "Glover",
    "apellido" : "Fossaway",
    "estado" : "muerto"
},
/* 34 */
{
    "_id" : 5073,
    "nombre" : "Martyn",
    "apellido" : "Cassel",
    "estado" : "muerto"
},
/* 35 */
{
    "_id" : 5074,
    "nombre" : "Willas",
    "apellido" : "Cassel",
    "estado" : "muerto"
},
/* 36 */
{
    "_id" : 5075,
    "nombre" : "Theo",
    "apellido" : "Wull",
    "estado" : "muerto"
},
/* 37 */
{
    "_id" : 5076,
    "nombre" : "Mark",
    "apellido" : "Ryswell",
    "estado" : "muerto"
},
/* 38 */
{
    "_id" : 5083,
    "nombre" : "Desconocido",
    "apellido" : "Desconocido",
    "apodo" : "Mercader de Vino",
    "estado" : "muerto"
},
/* 39 */
{
    "_id" : 5077,
    "nombre" : "Arthur",
    "apellido" : "Dayne",
    "estado" : "muerto"
},
/* 40 */
{
    "_id" : 5078,
    "nombre" : "Oswell",
    "apellido" : "Fossaway",
    "estado" : "muerto"
},
/* 41 */
{
    "_id" : 5079,
    "nombre" : "Marq",
    "apellido" : "Ambrose",
    "estado" : "muerto"
},
/* 42 */
{
    "_id" : 5080,
    "nombre" : "Owen",
    "apellido" : "Fossaway",
    "estado" : "muerto"
},
/* 43 */
{
    "_id" : 5081,
    "nombre" : "Richard",
    "apellido" : "Rodden",
    "estado" : "muerto"
},
/* 44 */
{
    "_id" : 5082,
    "nombre" : "Khal",
    "apellido" : "Drogo",
    "estado" : "muerto"
},
/* 45 */
{
    "_id" : 5064,
    "nombre" : "Gerold",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord Comandante de la Guardia Real"
    ],
    "pertenece" : [ 
        2000
    ],
    "apodo" : "El Toro Blanco",
    "mato_a" : [ 
        5071, 
        5072, 
        5073, 
        5074, 
        5075, 
        5076, 
        5077, 
        5078
    ],
    "estado" : "muerto"
},
/* 46 */
{
    "_id" : 5085,
    "nombre" : "Guyard",
    "apellido" : "Morrigen",
    "estado" : "muerto"
},
/* 47 */
{
    "_id" : 5084,
    "nombre" : "Desconocido",
    "apellido" : "Desconocido",
    "apodo" : "Gladeador",
    "estado" : "muerto"
},
/* 48 */
{
    "_id" : 5101,
    "nombre" : "Garth Manoverde",
    "apellido" : "Gardener",
    "titulos" : [ 
        "King of Gardener "
    ],
    "pertenece" : [ 
        2012
    ],
    "padre_de" : [ 
        {
            "_id" : 5102,
            "genero" : "Mujer"
        }
    ],
    "estado" : "muerto"
},
/* 49 */
{
    "_id" : 5102,
    "nombre" : "Maris",
    "apellido" : "Gardener",
    "pertenece" : [ 
        2012
    ],
    "hijo_de" : [ 
        {
            "_id" : 5101,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5103
    ],
    "estado" : "muerto"
},
/* 50 */
{
    "_id" : 5103,
    "nombre" : "Uthor",
    "apellido" : "Hightower",
    "titulos" : [ 
        "King of the Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "casado_con" : [ 
        5102
    ],
    "estado" : "muerto"
},
/* 51 */
{
    "_id" : 5105,
    "nombre" : "Garth El Grande",
    "apellido" : "Gardener",
    "apodo" : "El Grande",
    "titulos" : [ 
        "King of the Gardener"
    ],
    "pertenece" : [ 
        2012
    ],
    "padre_de" : [ 
        {
            "_id" : 5106,
            "genero" : "Mujer"
        }
    ],
    "casado_con" : [ 
        5109
    ],
    "estado" : "muerto"
},
/* 52 */
{
    "_id" : 5106,
    "nombre" : "Hija1 (nombre desconocido)",
    "apellido" : "Gardener",
    "titulos" : [ 
        "Daughter of King"
    ],
    "pertenece" : [ 
        2012
    ],
    "padre_de" : [ 
        {
            "_id" : 5109,
            "genero" : "Mujer"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5105,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5104
    ],
    "estado" : "muerto"
},
/* 53 */
{
    "_id" : 5104,
    "nombre" : "Lymond",
    "apellido" : "Hightower",
    "apodo" : "El leon Marino",
    "titulos" : [ 
        "Lord of Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5109,
            "genero" : "Mujer"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5107,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5106
    ],
    "estado" : "muerto"
},
/* 54 */
{
    "_id" : 5107,
    "nombre" : "Runcel",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord Commander of the Night Watch"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5104,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5108,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 55 */
{
    "_id" : 5108,
    "nombre" : "Flores",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Night Watch"
    ],
    "pertenece" : [ 
        2666
    ],
    "hijo_de" : [ 
        {
            "_id" : 5107,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 56 */
{
    "_id" : 5109,
    "nombre" : "Hija2 (nombre desconocido)",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "casado_con" : [ 
        5105
    ],
    "estado" : "muerto"
},
/* 57 */
{
    "_id" : 5110,
    "nombre" : "Quenton",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5111,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5112,
            "genero" : "Hombre"
        }
    ],
    "estado" : "muerto"
},
/* 58 */
{
    "_id" : 5111,
    "nombre" : "Hijo (nombre desconocido)",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Son of the King"
    ],
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5110,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 59 */
{
    "_id" : 5112,
    "nombre" : "Banfred",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5113,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5114,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5110,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 60 */
{
    "_id" : 5113,
    "nombre" : "Ormund",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord of the Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5118,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5117,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5112,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 61 */
{
    "_id" : 5114,
    "nombre" : "Hijo (nombre desconocido)",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5115,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5116,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5112,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 62 */
{
    "_id" : 5115,
    "nombre" : "Hobert",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5114,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 63 */
{
    "_id" : 5116,
    "nombre" : "Bryndon",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5114,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 64 */
{
    "_id" : 5117,
    "nombre" : "Manfred",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5122,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5123,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5121,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5113,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 65 */
{
    "_id" : 5118,
    "nombre" : "Martyn",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord of the Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5119,
            "genero" : "Mujer"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5113,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 66 */
{
    "_id" : 5119,
    "nombre" : "Ceryse",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5118,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5120
    ],
    "estado" : "muerto"
},
/* 67 */
{
    "_id" : 5120,
    "nombre" : "Maegor",
    "apellido" : "Targaryen",
    "titulos" : [ 
        "King"
    ],
    "pertenece" : [ 
        2011
    ],
    "casado_con" : [ 
        5119
    ],
    "estado" : "muerto"
},
/* 68 */
{
    "_id" : 5121,
    "nombre" : "Hijo (nombre desconocido)",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord of the Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5117,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 69 */
{
    "_id" : 5122,
    "nombre" : "Hija0 (nombre desconocido)",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5117,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 70 */
{
    "_id" : 5123,
    "nombre" : "Otto",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Ser of Hightower"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5124,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5126,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5117,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 71 */
{
    "_id" : 5124,
    "nombre" : "Alicent",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5127,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5123,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5125
    ],
    "estado" : "muerto"
},
/* 72 */
{
    "_id" : 5125,
    "nombre" : "Viserys I",
    "apellido" : "Targaryen",
    "pertenece" : [ 
        2000, 
        2011
    ],
    "padre_de" : [ 
        {
            "_id" : 5127,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5124
    ],
    "estado" : "muerto"
},
/* 73 */
{
    "_id" : 5126,
    "nombre" : "Gwayne",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5123,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 74 */
{
    "_id" : 5127,
    "nombre" : "Aegon",
    "apellido" : "Targaryen",
    "pertenece" : [ 
        2000,
        2011
    ],
    "hijo_de" : [ 
        {
            "_id" : 5124,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5125,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 75 */
{
    "_id" : 5128,
    "nombre" : "Jon",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5131,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5130,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5129,
            "genero" : "Hombre"
        }
    ],
    "estado" : "muerto"
},
/* 76 */
{
    "_id" : 5129,
    "nombre" : "Abelar",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord"
    ],
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5135,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5137,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5142,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5065,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5139,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5141,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5128,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 77 */
{
    "_id" : 5130,
    "nombre" : "Gerold",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord"
    ],
    "apodo" : [ 
        "El Toro Blanco"
    ],
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5128,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 78 */
{
    "_id" : 5131,
    "nombre" : "Lynett",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5128,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5132
    ],
    "estado" : "muerto"
},
/* 79 */
{
    "_id" : 5132,
    "nombre" : "Alan",
    "apellido" : "Beesbury",
    "pertenece" : [ 
        2013,
        2000
    ],
    "casado_con" : [ 
        5131
    ],
    "estado" : "muerto"
},
/* 80 */
{
    "_id" : 5135,
    "nombre" : "Arana",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5129,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5136
    ],
    "estado" : "muerto"
},
/* 81 */
{
    "_id" : 5136,
    "nombre" : "Cyril",
    "apellido" : "Lydden",
    "titulos" : [ 
        "Lydden"
    ],
    "pertenece" : [ 
        2014
    ],
    "casado_con" : [ 
        5135
    ],
    "estado" : "muerto"
},
/* 82 */
{
    "_id" : 5137,
    "nombre" : "Lynesse",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5129,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5138
    ],
    "estado" : "muerto"
},
/* 83 */
{
    "_id" : 5138,
    "nombre" : "Regenard",
    "apellido" : "Buckler",
    "pertenece" : [ 
        2017
    ],
    "casado_con" : [ 
        5137
    ],
    "estado" : "muerto"
},
/* 84 */
{
    "_id" : 5139,
    "nombre" : "Martyn",
    "apellido" : "Hightower",
    "titulos" : [ 
        "Lord"
    ],
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5129,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5140
    ],
    "estado" : "muerto"
},
/* 85 */
{
    "_id" : 5140,
    "nombre" : "Maylenna",
    "apellido" : "Cordwayner",
    "pertenece" : [ 
        2018
    ],
    "casado_con" : [ 
        5139
    ],
    "estado" : "muerto"
},
/* 86 */
{
    "_id" : 5141,
    "nombre" : "Stafford",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5146,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5147,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5148,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5144,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5129,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 87 */
{
    "_id" : 5142,
    "nombre" : "Bethany",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5151,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5152,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5156,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5157,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5150,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5155,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5156,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5129,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5143
    ],
    "estado" : "muerto"
},
/* 88 */
{
    "_id" : 5143,
    "nombre" : "Masson",
    "apellido" : "Caswell",
    "pertenece" : [ 
        2019
    ],
    "padre_de" : [ 
        {
            "_id" : 5151,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5152,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5156,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5157,
            "genero" : "Mujer"
        }, 
        {
            "_id" : 5150,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5155,
            "genero" : "Hombre"
        }, 
        {
            "_id" : 5156,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5142
    ],
    "estado" : "muerto"
},
/* 89 */
{
    "_id" : 5144,
    "nombre" : "Raymon",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5141,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5145
    ],
    "estado" : "muerto"
},
/* 90 */
{
    "_id" : 5145,
    "nombre" : "Berena",
    "apellido" : "Staedmon",
    "pertenece" : [ 
        20020
    ],
    "casado_con" : [ 
        5144
    ],
    "estado" : "muerto"
},
/* 91 */
{
    "_id" : 5146,
    "nombre" : "Desmera",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5141,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 92 */
{
    "_id" : 5147,
    "nombre" : "Harlen",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5141,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 93 */
{
    "_id" : 5148,
    "nombre" : "Carellen",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5141,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 94 */
{
    "_id" : 5149,
    "nombre" : "Edric",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5141,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 95 */
{
    "_id" : 5150,
    "nombre" : "Joffrey",
    "apellido" : "Caswell",
    "titulos" : [ 
        "King"
    ],
    "pertenece" : [ 
        2019
    ],
    "hijo_de" : [ 
        {
            "_id" : 5143,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5142,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 96 */
{
    "_id" : 5151,
    "nombre" : "Nella",
    "apellido" : "Caswell",
    "pertenece" : [ 
        2019
    ],
    "hijo_de" : [ 
        {
            "_id" : 5143,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5142,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 97 */
{
    "_id" : 5152,
    "nombre" : "Mellei",
    "apellido" : "Caswell",
    "pertenece" : [ 
        2019
    ],
    "padre_de" : [ 
        {
            "_id" : 5154,
            "genero" : "Hombre"
        }
    ],
    "hijo_de" : [ 
        {
            "_id" : 5143,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5142,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "casado_con" : [ 
        5153
    ],
    "estado" : "muerto"
},
/* 98 */
{
    "_id" : 5153,
    "nombre" : "Alan",
    "apellido" : "Brax",
    "pertenece" : [ 
        2021
    ],
    "padre_de" : [ 
        {
            "_id" : 5154,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5152
    ],
    "estado" : "muerto"
},
/* 99 */
{
    "_id" : 5154,
    "nombre" : "Armund",
    "apellido" : "Brax",
    "pertenece" : [ 
        2000, 
        2021
    ],
    "hijo_de" : [ 
        {
            "_id" : 5153,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5152,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 100 */
{
    "_id" : 5155,
    "nombre" : "Samwell",
    "apellido" : "Caswell",
    "pertenece" : [ 
        2019
    ],
    "hijo_de" : [ 
        {
            "_id" : 5143,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5142,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 101 */
{
    "_id" : 5156,
    "nombre" : "Elorra",
    "apellido" : "Caswell",
    "pertenece" : [ 
        2019
    ],
    "hijo_de" : [ 
        {
            "_id" : 5143,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5142,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 102 */
{
    "_id" : 5157,
    "nombre" : "Josella",
    "apellido" : "Caswell",
    "pertenece" : [ 
        2019, 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5143,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5142,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
},
/* 103 */
{
    "_id" : 5160,
    "nombre" : "Bradwell",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "estado" : "muerto"
},
/* 104 */
{
    "_id" : 5161,
    "nombre" : "Beryl",
    "apellido" : "Darry",
    "pertenece" : [ 
        2022
    ],
    "padre_de" : [ 
        {
            "_id" : 5163,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5162
    ],
    "estado" : "muerto"
},
/* 105 */
{
    "_id" : 5162,
    "nombre" : "Perwyn",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "padre_de" : [ 
        {
            "_id" : 5163,
            "genero" : "Hombre"
        }
    ],
    "casado_con" : [ 
        5161
    ],
    "estado" : "muerto"
},
/* 106 */
{
    "_id" : 5164,
    "nombre" : "Lia",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "casado_con" : [ 
        5165
    ],
    "estado" : "muerto"
},
/* 107 */
{
    "_id" : 5165,
    "nombre" : "Victor",
    "apellido" : "Reyne",
    "pertenece" : [ 
        2023
    ],
    "casado_con" : [ 
        5164
    ],
    "estado" : "muerto"
},
/* 108 */
{
    "_id" : 5166,
    "nombre" : "Myles",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "estado" : "muerto"
},
/* 109 */
{
    "_id" : 5167,
    "nombre" : "Lyrissa",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "casado_con" : [ 
        5168
    ],
    "estado" : "muerto"
},
/* 110 */
{
    "_id" : 5168,
    "nombre" : "Sarmion",
    "apellido" : "Baratheon",
    "pertenece" : [ 
        2015
    ],
    "casado_con" : [ 
        5167
    ],
    "estado" : "muerto"
},
/* 111 */
{
    "_id" : 5169,
    "nombre" : "Melorra",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "casado_con" : [ 
        5170
    ],
    "estado" : "muerto"
},
/* 112 */
{
    "_id" : 5170,
    "nombre" : "Gallard",
    "apellido" : "Connington",
    "pertenece" : [ 
        2024
    ],
    "casado_con" : [ 
        5169
    ],
    "estado" : "muerto"
},
/* 113 */
{
    "_id" : 5172,
    "nombre" : "Cerenna",
    "apellido" : "Hightower",
    "pertenece" : [ 
        2000
    ],
    "hijo_de" : [ 
        {
            "_id" : 5165,
            "parentesco" : "Padre",
            "estado" : "muerto"
        }, 
        {
            "_id" : 5134,
            "parentesco" : "Madre",
            "estado" : "muerto"
        }
    ],
    "estado" : "muerto"
}
]
db.personaje.insert(insert_personaje)
