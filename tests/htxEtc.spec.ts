import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=&tm2lIdx=&tm3lIdx=');
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '홈택스 이용안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자(세금)계산서· 현금영수증·신용카드' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '국세증명·사업자등록· 세금관련 신청/신고' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').locator('div').filter({ hasText: /^세금신고$/ }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '납부· 고지·환급' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '지급명세서· 자료제출·공익법인' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '장려금·연말정산· 전자기부금' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '상담·불복·고충· 제보·기타' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '신규사업자 이용 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '사업자등록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자신고/납부' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '민원증명' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자세금계산서' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '현금영수증·신용카드' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '지급명세서·과세자료' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '기타' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '민원실 대기인원 조회' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '강남' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '경기광주' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '고양', exact: true }).click();
});