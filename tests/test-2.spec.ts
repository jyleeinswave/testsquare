import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naver.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '뉴스', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('menuitem', { name: 'IT/과학' }).click();
  await page1.getByRole('tab', { name: '세계' }).click();
  await page1.getByRole('tab', { name: '랭킹' }).click();
  await page1.getByRole('link', { name: '신문보기' }).click();
  await page1.getByRole('menuitem', { name: '사회' }).click();
});