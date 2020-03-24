import * as React from 'react';
import {Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import {MonoText} from '../components/StyledText';
import {SearchBar, Card, ListItem, Button2, Icon,} from 'react-native-elements';
import {Container, Header, Content, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';
import CustomListview from "../components/customListView";
import {CustomRow} from "../components/customRow";
//import Carousel from 'react-native-snap-carousel';
import Carousel from '../components/Carousel'

let styles = require('../styles/styles');
//import ModernHeader from "@freakycoder/react-native-header-view/lib/src/components/ModernHeader/ModernHeader";

const data = [
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
];
export default class HomeScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            data: []
        };
        this.arrayholder = [];
    }

    updateSearch = search => {
        console.log(search);
        this.setState({search});
        //this.filterData();
        console.log("GHJAGDKJW")
    };
    searchFilterText = text => {
        this.arrayholder = data;
        console.log(text);
        const newData = this.arrayholder.filter(item => {
            const itemData = `${item.title.toUpperCase()}`;
            console.log(itemData);
            const textData = text.toUpperCase();
            console.log('HALLI')
            console.log(itemData.indexOf(textData));
            return itemData.indexOf(textData) > -1;
        });
        console.log(newData);

        this.setState({data: newData});
    };
    _renderItem = ({item, index}) => {
        return (
            <View style={styles.slide}>
                <Text style={styles.title}>{item.title}</Text>
            </View>
        );
    }

/*<Carousel
style='slide'
items={[{
    title: 'Welcome, swipe to continue.',
}, {
    title: 'About feature X.',
}, {
    title: 'About feature Y.',
}]}
/>*/

    render() {
        const {search} = this.state;
        return (
            <View style={styles.container}>
                <ImageBackground source={require('../assets/images/berlin.jpg')} style={styles.backImage} imageStyle=
                    {{opacity: 0.7}}>
                    <Text style={styles.innerText}> Berlin</Text>
                </ImageBackground>

                <Text> </Text>
                <Text style={styles.getHeaderText}> Restaurants</Text>
                <Text> </Text>
                <SearchBar
                    //onChangeText={text => this.searchFilterText(text)}
                    onClearText={''}
                    searchIcon={{size: 24}}
                    placeholderTextColor={Colors.orangeColor}
                    placeholder=" Restaurants suchen..."
                    value={this.state.search}
                    containerStyle={{
                        padding: 0
                    }}
                />
                <View
                    style={{
                        borderBottomColor: Colors.orangeColor,
                        borderBottomWidth: 2.5,
                    }}
                />
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
                    <View style={styles.container}>

                        <Text></Text>
                        <Text></Text>
                        <CustomListview
                            itemList={data}
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


