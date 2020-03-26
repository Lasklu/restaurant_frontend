import * as React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {SplashScreen} from 'expo';
import * as Font from 'expo-font';
import {Ionicons} from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Colors from './constants/Colors';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import useLinking from './navigation/useLinking';
import LinksScreen from "./screens/LinksScreen";
import ReservationScreen from "./screens/reservationScreen";
import PersonsScreen from "./screens/reservationscreens/personsScreen"
import ClockScreen from "./screens/reservationscreens/clockScreen";

const Stack = createStackNavigator();

export default function App(props) {
    const [isLoadingComplete, setLoadingComplete] = React.useState(false);
    const [initialNavigationState, setInitialNavigationState] = React.useState();
    const containerRef = React.useRef();
    const {getInitialState} = useLinking(containerRef);

    // Load any resources or data that we need prior to rendering the app
    React.useEffect(() => {
        async function loadResourcesAndDataAsync() {
            try {
                SplashScreen.preventAutoHide();

                // Load our initial navigation state
                setInitialNavigationState(await getInitialState());

                // Load fonts
                await Font.loadAsync({
                    ...Ionicons.font,
                    'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
                });
            } catch (e) {
                // We might want to provide this error information to an error reporting service
                console.warn(e);
            } finally {
                setLoadingComplete(true);
                SplashScreen.hide();
            }
        }

        loadResourcesAndDataAsync();
    }, []);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return null;
    } else {
        return (
            <View style={styles.container}>
                {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                <NavigationContainer ref={containerRef} initialState={initialNavigationState}>
                    <Stack.Navigator>
                        <Stack.Screen name="Root" component={BottomTabNavigator}/>
                        <Stack.Screen name="Reservation" options={{
                            title: 'Reservations',
                            headerShown: true,

                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.orangeColor,

                            },
                            headerTintColor: Colors.orangeColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={ReservationScreen}/>
                        <Stack.Screen name="Persons" options={{
                            title: 'Reservations',
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.orangeColor,

                            },
                            headerTintColor: Colors.orangeColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={PersonsScreen}/>
                        <Stack.Screen name="Clock" options={{
                            title: 'Clock',
                            headerShown: false,
                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.orangeColor,

                            },
                            headerTintColor: Colors.orangeColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={ClockScreen}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
