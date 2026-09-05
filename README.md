# HSPS - GitHub Pages v1.2.2

Corrección solicitada:
- El resultado numérico se coloca en la misma línea de RESULTADO.
- La clasificación se coloca en la misma línea de INTERPRETACIÓN.
- Debajo de INTERPRETACIÓN aparece el texto clínico correspondiente.
- No se agregan líneas/subrayados nuevos.
- Se elimina la tercera página de resultados; el PDF vuelve a ser de dos páginas.

Lógica:
- Nunca = 1
- Rara vez = 2
- A veces = 3
- Casi siempre = 4
- Siempre = 5

Rangos:
- 27–54: Baja sensibilidad
- 55–81: Sensibilidad media
- 82–108: Alta sensibilidad
- 109–135: Muy alta sensibilidad

La nota final clínica se muestra debajo del texto de interpretación.


## Pruebas automáticas

### Panel en navegador
Abre:
`https://y7tw8yt95n-boop.github.io/PSIC/tests.html`

Valida automáticamente los 109 puntajes posibles (27–135) y los límites críticos.

### Playwright
Requisitos: Node.js 20+.

```bash
npm install
npx playwright install
npm test
```

Ejecuta pruebas en:
- Chromium escritorio
- WebKit emulando iPhone
- Chromium emulando Android

También se incluye GitHub Actions en `.github/workflows/hsps-tests.yml` para ejecutar pruebas automáticamente en cada push o pull request.
