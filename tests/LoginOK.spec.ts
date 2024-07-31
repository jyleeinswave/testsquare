import { test, expect } from '@playwright/test';

test.describe('loginok', async ({ page }) => {
  await page.goto('https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=&tm2lIdx=&tm3lIdx=');
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '홈택스 로그인' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '아이디 로그인' }).click();
  await page.waitForTimeout(1000);
  //await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').click();
  //await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '공동·금융인증서' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '아이디 로그인' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').click();
  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').fill('gorira5379');
  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('아이디').press('Tab');
  await page.frameLocator('iframe[name="txppIframe"]').getByPlaceholder('비밀번호').fill('mangojisu0220!');

 
  await page.frameLocator('iframe[name="txppIframe"]').locator('#login_tab3').click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '로그인', exact: true }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '홈택스 이용안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자(세금)계산서· 현금영수증·신용카드' }).click();
});