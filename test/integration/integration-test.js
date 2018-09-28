const index = require('../../src/index'),
    faker = require('faker')

let config = { 
    installPath: `${__dirname}/test_folder`,
    plugins : {
        "electron-plugin-example": "https://git@github.com:kanekotic/electron-plugin-example.git"
    }
 },
extensionPoint = {
    app: faker.random.uuid()
}
index.load(config, extensionPoint).then(console.log).catch((error) => {throw error})