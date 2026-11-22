db = db.getSiblingDB('taxi_unad_t4');
const resultado = (()=>{const eliminacion=db.viajes.deleteOne({_id:'demo_crud_t4',es_demo:true});
return {eliminacion,restantes_demo:db.viajes.countDocuments({_id:'demo_crud_t4'}),
viajes_originales:db.viajes.countDocuments()};})();
print(EJSON.stringify(resultado,null,2));
