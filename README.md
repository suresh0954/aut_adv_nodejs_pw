# node-js-playwright-browserstack
This repo contains samples for running Playwright tests on BrowserStack using the browserstack-node-sdk.

<img width="429" height="93" alt="image" src="https://github.com/user-attachments/assets/7f8ebb23-9fc7-4384-9dd2-de0b7154fb52" />

# Setup
Clone the repo git clone -b sdk https://github.com/browserstack/node-js-playwright-browserstack.git and run cd node-js-playwright-browserstack.
Set BROWSERSTACK_USERNAME and BROWSERSTACK_ACCESS_KEY as environment variables with your BrowserStack Username and Access Key or update the same in browserstack.yml file.
Run npm i to install the dependencies.
Running your tests
To run the sample tests in parallel across the platforms specified in the browserstack.yml, run npm run sample-test.
To run the sample local tests in parallel across the platforms specified in the browserstack.yml, run npm run sample-local-test.
Notes
You can view your test results on the BrowserStack Automate dashboard
Understand how many parallel sessions you need by using our Parallel Test Calculator
