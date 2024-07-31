import { test, expect } from '@playwright/test';

test('Login and Excel Load', async ({ page }) => {
  await page.goto('https://www.daum.net/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '금융' }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: '국내', exact: true }).click();
  await page1.getByRole('link', { name: '해외' }).click();
  await page1.getByRole('link', { name: '뉴스', exact: true }).click();
  await page1.getByRole('link', { name: '투자정보' }).click();
  await page1.getByRole('link', { name: '종목토론' }).click();
  await page1.getByRole('link', { name: '환율' }).click();
});