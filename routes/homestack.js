import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Home from '../pages/home';
import ToDo from '../pages/todo';
import About from '../pages/about';

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
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);