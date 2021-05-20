const puppeteer = require('puppeteer')

describe('Mi primer prueba abriendo un navegador',()=>{

    it('debe de abrir el navegador', async ()=>{
        const browser = await puppeteer.launch({headless: false, slowMo: 300})
        const page = await browser.newPage()
        await page.goto('http://automationpractice.com/index.php')
        await page.waitForSelector('h1')
        await browser.close()
    })

})