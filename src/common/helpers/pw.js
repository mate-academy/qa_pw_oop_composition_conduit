import { test, expect } from '@playwright/test';

export async function testStep(title, stepToRun, userId = 0) {
  let stepTitle = title;

  if (userId > 0) {
    stepTitle = `User${userId}: ${title}`;
  }

  return await test.step(stepTitle, stepToRun);
}

export async function reloadUntil(page, fn, options) {
  await expect(async () => {
    await page.reload();
    await fn();
  }).toPass(options);
}

export { expect } from '@playwright/test';
