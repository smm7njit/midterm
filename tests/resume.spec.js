// @ts-check
const { test, expect } = require('@playwright/test');

const portfolio = 'http://localhost:3000'; // Replace with the URL of the student's resume page


test('Check Profile Name', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('.info h2')).toBeVisible();
});


test('Check Profile Image', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('.home-img img')).toBeVisible();
});


test('Check Job Title', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('.info h3')).toBeVisible();
});


test('Check Social Links', async ({ page }) => {
  await page.goto(portfolio);
  const linksCount = await page.locator('.links a').count();
  await expect(linksCount).toBeGreaterThan(0);
});


test('Check Objective Section', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('.sidebar-bottom h4')).toBeVisible();
});


test('Check Skills Section', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('.skills-description h3')).toBeVisible();
});


test('Check Experience Card', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('.experience-card h3')).toBeVisible();
});




test('Check Page Title', async ({ page }) => {
  await page.goto(portfolio);
  const title = await page.title();
  await expect(title).not.toBe('');
});


test('Check SEO Meta Description', async ({ page }) => {
  await page.goto(portfolio);
  const metaDescription = await page.getAttribute('meta[name="description"]', 'This is an example resume.');
  await expect(metaDescription).not.toBe('');
});


test('Check SEO Meta Keywords', async ({ page }) => {
  await page.goto(portfolio);
  const metaKeywords = await page.getAttribute('meta[name="keywords"]', 'resume, jobs, career');
  await expect(metaKeywords).not.toBe('');
});


test('Check Main Content Area', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('body > .container > .main-content')).toBeVisible();
});


test('Check Sidebar Area', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('body > .container > aside.sidebar')).toBeVisible();
});


test('Check Tagline Heading', async ({ page }) => {
  await page.goto(portfolio);
  await expect(page.locator('header h1')).toBeVisible();
});

test('Check Skills Icons', async ({ page }) => {
  await page.goto(portfolio);
  const skillsIconsCount = await page.locator('.skill-list li i').count();
  await expect(skillsIconsCount).toBeGreaterThan(0);
});

test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto(portfolio);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width, initial-scale=1');
});

test('Check Button', async ({page}) => {
    await page.goto(portfolio);
    const button = await page.$('btn');
    await button.click ();
});

test('Experience Check', async ({ page }) => {
    await page.goto(portfolio);
    await expect(page.locator('.list-item h3')).toBeVisible();
});

test('Experience Check (2)', async ({ page }) => {
    await page.goto(portfolio);
    await expect(page.locator('.list-item span')).toBeVisible();
  });

test('Education Check', async ({ page }) => {
    await page.goto(portfolio);
    await expect(page.locator('.education h4')).toBeVisible();
  });

  test('About Image Check', async ({ page }) => {
    await page.goto(portfolio);
    await expect(page.locator('.about-img img')).toBeVisible();
  });




