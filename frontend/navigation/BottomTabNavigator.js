import * as React from 'react';
import {createBottomTabNavigator, BottomTabBar} from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import {StyleSheet, Text, View} from 'react-native';
import {BlurView} from 'expo-blur';
import {MaterialCommunityIcons} from 'react-native-vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import ReservationScreen from "../screens/reservationScreen";
import mapScreen from "../screens/mapScreen";
import Colors from "../constants/Colors";


const MainTabBar = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({navigation, route}) {
    // Set the header title on the parent stack navigator depending on the
    // currently active tab. Learn more in the documentation:
    // https://reactnavigation.org/docs/en/screen-options-resolution.html
    navigation.setOptions({
       // hiddenScreen :{screen: ReservationScreen},
        headerTitle: getHeaderTitle(route),
        headerTintColor: Colors.orangeColor,

        headerTitleStyle: {
            fontWeight: 'bold',
        },

        headerShown: showHeader(route),
        headerStyle: {backgroundColor: Colors.screenBarColor,
            shadowColor: 'transparent',
        },

    });
    const TabBar = (props) => (
        <BlurView
            style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
            }}
            tint="dark"
            intensity={100}
        >
            <BottomTabBar {...props} />
        </BlurView>
    );
    return (
        <MainTabBar.Navigator
            tabBar={TabBar}
            initialRouteName={INITIAL_ROUTE_NAME}
            screenOptions={
                ({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused
                                ? 'ios-bookmarks'
                                : 'md-bookmark';
                        } else if (route.name === 'Settings') {
                            iconName = focused ? 'ios-list-box' : 'ios-list';
                        }
                        return <TabBarIcon name={iconName} size={size} color={color}/>;
                    },
                })}
            tabBarOptions={{
                activeTintColor: Colors.orangeColor,
                inactiveTintColor: 'gray',
                style: {
                    borderTopColor: Colors.orangeColor,
                    borderTopWidth: 2.5,
                    backgroundColor: Platform.OS === 'ios' ? 'transparent' : Colors.tabBarColor2
                }
            }}>
            <MainTabBar.Screen name="Home" options={{header: () => null}} component={HomeScreen}/>
            <MainTabBar.Screen name="Settings" options={{header: () => null}} component={LinksScreen}/>

        </MainTabBar.Navigator>
    );
}
//<MainTabBar.Screen name="Reservation" component={ReservationScreen}/>

function getHeaderTitle(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
    switch (routeName) {
        case 'Home':
            return '';
        case 'Settings':
            return 'Links to learn more';
        case 'Reservation':
            return 'Reservations'
    }
}

function showHeader(route) {
    const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;
    switch (routeName) {
        case 'Home':
            return false;
        case 'Settings':
            return false;
        case 'Reservation':
            return true;
    }
}


const localStyles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    notBlurred: {
        ...StyleSheet.absoluteFill,
        // top: Constants.statusBarHeight,
    },
});


