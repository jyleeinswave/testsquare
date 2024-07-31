import { test, expect } from '@playwright/test';

test('SampleRet2', async ({ page }) => {

  await page.goto('https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=&tm2lIdx=&tm3lIdx=');
  
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '신규사업자 이용 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '사업자등록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자신고/납부' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '민원증명' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자세금계산서' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '현금영수증·신용카드' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '지급명세서·과세자료' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '기타' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '시니어(고령자) 이용 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '홈택스 회원가입 및 로그인 방법' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '시니어(고령자)를 위한 추천 메뉴' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '홈택스 이용안내 Q&A' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '장애인 이용 안내' }).click();

});