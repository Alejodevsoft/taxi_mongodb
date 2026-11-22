db = db.getSiblingDB('taxi_unad_t4');
const resultado = db.viajes.aggregate([
{$group:{_id:null,viajes:{$sum:1},total_centavos:{$sum:'$importe_centavos'},
promedio_centavos:{$avg:'$importe_centavos'},duracion_promedio_min:{$avg:'$duracion_min'}}},
{$project:{_id:0,viajes:1,total_centavos:1,total_usd:{$divide:['$total_centavos',100]},
promedio_usd:{$round:[{$divide:['$promedio_centavos',100]},2]},
duracion_promedio_min:{$round:['$duracion_promedio_min',2]}}}
]).toArray();
print(EJSON.stringify(resultado,null,2));
