const {addMovie} = require('../functions/addMovie')

const {watchedMovie} = require('../functions/watchedMovie')

const {deleteMovie} = require('../functions/deleteMovie')

const {Builder, Capabilities, By} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach( async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll( async () => {
    await driver.quit()
})

// test('Add a movie', async () => {
//     await addMovie(driver)

//     await driver.sleep(5000)
// })

// test('Movie crossed out', async () => {
//     await watchedMovie(driver)

//     await driver.sleep(5000)
// })

test('Movie deleted', async () => {
    await deleteMovie(driver)

    await driver.sleep(5000)
})