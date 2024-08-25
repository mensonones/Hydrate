import {StyleSheet} from 'react-native';
import fonts from '../../utils/fonts';

const baseButton = {
  width: '100%',
  height: 50,
};

const createStyles = colors =>
  StyleSheet.create({
    principalContainer: {
      flex: 1,
    },
    secondaryContainer: {
      alignItems: 'left',
      top: 132,
      width: 358,
      height: 208,
    },
    tertiaryContainer: {
      width: 349,
      height: 124,
    },
    quaternaryContainer: {
      alignContent: 'center',
      alignItems: 'center',
      top: 150,
    },
    quaternaryContainerKeyboardOpened: {
      alignContent: 'center',
      alignItems: 'center',
      top: 100,
    },
    quinaryContainer: {
      flexDirection: 'row',
      width: '95%',
      backgroundColor: colors.neutral40,
    },
    senaryContainer: {
      top: 280,
      alignItems: 'center',
      width: '100%',
    },
    buttonContainer: {
      // top: 100,
      width: '100%',
      height: 50,
      // flex: 1,
      padding: 10,
      justifyContent: 'center',
    },
    logo: {
      width: 52,
      height: 68,
      marginLeft: 8,
    },
    appName: {
      fontFamily: fonts.bold,
      color: colors.neutral10,
      fontSize: 28,
      marginLeft: 8,
      marginBottom: 8,
    },
    welcome: {
      fontFamily: fonts.regular,
      color: colors.neutral20,
      fontSize: 17,
      marginLeft: 8,
      marginBottom: 8,
    },
    textInsideInput: {
      position: 'absolute',
      fontFamily: fonts.regular,
      fontSize: 17,
      left: 12,
      top: 15,
      color: colors.neutral10,
    },
    textInsideInputKg: {
      position: 'absolute',
      fontFamily: fonts.regular,
      fontSize: 17,
      left: 180,
      top: 15,
      color: colors.neutral10,
    },
    input: {
      flex: 1,
      paddingLeft: 100,
      height: 44,
      backgroundColor: colors.neutral40,
      marginTop: 2,
      marginBottom: 2,
      borderWidth: 0,
      padding: 5,
      borderRadius: 10,
    },
    button: {
      ...baseButton,
      backgroundColor: colors.blue01,
    },
    buttonDisabled: {
      ...baseButton,
    },
    buttonRadius: {
      borderRadius: 10,
    },
    textInsideButton: {
      fontFamily: fonts.regular,
      fontSize: 17,
      color: colors.neutral50,
    },
    textInsideButtonDisabled: {
      fontFamily: fonts.regular,
      fontSize: 17,
      color: colors.neutral20,
    },
  });

export default createStyles;
