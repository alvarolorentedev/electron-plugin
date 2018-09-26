const lifecycle = require('./lifecycle'),
    downloader = require('./downloader')

const load = (config, extensionPoint) => {
    downloader(config.installPath, config.plugins)
    lifecycle.load(config.installPath, Object.keys(config.plugins), extensionPoint, require)
}

module.exports = { load }