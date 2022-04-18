import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Quotes from './screens/quotes';
import Details from './screens/details';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
                headerShown: false
            }} 
        initialRouteName='Quotes'>
          <Stack.Screen
            name="Quotes"
            component={Quotes}
       
          />
          <Stack.Screen name="Details" component={Details} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };

  export default MyStack;