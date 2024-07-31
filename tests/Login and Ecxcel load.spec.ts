import { test, expect } from '@playwright/test';

test('Login and Ecxcel load', async ({ page }) => {
  await page.goto('http://192.168.150.70:8080/');
  await page.locator('#mf_ibx_empCd').fill('100001');
  await page.locator('#mf_ibx_empCd').press('Tab');
  await page.locator('#mf_sct_password').fill('1234');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.waitForTimeout(1000);
  await page.locator('#mf_wfm_side_trv_menu_label_14').click();
  await page.locator('#mf_tac_layout_contents_002000000_body_grd_sample_cell_1_4').getByText('선택').click();
  await page.locator('#mf_tac_layout_contents_002000000_body_grd_sample_cell_1_4').getByText('선택').click();
  await page.getByRole('row', { name: '2 선택 001001000 엑셀&CSV' }).getByRole('img').click();
  await page.waitForTimeout(400);
  await page.getByRole('button', { name: '조회' }).click();
  await page.getByRole('button', { name: '지우기' }).click();
  await page.getByRole('button', { name: '조회' }).click();
});