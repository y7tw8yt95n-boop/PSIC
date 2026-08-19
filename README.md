# HSPS - Streamlit v2

Cambios principales:
- Añade "Generar PDF con mis respuestas".
- El PDF conserva el formato de dos páginas del cuestionario: logo, título, instrucciones, tabla de 27 reactivos, opciones y marcas X.
- Resultado e Interpretación quedan en blanco para la profesional.
- No hay puntuación ni interpretación automática.
- Las respuestas continúan guardándose solamente en el navegador.
- La creación del PDF usa la función de impresión/PDF del dispositivo: no se suben respuestas a una base de datos.

## Actualizar la app ya publicada
En GitHub, reemplaza `app.py`, `hsps_form.html` y `requirements.txt` por estos archivos.
Streamlit Community Cloud detectará el commit y volverá a desplegar automáticamente.

## iPhone
Al pulsar "Generar PDF con mis respuestas", Safari/iOS abre la interfaz de impresión. Desde la vista previa se puede usar Compartir para guardar o enviar el PDF por WhatsApp.
