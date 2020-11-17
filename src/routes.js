import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './pages/Home'
import Order from './pages/Order'

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
               <AppStack.Screen name="Home" component={Home} />
               <AppStack.Screen name="Order" component={Order}  />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}