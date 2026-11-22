db = db.getSiblingDB('taxi_unad_t4');
const resultado = db.viajes.insertOne({_id:'demo_crud_t4',
fecha_inicio:ISODate('2025-01-01T15:00:00Z'),fecha_fin:ISODate('2025-01-01T15:10:00Z'),
zona_origen_id:236,zona_destino_id:237,distancia_millas:2.5,duracion_min:10,
importe_centavos:2000,moneda:'USD',estado_revision:'pendiente',es_demo:true});
print(EJSON.stringify(resultado,null,2));
