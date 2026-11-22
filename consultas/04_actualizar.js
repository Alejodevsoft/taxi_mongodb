db = db.getSiblingDB('taxi_unad_t4');
const resultado = (()=>{const cambio=db.viajes.updateOne({_id:'demo_crud_t4'},
{$set:{estado_revision:'verificado'}});
return {cambio,documento:db.viajes.findOne({_id:'demo_crud_t4'},
{estado_revision:1,importe_centavos:1})};})();
print(EJSON.stringify(resultado,null,2));
