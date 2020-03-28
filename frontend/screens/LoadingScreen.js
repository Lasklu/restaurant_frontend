
import * as React from 'react';

import {
    Image,
    ImageBackground,
    Platform,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    FlatList,
    TouchableHighlight
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import {MonoText} from '../components/StyledText';
import {SearchBar, Card, ListItem, Button2, Icon,} from 'react-native-elements';
import {Container, Header, Content, CardItem, Thumbnail, Button, Left, Body, Right} from 'native-base';
import CustomListview from "../components/customListView";
import {CustomRow} from "../components/customRow";
import {Constants, LinearGradient} from 'expo';
import MapView from 'react-native-maps'
//import Carousel from 'react-native-snap-carousel';
import Carousel from '../components/Carousel'
const customStyle = [
    {
        elementType: 'geometry',
        stylers: [
            {
                color: '#242f3e',
            },
        ],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#746855',
            },
        ],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#242f3e',
            },
        ],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
            {
                color: '#263c3f',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#6b9a76',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                color: '#38414e',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#212a37',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9ca5b3',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#746855',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#1f2835',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#f3d19c',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
            {
                color: '#2f3948',
            },
        ],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#17263c',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#515c6d',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#17263c',
            },
        ],
    },
];
let styles = require('../styles/styles');
//import ModernHeader from "@freakycoder/react-native-header-view/lib/src/components/ModernHeader/ModernHeader";


export default class LoadingScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            search: '',
            data: [],
            mapRegion: {
                latitude: 37.78825,
                longitude: -122.4324,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            },
        };
        this.arrayholder = [];
    }
    _handleMapRegionChange = mapRegion => {
        this.setState({ mapRegion });
    };
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

// <Image style={}source={require('../assets/images/icon_rest.png')}></Image>
    render() {
        const {search} = this.state;
        return (

            <View style={styles.container}>
                <MapView
                    customMapStyle={customStyle}
                    style={{
                        flex: 1
                    }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
            </View>
        );
    }
}
//CARDIMAGE
LoadingScreen.navigationOptions = {
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




