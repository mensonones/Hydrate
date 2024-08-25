import { View, Text } from 'react-native';
import { TextInput } from 'react-native-paper';
import PropTypes from 'prop-types';

const InputSection = ({ styles, keyboardVisible, weight, onChangeText, texts }) => (
  <View
    style={
      keyboardVisible
        ? styles.quaternaryContainerKeyboardOpened
        : styles.quaternaryContainer
    }
  >
    <View style={styles.quinaryContainer}>
      <TextInput
        style={styles.input}
        placeholder="weight"
        keyboardType="numeric"
        mode="outlined"
        onChangeText={onChangeText}
        value={weight.toString()}
        accessibilityLabel="Weight Input"
      />
      <Text style={styles.textInsideInput}>{texts.bodyWeight}</Text>
      <Text style={styles.textInsideInputKg}>{texts.kg}</Text>
    </View>
  </View>
);

InputSection.propTypes = {
  styles: PropTypes.object.isRequired,
  keyboardVisible: PropTypes.bool.isRequired,
  weight: PropTypes.string.isRequired,
  onChangeText: PropTypes.func.isRequired,
  texts: PropTypes.object.isRequired,
};

export default InputSection;
