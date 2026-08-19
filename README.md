# HSPS – prototipo Streamlit

Prototipo del Cuestionario de Altasensibilidad (HSPS) para compartir por WhatsApp.

## Privacidad y alcance

- No solicita nombre, correo, teléfono, fecha ni identificadores del paciente.
- No calcula puntuaciones.
- No realiza evaluación ni interpretación clínica.
- Las selecciones del cuestionario se manejan en el navegador mediante HTML/JavaScript.
- Al finalizar, se genera un enlace de WhatsApp con las 27 respuestas para que el usuario confirme el envío.
- El código Python de Streamlit no recibe las respuestas del formulario.

## Archivos

- `app.py`: aplicación Streamlit.
- `hsps_form.html`: formulario interactivo, logo provisional, instrucciones, preguntas y envío a WhatsApp.
- `requirements.txt`: dependencia necesaria para el despliegue.

## Publicar en Streamlit Community Cloud

1. Crea un repositorio nuevo en GitHub.
2. Sube estos tres archivos a la raíz del repositorio.
3. En Streamlit Community Cloud, inicia sesión con GitHub.
4. Selecciona **Create app**.
5. Elige el repositorio.
6. En **Main file path**, selecciona `app.py`.
7. Pulsa **Deploy**.
8. Streamlit generará una dirección del tipo `https://...streamlit.app`.

## Prueba recomendada en iPhone

1. Abre la URL publicada directamente en Safari.
2. Responde varias preguntas.
3. Cambia de aplicación y vuelve a Safari.
4. Verifica que las respuestas permanezcan.
5. Completa las 27 preguntas.
6. Pulsa **Enviar respuestas por WhatsApp**.
7. Regresa a Safari y verifica que el formulario siga contestado.

## Próxima mejora

Cuando esté disponible el logo original de la psicóloga, sustituir el logo provisional incrustado en `hsps_form.html`.
