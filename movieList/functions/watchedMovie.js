// const {By} = require('selenium-webdriver')

// module.exports = {
//     watchedMovie: async (driver) => {
//         await driver.findElement(By.xpath('//input')).sendKeys('Rain Man')
        
//         await driver.sleep(1000)

//         await driver.findElement(By.xpath('//button')).click()

//         await driver.sleep(1000)

//         await driver.findElement(By.xpath('(//span)[1]')).click()

//         await driver.sleep(1000)

//         const titleLine = await driver.findElement(By.className("checked"))

//         const displayed = titleLine.isDisplayed()

//         expect(displayed).toBeTruthy()

//     }
// }