/**
 * @format
 */

import { AppRegistry, LogBox } from 'react-native'

import { name as appName } from './app.json'
import App from './src/App'

LogBox.ignoreLogs(['Remote debugger'])
AppRegistry.registerComponent(appName, () => App)
