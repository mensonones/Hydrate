import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import StackNavigator from './Stack';
import DetailsContainer from '../screens/Details/DetailsConatiner';
import TabBarIcon from '../components/TabBar/Icon/Icon';
import TabBarLabel from '../components/TabBar/Label/Label';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Hydrate"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;

          switch (route.name) {
            case 'Hydrate':
              iconName = focused ? 'water' : 'water-outline';
              break;
            case 'Details':
              iconName = focused ? 'information' : 'information-outline';
              break;
            default:
              iconName = 'water';
          }

          return <TabBarIcon iconName={iconName} size={size} color={color} />;
        },
        tabBarLabel: ({color}) => (
          <TabBarLabel style={{color}}>{route.name}</TabBarLabel>
        ),
      })}>
      <Tab.Screen name="Hydrate" component={StackNavigator} />
      <Tab.Screen name="Details" component={DetailsContainer} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
