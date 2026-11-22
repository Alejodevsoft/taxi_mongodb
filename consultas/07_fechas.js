db = db.getSiblingDB('taxi_unad_t4');
const resultado = ({cantidad:db.viajes.countDocuments({fecha_inicio:{
$gte:ISODate('2025-01-01T05:00:00Z'),$lt:ISODate('2025-01-02T05:00:00Z')}}),
primeros:db.viajes.find({fecha_inicio:{$gte:ISODate('2025-01-01T05:00:00Z'),
$lt:ISODate('2025-01-02T05:00:00Z')}},{fecha_inicio:1}).sort({fecha_inicio:1,_id:1}).limit(3).toArray()});
print(EJSON.stringify(resultado,null,2));
