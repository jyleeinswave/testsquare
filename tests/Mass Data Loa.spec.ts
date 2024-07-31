import { test, expect } from '@playwright/test';

test('Mass Data Load', async ({ page }) => {
  await page.goto('http://192.168.150.70:8080/');
  await page.locator('#mf_ibx_empCd').fill('100001');
  await page.locator('#mf_ibx_empCd').press('Tab');
  await page.locator('#mf_sct_password').fill('1234');
  await page.locator('#mf_sct_password').press('Enter');
  await page.locator('#mf_wfm_side_trv_menu_label_1').click();
  await page.locator('#mf_wfm_side_trv_menu_group_1').click();
  await page.locator('#mf_wfm_side_trv_menu_label_14').click();
  await page.getByRole('row', { name: '9 선택 001008000 대량데이타 조회 선택 /' }).getByRole('img').click();
  await page.getByRole('button', { name: 'Default Type' }).click();
  await page.getByRole('button', { name: 'Array Type' }).click();
  await page.getByRole('button', { name: '데이터삭제' }).click();
  await page.getByRole('button', { name: 'Default Type' }).click();
});