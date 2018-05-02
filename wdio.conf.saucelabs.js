import configs from 'wdio.conf';

exports.configs = Object.assign(configs,
    {
        protocol: 'https',
        host: 'eu1.appium.testobject.com',
        port: 443,
        path: '/wd/hub',
        capabilities: [
            {
                platformName: process.env.PLATFORM_NAME,
                testobject_api_key: process.env.TESTOBJECT_API_KEY,
                testobject_app_id: process.env.TESTOBJECT_APP_ID || '1',
                testobject_suite_name: process.env.TESTOBJECT_SUITE_NAME,
                testobject_test_name: process.env.TESTOBJECT_TEST_NAME,
            }
        ],
    });
