const load = (installPath, pluginsName, extensionPoint, moduleWrapper) => {
    moduleWrapper.paths.push(`${installPath}/node_modules`)
    pluginsName.forEach(pluginName => moduleWrapper.require(pluginName).onLoad(extensionPoint))
}

module.exports = { load }