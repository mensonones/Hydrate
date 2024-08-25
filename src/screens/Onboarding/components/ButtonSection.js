import { View, Text } from 'react-native';
import { Button } from 'react-native-paper';
import PropTypes from 'prop-types';

const ButtonSection = ({ styles, weight = 0, texts }) => (
  <View style={styles.senaryContainer}>
    <View style={styles.buttonContainer}>
      <Button
        mode="contained"
        contentStyle={weight === 0 ? styles.buttonDisabled : styles.button}
        style={styles.buttonRadius}
        disabled={weight === 0}
        buttonColor="#54BEF0"
        onPress={() => console.log('Pressed')}
        accessibilityLabel="Calculate Button"
      >
        <Text
          style={
            weight === 0
              ? styles.textInsideButtonDisabled
              : styles.textInsideButton
          }
        >
          {texts.calculateNow}
        </Text>
      </Button>
    </View>
  </View>
);

ButtonSection.propTypes = {
  styles: PropTypes.object.isRequired,
  weight: PropTypes.number.isRequired,
  texts: PropTypes.object.isRequired,
};

export default ButtonSection;
