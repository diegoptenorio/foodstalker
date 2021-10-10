import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';

import Home from './screens/Home';
import Detail from './screens/Detail';
import New from './screens/New';
import Menu from './screens/Menu';

const AppStack = createNativeStackNavigator();

const Routes = () => (
    <NavigationContainer>
        <AppStack.Navigator screenOptions={{ headerShown: false }}>
            <AppStack.Screen name="Home" component={Home} />
            <AppStack.Screen name="Detail" component={Detail} />
            <AppStack.Screen name="New" component={New} />
            <AppStack.Screen name="Menu" component={Menu} />
        </AppStack.Navigator>
    </NavigationContainer>
);

export default Routes;