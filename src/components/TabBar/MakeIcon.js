import TabBarIcon from './Icon/Icon';
import PropTypes from 'prop-types';

const MakeIcon = ({route, focused, color, size}) => {
  let iconName;

  switch (route.name) {
    case 'Hydrate':
      iconName = focused ? 'water' : 'water-outline';
      break;
    case 'Details':
      iconName = focused ? 'information' : 'information-outline';
      break;
    default:
      iconName = 'water';
  }

  return <TabBarIcon iconName={iconName} size={size} color={color} />;
};

MakeIcon.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  focused: PropTypes.bool,
  color: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default MakeIcon;
