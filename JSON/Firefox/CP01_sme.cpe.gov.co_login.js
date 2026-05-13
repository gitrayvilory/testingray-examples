const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch({browser: 'firefox'});
    const page = await browser.newPage();
    const timeout = 30000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 915,
            height: 746
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://sme.cpe.gov.co/Login');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"login\\"])')
        ])
            .setTimeout(timeout)
            .fill('admin@cpe.gov.co');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 113,
                y: 22,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])')
        ])
            .setTimeout(timeout)
            .fill('Cpe2023*');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('div.rz-dropdown-trigger > span'),
            targetPage.locator('::-p-xpath(//*[@id=\\"-ZiRiWesaE\\"]/div[2]/span)'),
            targetPage.locator(':scope >>> div.rz-dropdown-trigger > span')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 8,
                y: 9.5,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('#popupMIHSuY4x30 li'),
            targetPage.locator('::-p-xpath(//*[@id=\\"popupMIHSuY4x30\\"]/div/ul/li)'),
            targetPage.locator(':scope >>> #popupMIHSuY4x30 li'),
            targetPage.locator('::-p-aria(>Admin)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 212,
                y: 11,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"app\\"]/div[3]/form/div/div[6]/div/div/center/button)'),
            targetPage.locator('::-p-text(INGRESAR)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70.5,
                y: 22,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
