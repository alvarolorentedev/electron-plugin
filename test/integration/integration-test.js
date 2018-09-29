let test = require('tape'),
    faker = require('faker'),
    app = require('../../src/index')

test('integration should download and install', async (assert) => {
    assert.plan(1);
    let config = { 
        installPath: `${__dirname}/test_folder`,
        plugins : {
            "electron-plugin-example": "git+ssh://git@github.com/kanekotic/electron-plugin-example.git"
        }
     },
    extensionPoint = {
        app: faker.random.uuid()
    }
    await app.load(config, extensionPoint)
    assert.pass()
    assert.end();
  });