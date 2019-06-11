const puppeteer = require('puppeteer');

const URL = 'https://yandex.ru/jobs/vacancies/dev/?cities=213&tags=frontend';
const TEST_URL = 'http://example.com/';

const YA_SELECTOR = '.page-content .layout .serp__item:not(.serp__item_hidden_yes) .link';

(async () => {
  const browser = await puppeteer.launch({});
  const page = await browser.newPage();

  console.log(`Page loading - ${URL}`)
  await page.goto(URL,{waitUntil: 'load'});

//   await page.screenshot({path: 'example.png'})

  const container = await page.evaluate( selector => {
      const element = document.querySelector(selector)
      return element.href
    }, YA_SELECTOR);
  console.log(container);

  await browser.close();
})();