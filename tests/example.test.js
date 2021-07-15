// This will give us access to everything inside the puppeteer package.
const puppeteer = require('puppeteer')

// This describe block is basically a wrapper around test suite or test steps, it depends on the context
// Inside describe we can create as many test steps as we want 
describe('My First Puppeteer Test', () => {
    it('Browser launch test', async function() {
        // launch function handles everything regarding spinning the browser
        const browser = await puppeteer.launch({
            headless: false,    // truning off the headless mode 
            slowMo: 10,   // Setting the time interval of 1000 milli sec to each of the command
            devtools: true,  // This will automatically open devtools in the browser
        })

        // This line will open the new page or tab in the browser
        const page = await browser.newPage()

        // This will actually open the given url on the above browser page/tab
        await page.goto('http://example.com/')

        // This command will try to find the h1 element on the page, 
        // if it is successfull it will return true and moveon to next if there is any
        //  if it not able to find h1, it will throw an error and the test will fail.
        await page.waitForSelector('h1')

        // This will basically refresh the browser page
        // await page.reload()

        // Always close the browser after you finish your script, otherwise you have to close the browser manually
        await browser.close()
    })

})

describe('My Dynamic behaviour tests', () => {
    it('My GoBack GoForward Test', async function() {
        // launch function handles everything regarding spinning the browser
        const browser = await puppeteer.launch({
            headless: false,    // truning off the headless mode 
            slowMo: 10,   // Setting the time interval of 1000 milli sec to each of the command
            devtools: true,  // This will automatically open devtools in the browser
        })

        // This line will open the new page or tab in the browser
        const page = await browser.newPage()

        // This will actually open the given url on the above browser page/tab
        await page.goto('http://example.com/')

        // puppeteer will wait for 3 sec before it moves to the next step
        // This is an implict way of waiting or pausing the test
        // await page.waitForTimeout(3000)

        // This command will try to find the h1 element on the page, 
        // if it is successfull it will return true and moveon to next if there is any
        //  if it not able to find h1, it will throw an error and the test will fail.
        await page.waitForSelector('h1')

        await page.goto('https://dev.to/')
        await page.waitForSelector('#navigation-progress')

        // This command will go backwards
        await page.goBack()
        await page.waitForSelector('h1')

        // This command will go forward
        await page.goForward()
        await page.waitForSelector('#navigation-progress')


        // This will basically refresh the browser page
        // await page.reload()

        // Always close the browser after you finish your script, otherwise you have to close the browser manually
        await browser.close()
    }),


    it('Input filed typing... test', async function() {
        // launch function handles everything regarding spinning the browser
        const browser = await puppeteer.launch({
            headless: false,    // truning off the headless mode 
            slowMo: 10,   // Setting the time interval of 10 milli sec to each of the command
            devtools: false,
        })

        // This line will open the new page or tab in the browser
        const page = await browser.newPage()

        // This will actually open the given url on the above browser page/tab
        await page.goto('https://devexpress.github.io/testcafe/example/')

        // Here the name is typed into the input field with the specified id
        // in the below example the delay is going to delay each key stroke by 200 milli seconds
        await page.type('#developer-name', 'Prasad Yalavarthy', {delay: 10})
        // await page.waitForTimeout(1000)


        // Always close the browser after you finish your script, otherwise you have to close the browser manually
        await browser.close()
    }),

    it('Interacting with Buttons and checkbox... test', async function() {
        // launch function handles everything regarding spinning the browser
        const browser = await puppeteer.launch({
            headless: false,    // truning off the headless mode 
            slowMo: 10,   // Setting the time interval of 1000 milli sec to each of the command
            devtools: false,
        })

        // This line will open the new page or tab in the browser
        const page = await browser.newPage()

        // This will actually open the given url on the above browser page/tab
        await page.goto('https://devexpress.github.io/testcafe/example/')

        // clicking the tried-test-cafe checkbox
        // If we don't specify the clickCount it will default it to 1
        await page.click('#tried-test-cafe', {clickCount: 1})

        // Always close the browser after you finish your script, otherwise you have to close the browser manually
        await browser.close()
    }),

    it('Interacting with Dropdown or select box... test', async function() {
        // launch function handles everything regarding spinning the browser
        const browser = await puppeteer.launch({
            headless: false,    // truning off the headless mode 
            slowMo: 10,   // Setting the time interval of 1000 milli sec to each of the command
            devtools: false,
        })

        // This line will open the new page or tab in the browser
        const page = await browser.newPage()

        // This will actually open the given url on the above browser page/tab
        await page.goto('https://devexpress.github.io/testcafe/example/')

        await page.type('#developer-name', 'Prasad Yalavarthy', {delay: 10})

        // clicking the tried-test-cafe checkbox
        // If we don't specify the clickCount it will default it to 1
        await page.click('#tried-test-cafe', {clickCount: 1})

        await page.select('#preferred-interface', 'JavaScript API')
        const message = 'Lets fill the message with some text.'
        await page.type('#comments', message)
        await page.click('#submit-button')
        await page.waitForSelector('.result-content')
        await page.waitForTimeout(1000)


        // Always close the browser after you finish your script, otherwise you have to close the browser manually
        await browser.close()
    })

})