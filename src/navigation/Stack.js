import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Screens
import CalculateResultContainer from '../screens/CalculateResult/CalculateResultContainer';
import OnboardingContainer from '../screens/Onboarding/OnboardingContainer';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Onboarding" component={OnboardingContainer} />
      <Stack.Screen
        name="CalculateResult"
        component={CalculateResultContainer}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
