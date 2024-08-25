import {useState, useCallback} from 'react';
import {
  Image,
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {Button, Text, TextInput, useTheme} from 'react-native-paper';

// styles, texts, assets
import createStyles from './styles';
import Logo from '../../../assets/img/Appicon.png';
import texts from '../../utils/texts';

// hooks
import useKeyboardVisibility from '../../hooks/useKeyboardVisibility';

const OnboardingView = () => {
  const {colors} = useTheme();
  const styles = createStyles(colors);
  const {appName, welcome} = texts;
  const [weight, setWeight] = useState(0);
  const keyboardVisible = useKeyboardVisibility();

  const onChangeText = useCallback(text => {
    const num = parseFloat(text);
    setWeight(isNaN(num) ? '' : num);
  }, []);

  return (
    <KeyboardAvoidingView
      style={styles.principalContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.principalContainer}>
          <View style={styles.secondaryContainer}>
            <Image source={Logo} style={styles.logo} />
            <View style={styles.tertiaryContainer}>
              <Text style={styles.appName}>{appName}</Text>
              <Text style={styles.welcome}>{welcome}</Text>
            </View>
          </View>
          <View
            style={
              keyboardVisible
                ? styles.quaternaryContainerKeyboardOpened
                : styles.quaternaryContainer
            }>
            <View style={styles.quinaryContainer}>
              <TextInput
                style={styles.input}
                placeholder="weight"
                keyboardType="numeric"
                mode="outlined"
                onChangeText={onChangeText}
                value={weight.toString()}
              />
              <Text style={styles.textInsideInput}>{texts.bodyWeight}</Text>
              <Text style={styles.textInsideInputKg}>{texts.kg}</Text>
            </View>
          </View>
          <View style={styles.senaryContainer}>
            <View style={styles.buttonContainer}>
              <Button
                mode="contained"
                contentStyle={
                  weight !== 0 ? styles.button : styles.buttonDisabled
                }
                style={styles.buttonRadius}
                disabled={weight === 0}
                buttonColor="#54BEF0"
                onPress={() => console.log('Pressed')}>
                <Text
                  style={
                    weight !== 0
                      ? styles.textInsideButton
                      : styles.textInsideButtonDisabled
                  }>
                  {texts.calculateNow}
                </Text>
              </Button>
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default OnboardingView;
