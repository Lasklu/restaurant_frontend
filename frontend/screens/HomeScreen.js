import * as React from 'react';
import {Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import { SearchBar,Card, ListItem, Button2, Icon,  } from 'react-native-elements';
import { Container, Header, Content, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
let styles = require('../styles/styles');
//import ModernHeader from "@freakycoder/react-native-header-view/lib/src/components/ModernHeader/ModernHeader";

import CustomListview from "../components/customListView";
import {CustomRow} from "../components/customRow";

export default class HomeScreen extends React.Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };
  getData(){
        return [
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
            {
                key: 1, title: 'Albert Einstein',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://vivirtupasion.com/wp-content/uploads/2016/05/DANI_PERFILzoomCircle.png'
            },
            {
                key: 2,
                title: 'Isaac newton',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
                image_url: 'http://3.bp.blogspot.com/-jd5x3rFRLJc/VngrSWSHcjI/AAAAAAAAGJ4/ORPqZNDpQoY/s1600/Profile%2Bcircle.png'
            },
        ]
  }

  render() {
    const { search } = this.state;
  return (
    <View style={styles.container}>

        <ImageBackground source={require('../assets/images/berlin.jpg')} style={styles.backImage} imageStyle=
            {{opacity:0.7}}>
            <Text style={styles.innerText}> Berlin</Text>
        </ImageBackground>

        <Text> </Text>
        <Text style={styles.getHeaderText}>  Restaurants</Text>
        <Text> </Text>
        <SearchBar
            onChangeText={''}
            onClearText={''}
            searchIcon={{ size: 24 }}
            placeholderTextColor={Colors.textColorWhite}
            placeholder=" Restaurants suchen..."
            value={this.state.search}
            containerStyle={{
              padding:0
            }}
        />
        <View
            style={{
                borderBottomColor: Colors.textColor,
                borderBottomWidth: 2.5,
            }}
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
            <View style={styles.container}>
                <CustomListview
                    itemList={this.getData()}
                />
            </View>
      </ScrollView>
    </View>
  );
  }
}
//CARDIMAGE
HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}


