db = db.getSiblingDB('taxi_unad_t4');
const resultado = ({fechas_date:db.viajes.countDocuments({fecha_inicio:{$type:'date'}}),
sin_origen:db.viajes.aggregate([
{$lookup:{from:'zonas',localField:'zona_origen_id',foreignField:'_id',as:'z'}},
{$match:{z:{$size:0}}},{$count:'cantidad'}]).toArray(),
sin_destino:db.viajes.aggregate([
{$lookup:{from:'zonas',localField:'zona_destino_id',foreignField:'_id',as:'z'}},
{$match:{z:{$size:0}}},{$count:'cantidad'}]).toArray()});
print(EJSON.stringify(resultado,null,2));
