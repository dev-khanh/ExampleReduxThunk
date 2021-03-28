import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import ConnectRedux from 'screen/ConnectRedux'

const Stack = createStackNavigator()
export default () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={ConnectRedux}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  </NavigationContainer>
)
