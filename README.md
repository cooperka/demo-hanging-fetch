# Issue - Hanging Fetch Requests

For https://github.com/facebook/react-native/issues/6679.

## Usage

1. `yarn install`
2. `react-native run-android`
3. Click **Fetch** and wait for a response
  - If you click once and wait, it takes a while before it shows as resolved
  - If you click anywhere in the app while waiting, the request will instantly resolve as soon as you click
