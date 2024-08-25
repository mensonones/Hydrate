import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import StackNavigator from './Stack';
import DetailsContainer from '../screens/Details/DetailsContainer';
import MakeIcon from '../components/TabBar/MakeIcon';
import MakeLabel from '../components/TabBar/MakeLabel';

const Tab = createBottomTabNavigator();

const DETAILS_ROUTE_NAME = 'Details';
const HYDRATE_ROUTE_NAME = 'Hydrate';

const MainNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={HYDRATE_ROUTE_NAME}
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) =>
          MakeIcon({route, focused, color, size}),
        tabBarLabel: ({color}) => MakeLabel({route, color}),
      })}>
      <Tab.Screen name={HYDRATE_ROUTE_NAME} component={StackNavigator} />
      <Tab.Screen name={DETAILS_ROUTE_NAME} component={DetailsContainer} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
