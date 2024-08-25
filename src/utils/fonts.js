import {Platform} from 'react-native';

const fonts = {
  regular: Platform.select({
    // ios: 'San Francisco',
    android: 'NotoSans-Regular',
  }),
  medium: Platform.select({
    // ios: 'San Francisco-Medium',
    android: 'NotoSans-Medium',
  }),
  bold: Platform.select({
    // ios: 'San Francisco-Bold',
    android: 'NotoSans-Bold',
  }),
  semibold: Platform.select({
    // ios: 'San Francisco-Semibold',
    android: 'NotoSans-SemiBold',
  }),
  light: Platform.select({
    // ios: 'San Francisco-Light',
    android: 'NotoSans-Light',
  }),
  extraLight: Platform.select({
    // ios: 'San Francisco-Thin',
    android: 'NotoSans-Thin',
  }),
  black: Platform.select({
    // ios: 'San Francisco-Black',
    android: 'NotoSans-Black',
  }),
};

export default fonts;
