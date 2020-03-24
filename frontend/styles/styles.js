'use strict';

import Colors from "../constants/Colors";
import {Platform} from "react-native";

var React = require('react-native');

var {
    StyleSheet,
} = React;

module.exports = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.screenBarColor,
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
    contentContainer: {
        paddingTop: 30,
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
    backImage:{
        height: 200,
        width:500,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    innerText:{
        color:'white',
        fontSize: 45,
        fontWeight: 'bold',
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
    buttonbutton: {
        width: '40%',
        height: 40
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
