import {DefaultTheme, DarkTheme} from '@react-navigation/native';

const navigationLightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#54BEF0',
    tabBarActiveTintColor: '#54BEF0',
    tabBarInactiveTintColor: '#7D7D7D',
    background: '#FFFFFF',
  },
};

const navigationDarkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    primary: '#70D7FF',
    tabBarActiveTintColor: '#70D7FF',
    tabBarInactiveTintColor: '#C7C7CC',
  },
};

export {navigationLightTheme, navigationDarkTheme};
