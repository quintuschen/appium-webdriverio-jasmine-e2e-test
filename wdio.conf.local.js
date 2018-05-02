const conf = require('./wdio.conf.js');

exports.config = Object.assign(conf.config,
    {
        maxInstances: 1,
        host: '127.0.0.1',  // This is for communicating with Appium server.
        port: 4723,
        services: ['appium'],
        // This is for spawning Appium server.
        appium: {
            args:{
                address: '127.0.0.1',
                port: 4723
            }
        },
    });
