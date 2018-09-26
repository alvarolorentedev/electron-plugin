const path =require('path'),
    installPath = path.resolve(__dirname,'fakes')

const lifecycle = require('../../src/lifecycle'),
    faker = require('faker')

describe('loader should', () => {
    test('call load function with parameters', async () => {
        let extensionPoint = {
            app: faker.random.uuid()
            },
            requirer = jest.fn(),
            requireMockLib1 = {
                onLoad: jest.fn()
            },
            requireMockLib2 = {
                onLoad: jest.fn()
            }
        requirer.main = {paths: []}
        requirer.mockReturnValueOnce(requireMockLib1).mockReturnValue(requireMockLib2)

        pluginsName = ['lib1','lib2']
        lifecycle.load(installPath, pluginsName, extensionPoint, requirer)
        expect(requirer.main.paths).toEqual([`${installPath}/node_modules`])
        expect(requirer).toHaveBeenNthCalledWith(1,'lib1')
        expect(requireMockLib1.onLoad).toHaveBeenCalledWith(extensionPoint)
        expect(requirer).toHaveBeenNthCalledWith(2,'lib2')
        expect(requireMockLib2.onLoad).toHaveBeenCalledWith(extensionPoint)
    })
})