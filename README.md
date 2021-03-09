# ![logomakr_2nqeyp](https://user-images.githubusercontent.com/3071208/46248168-4cb42880-c416-11e8-9c39-2580669a656a.png)
[![Build Status](https://travis-ci.org/kanekotic/electron-plugin.svg?branch=master)](https://travis-ci.org/kanekotic/electron-plugin)
[![codecov](https://codecov.io/gh/kanekotic/electron-plugin/branch/master/graph/badge.svg)](https://codecov.io/gh/kanekotic/electron-plugin)
[![npm](https://img.shields.io/npm/dy/electron-plugin.svg)](https://github.com/kanekotic/electron-plugin)
[![GitHub license](https://img.shields.io/github/license/kanekotic/electron-plugin.svg)](https://github.com/kanekotic/electron-plugin/blob/master/LICENSE)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://GitHub.com/kanekotic/electron-plugin/graphs/commit-activity)

Create extensible electron applications through a plugin architecture that uses NPM (or similar registry) or GitHub as repository for the extensions.

## Installation

add it to your electron project using `npm install electron-plugin --save` or `yarn add electron-plugin`

## Usage

require `electron-plugin` exports a function that requires a javascript object and an electron window, as seen on the next example:

```js
const pluginManager = require(`electron-plugin`)
let config = { 
        installPath: `${__dirname}/test_folder`,
        plugins : {
            "electron-plugin-example": "0.0.2"
        }
     },
    extensionPoint = {
        app: 'anything you want to use as exstention point'
    }

pluginManager.load(config, extensionPoint)
```

##### Created my free [logo](logomakr.com/2NQeYP) at [LogoMakr.com](LogoMakr.com) 
