jest.mock('npm', () => ({
    load : jest.fn(),
    commands: {
        install: jest.fn()
    }
}))

const downloader = require('../../src/downloader'),
    faker = require('faker'),
    npm = require('npm')

describe('downloader should', () => {
    let path
    let plugins

    beforeEach(() => {
        path = faker.random.uuid(),
        name1 = `${faker.random.uuid()}`,
        value1 = `${faker.random.uuid()}`,
        name2 = `${faker.random.uuid()}`,
        value2 = `${faker.random.uuid()}`
        plugins = {}
        plugins[name1]= value1
        plugins[name2]= value2   
        npm.load.mockReset().mockImplementation((_, cb)=> cb())
        npm.commands.install.mockReset().mockImplementation((_, __, cb)=> cb())
    });

    test('retrieve all the plugin packages listed', async () => {
        
        await downloader(path, plugins)
        expect(npm.load).toBeCalledWith({}, expect.any(Function))
        let entry1 = Object.entries(plugins)[0]
        let entry2 = Object.entries(plugins)[1]
        expect(npm.commands.install).toBeCalledWith(path,[`${entry1[0]}@${entry1[1]}`,`${entry2[0]}@${entry2[1]}`], expect.any(Function))
    })

    test('load fails should cause error', async () => {
        let error = faker.random.uuid()
        npm.load.mockImplementation((_, cb)=> cb(error))
        expect(downloader(path, plugins)).rejects.toEqual(error)
        expect(npm.commands.install).not.toBeCalled()
    })
})