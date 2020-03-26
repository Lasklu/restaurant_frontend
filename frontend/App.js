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
import DateScreen from "./screens/reservationscreens/dateScreen"
import ConfirmationScreen from "./screens/reservationscreens/confirmationScreen"
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
                            title: '',
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.screenBarColor,

                            },
                            headerTintColor: Colors.screenBarColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={PersonsScreen}></Stack.Screen>
                        <Stack.Screen name="Clock" options={{
                            title: '',
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.screenBarColor,

                            },
                            headerTintColor: Colors.orangeColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={ClockScreen}/>
                        <Stack.Screen name="Date" options={{
                            title: '',
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.screenBarColor,

                            },
                            headerTintColor: Colors.orangeColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={DateScreen}/>
                        <Stack.Screen name="Confirmation" options={{
                            title: '',
                            headerShown: true,
                            headerStyle: {
                                backgroundColor: Colors.screenBarColor,
                                shadowColor: Colors.screenBarColor,

                            },
                            headerTintColor: Colors.orangeColor,
                            headerTitleStyle: {
                                //fontWeight: 'bold',
                            },
                        }} component={ConfirmationScreen}/>
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
