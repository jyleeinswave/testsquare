import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=&tm2lIdx=&tm3lIdx=');
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '/31 양도소득세 예정신고 및 납부' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '/31 간이지급명세서(거주자의 사업소득) 제출기한' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '/31 일용근로소득지급명세서 제출기한' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '/25 2024.1기 부가가치세 확정신고 납부' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자독촉장 서비스 개시 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '목록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '년 전자(세금)계산서 지방청 순회 교육 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '목록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '2', exact: true }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '납부할 국세 ARS전화 조회 서비스 개시' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '목록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '7' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자세금계산서 지연발급에 따른 가산세 면제 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '목록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '8' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '윈도우 XP' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '목록' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '4' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자(세금)계산서 인증서 선택창 관련 프로그램 설치 방법 안내' }).click();
});