const load = (installPath, pluginsName, extensionPoint, requireWrap) => {
    requireWrap.main.paths.push(`${installPath}/node_modules`)
    pluginsName.forEach(pluginName => {
        let plugin = requireWrap(pluginName)
        plugin.onLoad(extensionPoint)
    });
}


module.exports = { load }