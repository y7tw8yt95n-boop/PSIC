import { test, expect } from '@playwright/test';

const SCORE_MAP = {
  'Nunca': 1,
  'Rara vez': 2,
  'A veces': 3,
  'Casi siempre': 4,
  'Siempre': 5,
};
const VALUE_TO_RESPONSE = {
  1: 'Nunca', 2: 'Rara vez', 3: 'A veces', 4: 'Casi siempre', 5: 'Siempre'
};

function expectedCategory(total) {
  if (total >= 27 && total <= 54) return 'Baja sensibilidad';
  if (total <= 81) return 'Sensibilidad media';
  if (total <= 108) return 'Alta sensibilidad';
  return 'Muy alta sensibilidad';
}

function responsesForTarget(target) {
  let extra = target - 27;
  const values = Array(27).fill(1);
  for (let i = 0; i < 27 && extra > 0; i++) {
    const add = Math.min(4, extra);
    values[i] += add;
    extra -= add;
  }
  if (extra !== 0) throw new Error(`No se pudo construir ${target}`);
  return values.map(v => VALUE_TO_RESPONSE[v]);
}

async function answerQuestionnaire(page, responses) {
  for (let i = 1; i <= 27; i++) {
    await page.locator(`input[name="q${i}"][value="${responses[i-1]}"]`).check({ force: true });
  }
}

test('la página carga 27 preguntas', async ({ page }) => {
  await page.goto('/');
  await expect(page.locator('fieldset.question')).toHaveCount(27);
});

test('todos los puntajes 27–135 clasifican correctamente', async ({ page }) => {
  await page.goto('/');
  const result = await page.evaluate(() => {
    const failures = [];
    for (let total = 27; total <= 135; total++) {
      let expected;
      if (total <= 54) expected = 'Baja sensibilidad';
      else if (total <= 81) expected = 'Sensibilidad media';
      else if (total <= 108) expected = 'Alta sensibilidad';
      else expected = 'Muy alta sensibilidad';

      const actual = getInterpretation(total).category;
      if (actual !== expected) failures.push({ total, expected, actual });
    }
    return failures;
  });
  expect(result).toEqual([]);
});

for (const total of [27,54,55,81,82,108,109,135]) {
  test(`flujo UI para puntaje ${total}`, async ({ page }) => {
    await page.goto('/');
    const responses = responsesForTarget(total);
    await answerQuestionnaire(page, responses);

    const computed = await page.evaluate(() => {
      const r = [];
      for (let i = 1; i <= 27; i++) {
        const checked = document.querySelector(`input[name="q${i}"]:checked`);
        r.push(checked.value);
      }
      return {
        total: calculateScore(r),
        category: getInterpretation(calculateScore(r)).category,
      };
    });

    expect(computed.total).toBe(total);
    expect(computed.category).toBe(expectedCategory(total));
  });
}

test('no permite generar PDF si falta una respuesta', async ({ page }) => {
  await page.goto('/');
  const responses = Array(26).fill('A veces');
  for (let i = 1; i <= 26; i++) {
    await page.locator(`input[name="q${i}"][value="${responses[i-1]}"]`).check({ force: true });
  }
  await page.locator('#pdfBtn').click();
  await expect(page.locator('#status')).toContainText('Falta responder la pregunta 27');
});

test('genera un Blob PDF válido con cuestionario completo', async ({ page }) => {
  await page.goto('/');
  await answerQuestionnaire(page, Array(27).fill('A veces'));

  const pdfInfo = await page.evaluate(async () => {
    const r = [];
    for (let i = 1; i <= 27; i++) {
      r.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }
    const blob = generatePdfBlob(r);
    return { type: blob.type, size: blob.size };
  });

  expect(pdfInfo.type).toBe('application/pdf');
  expect(pdfInfo.size).toBeGreaterThan(5000);
});
