import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
  await page.goto('https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&vatPage=Y');
  await page.getByRole('link', { name: '로그인' }).click();
  //await page.waitForTimeout(2000);
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '아이디 로그인' }).click();
 
  //await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '아이디 로그인' }).click();

  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').fill('gorira5379');
  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').press('Tab');
  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('비밀번호').fill('mangojisu0220!');
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '로그인', exact: true }).click();
});