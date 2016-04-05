var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
var ObjectId = require('mongodb').ObjectID;
var url = 'mongodb://localhost:27017/HouseHightower';
// --------

var request = require("request");
var host = 'neo4j:123456@localhost', port = 7474;

var httpUrlForTransaction = 'http://' + host + ':' + port + '/db/data/transaction/commit';

function runCypherQuery(query, params, callback) {
  request.post({
      uri: httpUrlForTransaction,
      json: {statements: [{statement: query, parameters: params}]}
    },
    function (err, res, body) {
      callback(err, body);
    })
}

var findPersonaje = function(db, callback) {
   var cursor =db.collection('personaje').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'CREATE (somebody:Personaje { nombre: {nombre}, apellido: {apellido}, estado: {estado} ,id: {id} }) RETURN somebody', {
          nombre: doc.nombre,
          apellido: doc.apellido,
          estado: doc.estado,
          id: doc._id
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
         // console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};
var findFamilia = function(db, callback) {
   var cursor =db.collection('familia').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'CREATE (somebody:Familia { nombreFamilia: {nombreFamilia}, id: {id}}) RETURN somebody', {
          nombreFamilia: doc.familia,
          id: doc._id
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          //console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};

var findPersonajeFamilia = function(db, callback) {
   var cursor =db.collection('personaje').aggregate( [
        { $unwind: "$pertenece" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Personaje { id: {id} }), (b:Familia { id: {idFamilia} }) CREATE (a)-[:PERTENECE]->(b)', {
          id: doc._id,
          idFamilia: doc.pertenece
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
         // console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};

var findPadreDe = function(db, callback) {
   var cursor =db.collection('personaje').aggregate( [
        { $unwind: "$padre_de" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Personaje { id: {id2} }), (b:Personaje { id: {id} }) CREATE (a)-[:PADRE_DE{genero:{genero}, rating:{rating} }]->(b)', {
          id2: doc._id,
          id: doc.padre_de._id,
          genero: doc.padre_de.genero,
          rating: Math.random()
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          //console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};

var findHijoDe = function(db, callback) {
   var cursor =db.collection('personaje').aggregate( [
        { $unwind: "$hijo_de" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Personaje { id: {id2} }), (b:Personaje { id: {id} }) CREATE (a)-[:HIJO_DE{rating:{rating}}]->(b)', {
          id2: doc._id,
          id: doc.hijo_de._id,
          rating: Math.random()
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          //console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};


var findEvento = function(db, callback) {
   var cursor =db.collection('evento').find( );
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'CREATE (somebody:Evento { nombreEvento: {nombreEvento},idE: {idE} }) RETURN somebody', {
          nombreEvento: doc.nombre,
          idE: doc._id
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          //console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};

var findParticipoEn = function(db, callback) {
   var cursor =db.collection('personaje').aggregate( [
        { $unwind: "$eventos" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Personaje { id: {id} }), (b:Evento { idE: {idE} }) CREATE (a)-[:PARTICIPO_EN]->(b)', {
          id: doc._id,
          idE: doc.eventos
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
         // console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};

var findMatoA = function(db, callback) {
   var cursor =db.collection('personaje').aggregate( [
        { $unwind: "$mato_a" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Personaje { id: {id} }), (b:Personaje { id: {idMato} }) CREATE (a)-[:MATO_A{rating:{rating}}]->(b)', {
          id: doc._id,
          idMato: doc.mato_a,
          rating: Math.random()
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          //console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};
var findCasadoCon = function(db, callback) {
   var cursor =db.collection('personaje').aggregate( [
        { $unwind: "$casado_con" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Personaje { id: {id} }), (b:Personaje { id: {idCasado} }) CREATE (a)-[:CASADO_CON{rating:{rating}}]->(b)', {
          id: doc._id,
          idCasado: doc.casado_con,
          rating: Math.random()
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
         // console.log(resp);
        }
      }
    );
      } else {
         callback();
      }
   });
};

var findAliadoCon = function(db, callback) {
   var cursor =db.collection('familia').aggregate( [
        { $unwind: "$aliados" }
    ]);
   cursor.each(function(err, doc) {
      assert.equal(err, null);
      if (doc != null) {
        runCypherQuery(
          'MATCH (a:Familia { id: {id} }), (b:Familia { id: {idAliado} }) CREATE (a)-[:ALIADO_CON]->(b)', {
          id: doc._id,
          idAliado: doc.aliados
      }, function (err, resp) {
        if (err) {
          console.log(err);
        } else {
          //console.log(doc._id+" -AliadoCon- "+doc.aliados);
        }
      }
    );
      } else {
         callback();
      }
   });
};

MongoClient.connect(url, function(err, db) {
  assert.equal(null, err);
  /**/
    findPersonaje(db, function() {
    	console.log("[1/10]: La inserción de los nodos Personajes fué exitosa.");
  	});
   	findFamilia(db, function() {
      	console.log("[2/10]: La inserción de los nodos Familia fué exitosa.");
  	});
   	findEvento(db, function() {
    	console.log("[3/10]: La inserción de los nodos Evento fué exitosa.");
  	});
    findPersonajeFamilia(db, function() {
    	console.log("[4/10]: La inserción de las aristas PERTENECE fué exitosa.");
  	});
  	findPadreDe(db, function() {
      	console.log("[5/10]: La inserción de las aristas PADRE_DE fué exitosa.");
  	});
  	findHijoDe(db, function() {
      	console.log("[6/10]: La inserción de las aristas HIJO_DE fué exitosa.");
  	});
   	findParticipoEn(db, function() {
    	console.log("[7/10]: La inserción de las aristas PARTICIPO_EN fué exitosa.");
  	});
    findMatoA(db, function() {
     	console.log("[8/10]: La inserción de las aristas MATO_A fué exitosa.");
  	});
  	findCasadoCon(db, function() {
      	console.log("[9/10]: La inserción de las arista CASADO_CON fué exitosa.");
  	});
  	findAliadoCon(db, function() {
      	console.log("[10/10]: La inserción de las arista ALIADO_CON fué exitosa.");
      	db.close();
        console.log("La Extracción, transformación y carga se realizo con Exito.");
  	});
});


console.log("Si los ETL [1/10]..[10/10] no se ejecutaron en orden. Leer la nota ETL_SECUENCIA.");
