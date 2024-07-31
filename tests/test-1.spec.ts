import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.naver.com/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '뉴스', exact: true }).click();
  const page1 = await page1Promise;
  await page1.getByRole('link', { name: '세탁은 안하고..20' }).click();
  await page1.getByRole('tab', { name: 'IT 신규' }).click();
  await page1.getByRole('link', { name: '한국로봇산업협회 부회장에 박철완 서정대 교수 업데이트 13시간전' }).click();
  const page2Promise = page1.waitForEvent('popup');
  await page1.getByRole('link', { name: '"난 고등학교 때 \'젖소부인\', 교복 치마가.." 방송인 화제' }).click();
  const page2 = await page2Promise;
  await page2.getByRole('link', { name: '부동산', exact: true }).click();
});