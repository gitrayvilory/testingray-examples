const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch({browser: 'firefox'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1086,
            height: 751
        })
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/main/div/app-navbar/nav/div[2]/button/mat-icon)'),
            targetPage.locator('::-p-text(expand_more)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 16,
                y: 16,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-menu-panel-0\\"]/div/button[1]/span)'),
            targetPage.locator('::-p-text(Configuración)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 84.7421875,
                y: 8,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/main/div/app-navbar/nav/div[2]/button/mat-icon)'),
            targetPage.locator('::-p-text(expand_more)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4,
                y: 13,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-menu-panel-0\\"]/div/button[2]/span/div/span)'),
            targetPage.locator('::-p-text(Cerrar sesión)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 65.7421875,
                y: 4,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
