import * as React from 'react';
import { Platform, StyleSheet, Text, StatusBar,} from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import {Ionicons} from '@expo/vector-icons';

import Album from "../components/reservationComponent/Album";
import {Album as AlbumModel} from "../components/reservationComponent/Model";

const restaurant = {
    name: 'Restaurant Schatzkamer',
    img: require('../assets/images/rest2.jpg'),
    meta: {
        website: 'lasklu.com',
        menu: 'lasklu.com/menu',
        phoneNumber: 12334,
        opened: true,
    },
};
const album: AlbumModel = {
    name: "Remote Control",
    artist: "Restaurant Schatzkammer",
    release: 2016,
    // eslint-disable-next-line global-require
    cover: require("../assets/images/rest2.jpg"),
    tracks: [
        {name: "Stories Over"},
        {name: "More", artist: "Jan Blomqvist, Elena Pitoulis"},
        {name: "Empty Floor"},
        {name: "Her Great Escape"},
        {name: "Dark Noise"},
        {name: "Drift", artist: "Jan Blomqvist, Aparde"},
        {name: "Same Mistake"},
        {name: "Dancing People Are Never Wrong", artist: "Jan Blomqvist, The Bianca Story"},
        {name: "Back in the Taxi"},
        {name: "Ghosttrack"},
        {name: "Just OK"},
        {name: "The End"},
    ],
};
let styles = require('../styles/styles');


export default class ReservationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            search: '',
            data: []
        };
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
            {
                id: 3,
                label: <Ionicons name='ios-call' size={iconSize} color={color}></Ionicons>},
            {
                id: 4,
                label: <Ionicons name='ios-clock' size={iconSize} color='green'><Text
                    style={{fontSize: 13}}> Geschlossen</Text></Ionicons>
            },

        ];
        return (<>
                <StatusBar barStyle="light-content"/>
                <Album album={album} props={this.props}></Album>
            </>

        )

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
/*
ReservationScreen.navigationOptions = {
    headerShown: false,
    header: null,
};
 */

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
        alignItems: 'stretch',
        flex: 1,
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
    dropdownStyle: {},


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
    containerBox: {
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
    imgContainer: {
        backgroundColor: 'transparent',
        marginTop: '0%',
        height: '30%',
        width: '100%',
    },
    backImage: {
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    innerText: {
        marginLeft: '5%',
        color: 'white',
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
        marginLeft: '0%',
        textAlign: 'left',
        fontWeight: 'bold',
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
                shadowOffset: {width: 0, height: -3},
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
        marginLeft: 16,
        marginRight: 16,
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


