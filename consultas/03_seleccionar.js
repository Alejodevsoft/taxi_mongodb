db = db.getSiblingDB('taxi_unad_t4');
const resultado = db.viajes.find({_id:'demo_crud_t4'},
{fecha_inicio:1,importe_centavos:1,estado_revision:1}).toArray();
print(EJSON.stringify(resultado,null,2));
