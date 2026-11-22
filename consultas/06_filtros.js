db = db.getSiblingDB('taxi_unad_t4');
const resultado = db.viajes.find({importe_centavos:{$gte:3000},
duracion_min:{$gte:10,$lte:60},zona_origen_id:{$in:[132,138,236,237]}},
{_id:1,zona_origen_id:1,duracion_min:1,importe_centavos:1})
.sort({importe_centavos:-1,_id:1}).limit(5).toArray();
print(EJSON.stringify(resultado,null,2));
