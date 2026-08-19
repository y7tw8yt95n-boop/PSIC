# HSPS - Streamlit v2.2

Corrección:
- Las respuestas usan `sessionStorage` en lugar de `localStorage`.
- Se conservan mientras el usuario sigue en la misma pestaña/sesión.
- Al abrir una sesión nueva no deberían reaparecer respuestas antiguas.
- Se añadió “Iniciar cuestionario en blanco” con confirmación.
- Se mantiene únicamente “Generar PDF con mis respuestas”.
- No hay base de datos, puntuación ni interpretación automática.

Para actualizar la app en GitHub, reemplaza `app.py`, `hsps_form.html` y `requirements.txt`, y haz Commit.
