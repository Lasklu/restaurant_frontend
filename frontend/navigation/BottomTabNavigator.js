import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcon from '../components/TabBarIcon';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Colors from "../constants/Colors";

const BottomTab = createBottomTabNavigator();
const INITIAL_ROUTE_NAME = 'Home';

export default function BottomTabNavigator({ navigation, route }) {
  // Set the header title on the parent stack navigator depending on the
  // currently active tab. Learn more in the documentation:
  // https://reactnavigation.org/docs/en/screen-options-resolution.html
  navigation.setOptions({
      headerTitle: getHeaderTitle(route),
      headerTintColor: Colors.textColor,
      headerTitleStyle: {
          fontWeight: 'bold',
      },
      headerShown: false,
      headerStyle:{backgroundColor:Colors.screenBarColor},

  });
  return (
    <BottomTab.Navigator initialRouteName={INITIAL_ROUTE_NAME}
                         screenOptions={
                             ({ route }) => ({
                             tabBarIcon: ({ focused, color, size }) => {
                                 let iconName;
                                 if (route.name === 'Home') {
                                     iconName = focused
                                         ? 'ios-bookmarks'
                                         : 'md-bookmark';
                                 } else if (route.name === 'Settings') {
                                     iconName = focused ? 'ios-list-box' : 'ios-list';
                                 }
                                 return <TabBarIcon name={iconName} size={size} color={color} />;
                             },
                         })}
                         tabBarOptions={{
                             activeTintColor: Colors.textColor,
                             inactiveTintColor: 'gray',
                             style: {
                                 backgroundColor: Colors.tabBarColor,
                             }
                         }}>
      <BottomTab.Screen name="Home" component={HomeScreen}/>
      <BottomTab.Screen name="Settings" component={LinksScreen}/>
    </BottomTab.Navigator>
  );
}

function getHeaderTitle(route) {
  const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME;

  switch (routeName) {
    case 'Home':
      return 'How to get started';
    case 'Links':
      return 'Links to learn more';
  }
}
