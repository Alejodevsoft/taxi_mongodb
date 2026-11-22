db = db.getSiblingDB('taxi_unad_t4');
const resultado = (()=>{const e=db.viajes.find({zona_origen_id:236,
fecha_inicio:{$gte:ISODate('2025-01-01T05:00:00Z')}})
.hint('origen_fecha').explain('executionStats');
return {indice_solicitado:'origen_fecha',plan:e.queryPlanner.winningPlan,
devueltos:e.executionStats.nReturned,documentos_examinados:e.executionStats.totalDocsExamined,
claves_examinadas:e.executionStats.totalKeysExamined};})();
print(EJSON.stringify(resultado,null,2));
