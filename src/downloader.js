const npm = require('npm'),
    { promisify } = require('util'),
    load = promisify(npm.load)

const download = async (path, plugins) => {
    await load({})
    await  promisify(npm.commands.install)(path, Object.entries(plugins).map(([key, value]) => `${key}@${value}`))
}

module.exports = download