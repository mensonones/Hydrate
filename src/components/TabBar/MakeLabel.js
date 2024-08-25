import TabBarLabel from './Label/Label';
import PropTypes from 'prop-types';

const MakeLabel = ({route, color}) => {
  const {name} = route;
  return <TabBarLabel style={{color}}>{name}</TabBarLabel>;
};

MakeLabel.propTypes = {
  route: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  color: PropTypes.string.isRequired,
};

export default MakeLabel;
