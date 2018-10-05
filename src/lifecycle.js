require('array-peek')

const load = (installPath, pluginsName, extensionPoint, moduleWrapper) => {
    moduleWrapper.paths.push(`${installPath}/node_modules`)
    return pluginsName
        .map(pluginName => moduleWrapper.require(pluginName))
        .peek(plugin => plugin.onLoad(extensionPoint))
}

module.exports = { load }