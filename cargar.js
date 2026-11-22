// Ejecutar desde la carpeta taxi_mongodb con mongosh --file cargar.js
const fs = require('fs');
db = db.getSiblingDB('taxi_unad_t4');
const validator = {$jsonSchema:{bsonType:'object',
  required:['_id','fecha_inicio','fecha_fin','zona_origen_id','zona_destino_id',
    'distancia_millas','duracion_min','importe_centavos','moneda','estado_revision'],
  properties:{_id:{bsonType:'string'},fecha_inicio:{bsonType:'date'},fecha_fin:{bsonType:'date'},
    zona_origen_id:{bsonType:['int','double']},zona_destino_id:{bsonType:['int','double']},
    distancia_millas:{bsonType:['int','double'],minimum:0},
    duracion_min:{bsonType:['int','double'],exclusiveMinimum:true,minimum:0},
    importe_centavos:{bsonType:['int','double'],minimum:0,multipleOf:1},
    moneda:{enum:['USD']},estado_revision:{enum:['pendiente','verificado']}}}};
if (!db.getCollectionNames().includes('viajes')) db.createCollection('viajes',{validator});
else db.runCommand({collMod:'viajes',validator,validationLevel:'strict',validationAction:'error'});
const viajes=EJSON.parse(fs.readFileSync('data/viajes.json','utf8'));
const zonas=JSON.parse(fs.readFileSync('data/zonas.json','utf8'));
// Upsert por _id: se puede repetir la carga sin duplicar ni borrar la base.
for (const [name,docs] of [['viajes',viajes],['zonas',zonas]]) {
  db.getCollection(name).bulkWrite(docs.map(d=>({replaceOne:{filter:{_id:d._id},replacement:d,upsert:true}})));
}
db.viajes.createIndex({zona_origen_id:1,fecha_inicio:1},{name:'origen_fecha'});
db.viajes.createIndex({importe_centavos:-1},{name:'importe_desc'});
print(EJSON.stringify({mongodb:db.version(),viajes:db.viajes.countDocuments(),zonas:db.zonas.countDocuments()},null,2));
