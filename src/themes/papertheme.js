import {
  MD3LightTheme as DefaultTheme,
  MD3DarkTheme as DarkTheme,
} from 'react-native-paper';

const paperLightTheme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  roundness: 5,
  colors: {
    ...DefaultTheme.colors,
    primary: '#54BEF0',
    blue01: '#54BEF0',
    blue02: '#CAEEFF',
    neutral10: '#000000',
    neutral20: '#7D7D7D',
    neutral30: '#3C3C43',
    neutral40: '#F2F2F7',
    neutral50: '#FFFFFF',
    textTabActive: '#54BEF0',
    textTabInactive: '#7D7D7D',
    outline: 'transparent',
    underlineColor: 'transparent',
    buttonBackground: '#54BEF0',
    buttonBackgroundDisabled: '#c0c0c0',
  },
};

const paperDarkTheme = {
  ...DarkTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    ...DarkTheme.colors,
    primary: '#70D7FF',
    blue10: '#70D7FF',
    blue20: '#B8EBFF',
    neutral10: '#FFFFFF',
    neutral20: '#C7C7CC',
    neutral30: '#929292',
    neutral40: '#1C1C1E',
    neutral50: '#000000',
    textTabActive: '#70D7FF',
    textTabInactive: '#C7C7CC',
    outline: 'transparent',
    underlineColor: 'transparent',
    buttonBackground: '#70D7FF',
    buttonBackgroundDisabled: '#1C1C1E',
  },
};

export {paperLightTheme, paperDarkTheme};
