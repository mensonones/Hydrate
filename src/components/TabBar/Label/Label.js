import {Text} from 'react-native';
import {useTheme} from 'react-native-paper';
import PropTypes from 'prop-types';
import styles from './styles';

const TabBarLabel = ({children, style, ...props}) => {
  const {colors} = useTheme();

  return (
    <Text style={[styles.text, {color: colors.text}, style]} {...props}>
      {children}
    </Text>
  );
};

TabBarLabel.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
};

export default TabBarLabel;
