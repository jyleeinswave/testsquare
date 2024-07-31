import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/pp/index_pp.xml&vatPage=Y');
  await page.getByRole('link', { name: '세금신고' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '종합부동산세' }).click();
  const page1Promise = page.waitForEvent('popup');
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('link', { name: '종합부동산세 간이세액계산' }).click();
  const page1 = await page1Promise;
  await page1.getByLabel('하루동안 열지 않음').check();
  await page1.locator('#btnClose2').click();
  await page.frameLocator('iframe[name="txppIframe"]').locator('#anchor18').click();
  await page.frameLocator('iframe[name="txppIframe"]').locator('#sbxAttrYr').selectOption('2023년 귀속분');
  await page.frameLocator('iframe[name="txppIframe"]').getByLabel('공시가격').click();
  await page.frameLocator('iframe[name="txppIframe"]').getByLabel('공시가격').fill('30,000,0000');
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('cell', { name: '실제재산세 입력여부 여 부' }).getByLabel('부', { exact: true }).check();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('button', { name: '등록하기' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('gridcell', { name: '1 본인 N 300,000,000 N N 300,' }).click();
  await page.frameLocator('iframe[name="txppIframe"]').getByLabel('본인 N 300,000,000 N N 300,000,000 선택').check();
  //const page2Promise = page.waitForEvent('popup');
  page.on('dialog', async dialog => {
    console.log('다이얼로그 메시지:', dialog.message());
    // 다이얼로그를 확인합니다.
    await dialog.accept();
  });
  await page.frameLocator('iframe[name="txppIframe"]').getByRole('button', { name: '간이세액계산하기' }).click();
  //const page2 = await page2Promise;

  
});