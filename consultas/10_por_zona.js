db = db.getSiblingDB('taxi_unad_t4');
const resultado = db.viajes.aggregate([
{$group:{_id:'$zona_origen_id',viajes:{$sum:1},total_centavos:{$sum:'$importe_centavos'},
promedio_centavos:{$avg:'$importe_centavos'}}},
{$sort:{viajes:-1,_id:1}},{$limit:5},
{$lookup:{from:'zonas',localField:'_id',foreignField:'_id',as:'zona'}},
{$project:{_id:0,zona_id:'$_id',zona:{$arrayElemAt:['$zona.nombre',0]},viajes:1,
total_usd:{$divide:['$total_centavos',100]},
promedio_usd:{$round:[{$divide:['$promedio_centavos',100]},2]}}}
]).toArray();
print(EJSON.stringify(resultado,null,2));
