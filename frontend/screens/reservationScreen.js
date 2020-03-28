import * as React from 'react';
import {Image, ImageBackground, Animated, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
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
        return (
            <View style={styles.container}>
            <View style={styles2.imgContainer}>
                <ImageBackground source={require('../assets/images/rest1.jpg')} resizeMode="cover" style={styles2.backImage} imageStyle={{opacity: 1}} />
            </View>
                <ScrollView style={styles2.container} contentContainerStyle={styles2.contentContainer}>
                    <Text style={styles2.getHeaderText}>Restaurant Schatzkammer</Text>
                    <Text> </Text>
                    <View style={{alignItems:'center', justifyContent: 'space-between', flex: 0}}>
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
                            style={{width:'100%', alignItems: 'stretch'}}
                            onMaxError={() => {
                                console.log("hd")
                            }}
                        />
                    </View>

                    <Text></Text>
                    <Text></Text>

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
        alignItems:'stretch',
        flex:1,
        paddingTop: 10,
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
        marginBottom: 0,
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
    dropdownStyle:{
    },


    gradientContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: 'transparent',
    },
    reservationButtonText: {
        textAlign: 'center',
        color: '#4C64FF',
        padding: 15,
        marginLeft: 1,
        marginRight: 1,
        width: 198
    },
    containerBox:{
        backgroundColor: 'rgba(255,0,0,.6)'
    },
    developmentModeText: {
        marginBottom: 20,
        color: 'rgba(255,255,255,0.4)',
        fontSize: 14,
        lineHeight: 19,
        textAlign: 'center',
    },

    welcomeContainer: {
        alignItems: 'center',
        marginTop: 10,
        marginBottom: 20,
    },
    welcomeImage: {
        width: 100,
        height: 80,
        resizeMode: 'contain',
        marginTop: 3,
        marginLeft: -10,
    },
    getStartedContainer: {
        alignItems: 'center',
        marginHorizontal: 50,
    },
    homeScreenFilename: {
        marginVertical: 7,
    },
    codeHighlightText: {
        color: 'rgba(96,100,109, 0.8)',
    },
    codeHighlightContainer: {
        backgroundColor: 'rgba(0,0,0,0.05)',
        borderRadius: 3,
        paddingHorizontal: 4,
    },
    getStartedText: {
        fontSize: 17,
        color: Colors.orangeColor,
        lineHeight: 24,
        textAlign: 'center',
    },
    getCardText: {
        fontSize: 25,
        color: Colors.orangeColor,
        fontWeight: '200',
        lineHeight: 24,
        textAlign: 'left',
    },
    imgContainer:{
        backgroundColor:'transparent',
        marginTop:'0%',
        height: '30%',
        width:'100%',
    },
    backImage:{
        height: '100%',
        width:'100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    innerText:{
        marginLeft:'5%',
        color:'white',
        fontSize: 45,
        fontWeight: 'bold',
        //marginTop:'10%'
    },
    cardSubText: {
        fontSize: 17,
        color: 'green',
        lineHeight: 20,
        textAlign: 'left',
        fontWeight: '200',
        marginBottom: 10,
    },
    getHeaderText: {
        fontSize: 35,
        color: Colors.whiteColor,
        //lineHeight: 24,
        marginLeft:'0%',
        textAlign: 'left',
        fontWeight:'bold',
    },
    containerButton: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    button: {
        backgroundColor: 'green',
        width: '40%',
        height: 40
    },
    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        ...Platform.select({
            ios: {
                shadowColor: 'black',
                shadowOffset: { width: 0, height: -3 },
                shadowOpacity: 0.1,
                shadowRadius: 3,
            },
            android: {
                elevation: 20,
            },
        }),
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: Colors.orangeColor,
        textAlign: 'center',
    },
    navigationFilename: {
        marginTop: 5,
    },
    helpContainer: {
        marginTop: 15,
        alignItems: 'center',
    },
    helpLink: {
        paddingVertical: 15,
    },
    helpLinkText: {
        fontSize: 14,
        color: '#2e78b7',
    },

    //LISTVIEW
    imageContainer: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:16,
        marginRight:16,
        marginTop: 8,
        marginBottom: 8,
        borderRadius: 5,
        backgroundColor: '#FFF',
        elevation: 2,
    },
    listViewTitle: {
        fontSize: 16,
        color: '#000',
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    listViewContainer_text: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
        justifyContent: 'center',
    },
    listViewDescription: {
        fontSize: 11,
        fontStyle: 'italic',
    },
    listViewPhoto: {
        height: 50,
        width: 50,
    },

});


