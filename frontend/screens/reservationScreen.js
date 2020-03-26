import * as React from 'react';
import {Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import {Button} from 'react-native-elements';
import TabBarIcon from '../components/TabBarIcon';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import {TagSelect} from 'react-native-tag-select-max';
import {Ionicons} from '@expo/vector-icons';
import {MonoText} from '../components/StyledText';
import {SearchBar, Card, ListItem, ThemeProvider, colors,} from 'react-native-elements';
import * as native from 'native-base';
import CustomListview from "../components/customListView";
//import LinearGradient from 'react-native-svg'
import {CustomRow} from "../components/customRow";
import BorderedButton from '../components/BorderedButton';
import Tags from "react-native-tags";
import Carousel from '../components/Carousel'
import TagInput from 'react-native-tag-input';
//import { LinearGradient } from "expo";
//import LinearGradient from "react-native-linear-gradient";
import {LinearGradient} from 'expo-linear-gradient';
import {IconButton} from "react-native-paper";
import MapView from "react-native-maps";
//const LinearGradient = require('react-native-linear-gradient').default


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
export default class ReservationScreen extends React.Component {
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

//<Text style={styles.innerText}> Berlin</Text>
    render() {
        const iconSize = 15;
        const color = Colors.orangeColor;
        const data = [
            {
                id: 1,
                label: <Ionicons name='ios-globe' size={iconSize} color={color}><Text
                    style={{fontSize: 13}}> Website</Text></Ionicons>
            },
            {
                id: 2,
                label: <Ionicons name='ios-beer' size={iconSize} color={color}><Text style={{fontSize: 13}}> Menu</Text></Ionicons>
            },
            {id: 3, label: <Ionicons name='ios-call' size={iconSize} color={color}></Ionicons>},
            {
                id: 4,
                label: <Ionicons name='ios-clock' size={iconSize} color='green'><Text
                    style={{fontSize: 13}}> Geschlossen</Text></Ionicons>
            },

        ];
        const {search} = this.state;

        //BEGIN ANI
        return (

            <View style={styles.container}>

                    <ImageBackground source={require('../assets/images/rest1.jpg')} style={styles.backImage} imageStyle=
                        {{opacity: 1}}>

                    </ImageBackground>
                <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

                    <Text style={styles.getHeaderText}>Restaurant Schatzkammer</Text>
                    <Text> </Text>
                    <View  style={{alignItems:'center',justifyContent:'space-between', flex: 1}}>
                        <TagSelect
                            data={data}
                            max={500}
                            itemStyle={{backgroundColor: Colors.screenBarColor, borderColor: Colors.orangeColor,}}
                            itemStyleSelected={{
                                backgroundColor: Colors.screenBarColor,
                                borderColor: Colors.orangeColor
                            }}
                            itemLabelStyle={{color: 'white'}}
                            onItemPress={() => console.log("ABCD")}
                            style={{alignItems: 'center'}}
                            onMaxError={() => {
                                console.log("hd")
                            }}
                        />
                    </View>
                    <Text></Text>
                    <Text></Text>
                    <View style={styles2.mapContainer}>

                    </View>
                    <View style={styles.gradientContainer}>
                        <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                            this.props.navigation.navigate("Persons")

                        }}>
                            <LinearGradient
                                colors={['#ffe003', '#ffab20', '#ff9214', '#ff5e0e', '#ff6511', '#ff3324']}
                                //colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                                start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                                style={{borderRadius: 5}}
                            >
                                <View style={{
                                    margin: 1,
                                    backgroundColor: Colors.screenBarColor,
                                    borderRadius: 5
                                }}>

                                    <Text style={{
                                        textAlign: 'center',
                                        color: Colors.orangeColor,
                                        padding: 15,
                                        marginLeft: 1,
                                        marginRight: 1,
                                        fontWeight: '200',
                                        fontSize: 20,
                                        width: 198
                                    }}>Reservieren</Text>
                                </View>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                    <View>
                    </View>
                </ScrollView>
            </View>



        );
    }
}
const theme = {
    Button: {
        titleStyle: {
            color: Colors.orangeColor,
        },


    },
};
//CARDIMAGE
ReservationScreen.navigationOptions = {
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

const styles2 = StyleSheet.create({
    contentContainer: {
        paddingTop: 20,
    },
    mapContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

    },
    circleGradient: {
        backgroundColor: "white",
        borderRadius: 5
    },
    visit: {
        margin: 4,
        paddingHorizontal: 6,
        textAlign: "center",
        backgroundColor: "white",
        color: '#008f68',
        fontSize: 12
    },
    containerListView: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 2,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 8,
        borderRadius: 2,
        backgroundColor: Colors.screenBarColor,
        elevation: 2,
    },
    overcontainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft: 2,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 8,
        borderRadius: 2,
        backgroundColor: Colors.screenBarColor,
        elevation: 2,
        borderBottomColor: Colors.orangeColor,
        borderBottomWidth: 0.3,
    },
    btncontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    buttonContainer: {
        flexDirection: "row-reverse",
        flex: 1,
    },
    title: {
        fontSize: 16,
        color: '#ffffff',
    },
    container_text: {
        flex: 2,
        flexDirection: 'column',
        marginLeft: 7,
        justifyContent: 'center',
        color: '#ffffff',
    },
    description: {
        fontSize: 11,
        fontStyle: 'italic',
        color: '#ffffff',
    },
    photo: {
        height: 50,
        width: 50,
    },

});


