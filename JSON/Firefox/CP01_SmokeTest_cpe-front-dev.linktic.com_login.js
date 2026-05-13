const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch({browser: 'firefox'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 907,
            height: 751
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://cpe-front-dev.linktic.com/login');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 163.546875,
                y: 15.2890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"email\\"])')
        ])
            .setTimeout(timeout)
            .fill('testing@linktic.com');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 57.546875,
                y: 9.2890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"password\\"])')
        ])
            .setTimeout(timeout)
            .fill('LinkTic123');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"role\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 4.953125,
                y: 3.2890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator(`::-p-xpath(//*[@id=\\"mat-option-0\\"]/span[text\\(\\)=\\'Administrador\\'])`)
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 36.546875,
                y: 12.2890625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-login/div/div/div/div[2]/app-card-content/div/form/div/app-action-button/button)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58.953125,
                y: 16.2890625,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
