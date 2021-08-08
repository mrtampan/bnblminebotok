const delay = require('delay');
const fs = require('fs');
const readlineSync = require('readline-sync');
// const { Console } = require('console');
// const date = () => new Date().toLocaleTimeString();
// const fetch = require('node-fetch');
const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');



(async () => {
        const bnbAddress = readlineSync.question('Masukan bnb address mu : ');

        
  const browser = await puppeteer.launch({
    executablePath:'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    headless:false,
    devtools:false,
    isMobile: true,
    // defaultViewport: {
    //     width: 375,
    //     height: 667,
    //     isMobile: true,
    //     deviceScaleFactor: 2,
    // }
})

const page = await browser.newPage()


await page.evaluateOnNewDocument(() => {
Object.defineProperty(navigator, 'webdriver', {
get: () => false,
});
});
await page.evaluateOnNewDocument(() => {
// Overwrite the `plugins` property to use a custom getter.
Object.defineProperty(navigator, 'plugins', {
// This just needs to have `length > 0` for the current test,
// but we could mock the plugins too if necessary.
get: () => [1, 2, 3, 4, 5],
});
});
await page.setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1');
//web


await page.goto(`http://bnb-miner.live/`,{ waitUntil: 'networkidle2', timeout: 80000 });
const modalClick = await page.waitForSelector("a.claim-btn");
modalClick.click();
await delay(1000);
await page.type("input#wallet_address_id", bnbAddress)
await delay(5000);
const login = await page.waitForSelector("button.form-button");
login.click();
for (var a = 0; a < 1000; a++) {
    const claim = await page.waitForSelector("a.claim-btn");
    claim.click();

}
})()