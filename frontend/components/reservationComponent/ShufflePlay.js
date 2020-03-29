import * as React from "react";
import {
    View, Text, StyleSheet, TouchableOpacity, TouchableWithoutFeedback
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
export const BUTTON_HEIGHT = 60;
export const BUTTON_WIDTH = 200;

export default ({props}) => {
        return (
            <View style={styles.gradientContainer}>
              <TouchableOpacity style={styles.buttonContainer} onPress={() => {
               props.navigation.navigate("Persons");
              }}>
                <LinearGradient
                    colors={['#ffe003', '#ffab20', '#ff9214', '#ff5e0e', '#ff6511', '#ff3324']}
                    start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                    style={{borderRadius: 5}}
                >
                  <View style={{
                    margin: 1,
                    backgroundColor: 'black',
                    borderRadius: 5
                  }}>
                    <Text style={{
                      textAlign: 'center',
                      color: 'orange',
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
        );

}


const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
        backgroundColor: "#1ed760",
        height: BUTTON_HEIGHT,
        width: BUTTON_WIDTH,
        borderRadius: 32,
        justifyContent: "center",
    },
    label: {
        color: "white",
        fontSize: 14,
        textAlign: "center",
        fontWeight: "600",
    },
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
        backgroundColor: "black",
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
        backgroundColor: "black",
        elevation: 2,
        borderBottomColor: "orange",
        borderBottomWidth: 0.3,
    },
    btncontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
    },
    buttonContainer: {
      height: BUTTON_HEIGHT,
      width: BUTTON_WIDTH,
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
        //justifyContent: 'flex-start',
        justifyContent: "center",
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
        color: "orange",
        lineHeight: 24,
        textAlign: 'center',
    },
    getCardText: {
        fontSize: 25,
        color: "orange",
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
        color: "white",
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

    tabBarInfoContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        backgroundColor: '#fbfbfb',
        paddingVertical: 20,
    },
    tabBarInfoText: {
        fontSize: 17,
        color: "orange",
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

//export default ShufflePlay;
