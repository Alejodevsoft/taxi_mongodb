db = db.getSiblingDB('taxi_unad_t4');
const resultado = ({viajes:db.viajes.countDocuments(),zonas:db.zonas.countDocuments(),
ejemplo:db.viajes.findOne({_id:'tlc_202501_00001'})});
print(EJSON.stringify(resultado,null,2));
