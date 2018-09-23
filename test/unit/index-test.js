jest.mock('../../src/loader', () => jest.fn())
jest.mock('../../src/downloader', () => jest.fn())
const loader = require('../../src/loader'),
    downloader = require('../../src/downloader'),
    index = require('../../src/index'),
    faker = require('faker')

describe('index should', () => {
    test('export load functionality', async () => {
        let config = { 
            someconfig: faker.random.uuid(),
            installPath: faker.random.uuid(),
            plugins : {
                pluginName: faker.random.number()
            }
         },
        extensionPoint = {
            app: faker.random.uuid()
        }
        index.load(config, extensionPoint)
        expect(downloader).toBeCalledWith(config.installPath, config.plugins)
        expect(loader).toBeCalledWith(config, extensionPoint)
    })
})