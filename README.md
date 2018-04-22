# appium-webdriverio-jasmine-e2e-test
A working solution using Appium with JavaScript client WebriverIO and Jasmine for E2E mobile testing

## How to Run
1. You will need to configure your testing environment for Appium's requirement, use ``appium-doctor`` to verify.
2. Clone this repository
3. Install all the required packages
        
        > npm install
        
4. You need to set up desired capabilities for mobile testing by enabling it by environment variables.
        
        export DEVICE_NAME='iPhone 6s'
        export PLATFORM_VERSION=11.3
        export PLATFORM_NAME=iOS
        export APP_PATH=path_to_your_app
   
   In this project I use the sample app ``VodQA`` (``VodQA.apk`` and ``VodQAReactNative.zip``) from Appium as an example. The original apk could be
   found [here](https://github.com/appium/sample-code/blob/master/sample-code/apps/) at Appium's Github
   repository. 
   
   I have also included a copy of this app in this repository just in case the original copy
   on Appium's project is lost. You may find this app in `./apps/examples/`
   
4. To run the tests:

        > npm run test
        
5. Generate `allure` report

        > npm run report
   