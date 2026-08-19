# HSPS - GitHub Pages

Versión estática del cuestionario HSPS.

## Publicación
Configura GitHub Pages con:
- Source: Deploy from a branch
- Branch: main
- Folder: / (root)

El archivo principal es `index.html`.

## Funcionamiento
- No requiere Streamlit ni servidor Python.
- Las respuestas se mantienen temporalmente en `sessionStorage`.
- No se almacenan en una base de datos.
- El PDF se genera directamente en el navegador.
- No hay puntuación ni interpretación automática.

Para un repositorio llamado `PSIC`, la URL esperada será:
`https://USUARIO.github.io/PSIC/`
