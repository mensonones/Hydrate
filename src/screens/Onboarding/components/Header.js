import { View, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Logo from '../../../../assets/img/Appicon.png';
const Header = ({ styles, appName, welcome }) => (
  <View style={styles.secondaryContainer}>
    <Image source={Logo} style={styles.logo} testID="logo" />
    <View style={styles.tertiaryContainer}>
      <Text style={styles.appName}>{appName}</Text>
      <Text style={styles.welcome}>{welcome}</Text>
    </View>
  </View>
);

Header.propTypes = {
  styles: PropTypes.object.isRequired,
  appName: PropTypes.string.isRequired,
  welcome: PropTypes.string.isRequired,
};

export default Header;
