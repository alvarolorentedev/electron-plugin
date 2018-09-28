const lifecycle = require('./lifecycle'),
    downloader = require('./downloader')

const load = async (config, extensionPoint) => {
    await downloader(config.installPath, config.plugins)
    lifecycle.load(config.installPath, Object.keys(config.plugins), extensionPoint, module)
}

module.exports = { load }