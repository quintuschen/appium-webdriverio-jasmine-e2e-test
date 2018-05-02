const config = require('./wdio.conf.js').config;

exports.config = Object.assign(config,
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
