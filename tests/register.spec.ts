import { test, expect } from '@playwright/test';

test('TC01 Register เบอร์โทรซ้ำ', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page
        .getByRole('button', { name: 'สมัครสมาชิก' })
        .click();
    await page
        .getByLabel('ชื่อ-นามสกุล')
        .fill('Phornwissanu Suchatrai');

    await page
        .getByPlaceholder('08X-XXX-XXXX')
        .fill('0800000000');

    await page
        .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
        .fill('12345678');
    await page
        .getByPlaceholder('กรอกรหัสผ่านอีกครั้ง')
        .fill('12345678');
    await page
        .getByRole('button', { name: 'สมัครสมาชิก' })
        .click();
    
    await expect(page.getByText('หมายเลขโทรศัพท์นี้มีบัญชีอยู่แล้ว')).toBeVisible();

});

test('TC02 Register รหัสผ่านไม่ตรงกัน', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page
        .getByRole('button', { name: 'สมัครสมาชิก' })
        .click();
    await page
        .getByLabel('ชื่อ-นามสกุล')
        .fill('Phornwissanu Suchatrai');

    await page
        .getByPlaceholder('08X-XXX-XXXX')
        .fill('0800000028');

    await page
        .getByPlaceholder('อย่างน้อย 8 ตัวอักษร')
        .fill('12345678');
    await page
        .getByPlaceholder('กรอกรหัสผ่านอีกครั้ง')
        .fill('123456789');
    await page
        .getByRole('button', { name: 'สมัครสมาชิก' })
        .click();
    
    await expect(page.getByText('รหัสผ่านไม่ตรงกัน')).toBeVisible();

});

test('TC03 ลืมรหัสผ่าน', async ({ page }) => {

    await page.goto('http://localhost:5173/');

    await page
        .getByRole('button', { name: 'ลืมรหัสผ่าน' })
        .click();

    await page
        .getByPlaceholder('08X-XXX-XXXX')
        .fill('0800000048');

    await page
        .getByRole('button', { name: 'ส่งคำขอรีเซ็ตรหัสผ่าน' })
        .click();
    
     await expect(page.getByText('การตั้งรหัสผ่านใหม่ยังไม่เปิดใช้งาน กรุณาติดต่อผู้ดูแลระบบ')).toBeVisible();

});
