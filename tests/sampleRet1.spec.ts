import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://www.hometax.go.kr/websquare/websquare.wq?w2xPath=/ui/pp/index_pp.xml&tmIdx=&tm2lIdx=&tm3lIdx=');

  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '홈택스 이용안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자(세금)계산서· 현금영수증·신용카드' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '국세증명·사업자등록· 세금관련 신청/신고' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '세금신고' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '납부· 고지·환급' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '지급명세서· 자료제출·공익법인' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '장려금·연말정산· 전자기부금' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '상담·불복·고충· 제보·기타' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').locator('[id="\\38 E26"]').click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '주요 제도 소개' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자세금계산서 제도 자세히보기' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '전자(세금)계산서 발급방법' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '보안카드 발급안내' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '주요 제도 소개' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '현금영수증 제도 자세히보기' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '세금혜택 안내' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '발급의무제도' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '가맹점가입의무' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '가맹점 가입방법' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '사업용 신용카드 안내' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '주요 제도 소개' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '연말정산간소화 제도 자세히보기' }).click();
  await page.getByRole('link', { name: '인터넷 납세서비스 국세청홈택스' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '주요 제도 소개' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '근로장려금 반기신정 제도 자세히보기' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '근로장려금 반기신정 제도 자세히보기' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '부가가치세 대리납부 제도 자세히보기' }).click();
});