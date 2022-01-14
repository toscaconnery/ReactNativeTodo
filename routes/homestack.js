import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../pages/Home';
import ToDo from '../pages/ToDo';
import About from '../pages/About';
import RandomRestaurant from '../pages/RandomRestaurant';

const screens = {
    Home: {
        screen: Home
    },
    ToDo: {
        screen: ToDo
    },
    About: {
        screen: About
    },
    RandomRestaurant: {
        screen: RandomRestaurant
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);