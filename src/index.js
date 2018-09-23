const loader = require('./loader'),
    downloader = require('./downloader')

const load = (config, extensionPoint) => {
    downloader(config.installPath ,config.plugins)
    loader(config, extensionPoint)
}

module.exports = { load }