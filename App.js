import { createStackNavigator, createAppContainer } from 'react-navigation';
import HomeScreen from './src/screens/HomeScreen';
import ComponentScreen from './src/screens/ComponentsScreen';
import ListScreen from './src/screens/ListScreen';

//This is a stack navigator
const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Component: ComponentScreen,
    List: ListScreen
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Relearn ReactNative'
    }
  }
);

export default createAppContainer(navigator);
