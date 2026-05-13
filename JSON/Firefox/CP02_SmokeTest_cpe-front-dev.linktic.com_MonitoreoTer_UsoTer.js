const puppeteer = require('puppeteer'); // v23.0.0 or later

(async () => {
    const browser = await puppeteer.launch({browser: 'firefox'});
    const page = await browser.newPage();
    const timeout = 5000;
    page.setDefaultTimeout(timeout);

    {
        const targetPage = page;
        await targetPage.setViewport({
            width: 1210,
            height: 754
        })
    }
    {
        const targetPage = page;
        await targetPage.goto('https://cpe-front-dev.linktic.com/dashboard');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/app-sidebar/div/button[1]/img)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 13.421875,
                y: 14,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/app-sidebar/div[2]/nav/div/button/mat-icon)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 0.9375,
                y: 11.5625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/app-sidebar/div[2]/nav/div/div/a[1]/span)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 41,
                y: 7.5625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/app-sidebar/button)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 488,
                y: 228,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-select-value-0\\"]/span)'),
            targetPage.locator('::-p-text(Seleccione un departamento)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 99,
                y: 5.1015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-1\\"]/span)'),
            targetPage.locator('::-p-text(Cundinamarca)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 28,
                y: 13.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-select-value-1\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 223,
                y: 10.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-4\\"]/span)'),
            targetPage.locator('::-p-text(Secretaría de Educación de Bogotá)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 169,
                y: 4.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-select-value-2\\"]/span)'),
            targetPage.locator('::-p-text(Seleccione un municipio)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 105,
                y: 10.1015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-7\\"]/span)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 40,
                y: 3.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-select-value-3\\"]/span)'),
            targetPage.locator('::-p-text(Seleccione una institución)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 120,
                y: 13.1015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-11\\"]/span)'),
            targetPage.locator('::-p-text(I.E. Técnica)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 69,
                y: 8.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-select-value-4\\"]/span)'),
            targetPage.locator('::-p-text(Seleccione una sede)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 98,
                y: 9.1015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-12\\"]/span)'),
            targetPage.locator('::-p-text(Sede Principal)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 61,
                y: 16.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-select-value-5\\"]/span)'),
            targetPage.locator('::-p-text(Seleccione una)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 88,
                y: 2.1015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-option-16\\"]/span)'),
            targetPage.locator('::-p-text(Google Chrome)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 51,
                y: 12.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-0\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 169,
                y: 20.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-0\\"])')
        ])
            .setTimeout(timeout)
            .fill('1234567890');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-1\\"])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 27,
                y: 12.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-1\\"])')
        ])
            .setTimeout(timeout)
            .fill('C');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('c');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-1\\"])')
        ])
            .setTimeout(timeout)
            .fill('Categoria#');
    }
    {
        const targetPage = page;
        await targetPage.keyboard.up('3');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-input-1\\"])')
        ])
            .setTimeout(timeout)
            .fill('Categoria#1');
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/main/app-use-terminals/app-content-module/div/app-card-content/div/form/div[5]/div[1]/mat-form-field/div[1]/div[2]/div[2]/mat-datepicker-toggle/button/span[3])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 26,
                y: 23.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-datepicker-0\\"]/div/mat-month-view/table/tbody/tr[4]/td[5]/button/span[1])')
        ])
            .setTimeout(timeout)
            .click({
              delay: 386,
              offset: {
                x: 19,
                y: 18.5078125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/main/app-use-terminals/app-content-module/div/app-card-content/div/form/div[5]/div[2]/mat-form-field/div[1]/div[2]/div[2]/mat-datepicker-toggle/button/span[3])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 19,
                y: 29.6015625,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(//*[@id=\\"mat-datepicker-1\\"]/div/mat-month-view/table/tbody/tr[4]/td[5]/button/span[1])')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 17,
                y: 20.5078125,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/main/app-use-terminals/app-content-module/div/app-card-content/div/form/div[7]/app-primary-button/app-action-button/button)'),
            targetPage.locator('::-p-text(check Buscar)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 58.4375,
                y: 28.3046875,
              },
            });
    }
    {
        const targetPage = page;
        await puppeteer.Locator.race([
            targetPage.locator('app-secondary-button button'),
            targetPage.locator('::-p-xpath(/html/body/app-root/app-layout/div/main/app-use-terminals/app-content-module/div/app-card-content/div/form/div[7]/app-secondary-button/app-action-button/button)'),
            targetPage.locator(':scope >>> app-secondary-button button'),
            targetPage.locator('::-p-aria(Limpiar)'),
            targetPage.locator('::-p-text(delete_outline Limpiar)')
        ])
            .setTimeout(timeout)
            .click({
              offset: {
                x: 70.9765625,
                y: 25.8046875,
              },
            });
    }

    await browser.close();

})().catch(err => {
    console.error(err);
    process.exit(1);
});
