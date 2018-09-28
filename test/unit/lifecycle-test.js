const path =require('path'),
    installPath = path.resolve(__dirname,'fakes')

const lifecycle = require('../../src/lifecycle'),
    faker = require('faker')

describe('loader should', () => {
    test('call load function with parameters', async () => {
        let extensionPoint = {
            app: faker.random.uuid()
            },
            moduleWrap = {
                require: jest.fn(),
                paths: []
            },
            requireMockLib1 = {
                onLoad: jest.fn()
            },
            requireMockLib2 = {
                onLoad: jest.fn()
            }
            moduleWrap.require.mockReturnValueOnce(requireMockLib1).mockReturnValue(requireMockLib2)

        pluginsName = ['lib1','lib2']
        lifecycle.load(installPath, pluginsName, extensionPoint, moduleWrap)
        expect(moduleWrap.paths).toEqual([`${installPath}/node_modules`])
        expect(moduleWrap.require).toHaveBeenNthCalledWith(1,'lib1')
        expect(requireMockLib1.onLoad).toHaveBeenCalledWith(extensionPoint)
        expect(moduleWrap.require).toHaveBeenNthCalledWith(2,'lib2')
        expect(requireMockLib2.onLoad).toHaveBeenCalledWith(extensionPoint)
    })
})