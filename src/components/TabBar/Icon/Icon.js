import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PropTypes from 'prop-types';

const TabBarIcon = ({iconName, size = 24, color}) => {
  return <Icon name={iconName} size={size} color={color} />;
};

TabBarIcon.propTypes = {
  iconName: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string.isRequired,
};

export default TabBarIcon;
