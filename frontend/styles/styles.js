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
        color: Colors.textColor,
        lineHeight: 24,
        textAlign: 'center',
    },
    getCardText: {
        fontSize: 20,
        color: Colors.textColorWhite,
        fontWeight: 'bold',
        lineHeight: 24,
        textAlign: 'left',
    },
    cardSubText: {
        fontSize: 17,
        color: Colors.textColorWhite,
        lineHeight: 20,
        textAlign: 'left',
        marginBottom: 10,
    },
    getHeaderText: {
        fontSize: 35,
        color: Colors.textColorWhite,
        //lineHeight: 24,
        textAlign: 'left',
        fontWeight:'bold',
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
        color: Colors.textColor,
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

});
