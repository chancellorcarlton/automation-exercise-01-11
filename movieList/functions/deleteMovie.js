const {By} = require('selenium-webdriver')

module.exports = {
    deleteMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Rain Man')
        
        await driver.sleep(1000)

        await driver.findElement(By.xpath('//button')).click()

        await driver.sleep(1000)

        await driver.findElement(By.xpath('//li/button')).click()

        await driver.sleep(3000)
        
        const delButton = await driver.findElement(By.id("RainMan"))

        await driver.sleep(1000)

        const displayed = delButton.isDisplayed()

        expect(displayed).toBefalsy()
        }
}