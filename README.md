# Tarea 4 - Big Data

Luis Alejandro Barrera Muñoz · Grupo 147 · UNAD

Consultas en MongoDB sobre una muestra de 1.000 viajes de taxis de Nueva York del 1 de enero de 2025 y un catálogo de 265 zonas.

Con Docker Desktop iniciado, ejecutar desde esta carpeta:

```powershell
docker compose up -d
docker compose exec mongo mongosh --quiet --file /trabajo/cargar.js
```

Ejemplo de consulta:

```powershell
docker compose exec mongo mongosh --quiet --file /trabajo/consultas/09_agregacion.js
```

Los archivos están en `consultas`, los datos en `data` y las capturas y resultados en `evidencias`. Para probar CRUD, ejecutar las consultas 02, 03, 04 y 05 en ese orden.

Al terminar:

```powershell
docker compose down
```

Fuente de los datos: [NYC TLC](https://www.nyc.gov/site/tlc/about/tlc-trip-record-data.page).
