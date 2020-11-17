import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from './pages/Home'
import Order from './pages/Order'
import Delivery from './pages/Delivery'
import Equipment from './pages/Equipment'

export default function Routes(){
    return (
        <NavigationContainer>
            <AppStack.Navigator screenOptions={{headerShown: false}}>
               <AppStack.Screen name="Home" component={Home} />
               <AppStack.Screen name="Order" component={Order}  />
               <AppStack.Screen name="Delivery" component={Delivery} />
               <AppStack.Screen name="Equipment" component={Equipment} />
            </AppStack.Navigator>
        </NavigationContainer>
    )
}