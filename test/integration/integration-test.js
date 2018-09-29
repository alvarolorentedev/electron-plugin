let test = require('tape'),
    faker = require('faker'),
    app = require('../../src/index')

test('integration should download and install', async (assert) => {
    assert.plan(1);
    let config = { 
        installPath: `${__dirname}/test_folder`,
        plugins : {
            "electron-plugin-example": "0.0.2"
        }
     },
    extensionPoint = {
        app: faker.random.uuid()
    }
    await app.load(config, extensionPoint)
    assert.pass()
    assert.end();
  });