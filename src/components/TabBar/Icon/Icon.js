import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';

const TabBarIcon = ({ iconName, size, color }) => {
  return <Icon name={iconName} size={size} color={color} />;
};

export default TabBarIcon;