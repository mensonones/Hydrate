import {
  View,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import {useTheme} from 'react-native-paper';
import PropTypes from 'prop-types';

// styles, texts, assets
import createStyles from './styles';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ButtonSection from './components/ButtonSection';

const OnboardingView = ({ keyboardVisible, weight, waterIntake, onChangeText, texts }) => {

  const {colors} = useTheme();
  const styles = createStyles(colors);


  return (
    <KeyboardAvoidingView
      style={styles.principalContainer}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.principalContainer}>
        <Header styles={styles} appName={texts.appName} welcome={texts.welcome} />
        <InputSection
            styles={styles}
            keyboardVisible={keyboardVisible}
            weight={weight}
            onChangeText={onChangeText}
            texts={texts}
          />
          <ButtonSection
            styles={styles}
            weight={weight === '' ? 0 : parseFloat(weight)}
            texts={texts}
          />
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

OnboardingView.propTypes = {
  keyboardVisible: PropTypes.bool.isRequired,
  weight: PropTypes.string.isRequired,
  waterIntake: PropTypes.number.isRequired,
  onChangeText: PropTypes.func.isRequired,
  texts: PropTypes.object.isRequired,
};

export default OnboardingView;
