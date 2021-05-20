const puppeteer = require('puppeteer')


async function pruebaDeNavegador (){
    const browser = await puppeteer.launch({headless: false})
    const page = await browser.newPage()
    await page.goto('http://automationpractice.com/index.php')
    await page.waitForSelector('h1')
    await browser.close()
}

pruebaDeNavegador()