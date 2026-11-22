db = db.getSiblingDB('taxi_unad_t4');
const resultado = db.viajes.aggregate([
{$sort:{_id:1}},{$limit:3},
{$lookup:{from:'zonas',localField:'zona_origen_id',foreignField:'_id',as:'origen'}},
{$lookup:{from:'zonas',localField:'zona_destino_id',foreignField:'_id',as:'destino'}},
{$project:{_id:1,origen:{$arrayElemAt:['$origen.nombre',0]},
destino:{$arrayElemAt:['$destino.nombre',0]},importe_usd:{$divide:['$importe_centavos',100]}}}
]).toArray();
print(EJSON.stringify(resultado,null,2));
