jest.mock('../../src/lifecycle', () => ({
    load: jest.fn()
}))
jest.mock('../../src/downloader', () => jest.fn())
const lifecycle = require('../../src/lifecycle'),
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
        await index.load(config, extensionPoint)
        expect(downloader).toBeCalledWith(config.installPath, config.plugins)
        expect(lifecycle.load).toBeCalledWith(config.installPath, ["pluginName"], extensionPoint, expect.any(Object))
    })
})