import * as React from 'react';
import {Dropdown} from 'react-native-material-dropdown';
import {Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import Colors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";
import {ScrollView} from "react-native-gesture-handler";
import StepIndicator from "react-native-step-indicator";


const labels = ["Personen","Datum","Uhrzeit", "Bestätigung"];
const customStyles = {
    stepIndicatorSize: 25,
    currentStepIndicatorSize: 30,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 3,
    stepStrokeCurrentColor: Colors.orangeColor,
    stepStrokeWidth: 3,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#fe7013',
    stepIndicatorUnFinishedColor: '#000000',
    stepIndicatorCurrentColor: '#000000',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 13,
    currentStepLabelColor: '#fe7013'
};
let set = 0;


//import ModernHeader from "@freakycoder/react-native-header-view/lib/src/components/ModernHeader/ModernHeader";
let styles = require('../../styles/styles');
export default class ConfirmationScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPosition: 2
        };

    }
    componentDidMount() {
        setTimeout( () => {
            this.setTimePassed() ;
        },1000);
    }

    setTimePassed() {
        this.setState({currentPosition: 3});
    }

//<Text style={styles.innerText}> Berlin</Text>
    render() {

        let data = [{
            value: '1',
        }, {
            value: '2',
        }, {
            value: '3',
        }, {
            value: '3',
        }, {
            value: '3',
        }, {
            value: '3',
        }, {
            value: '3',
        }, {
            value: '3',
        }];


        return (
            <View style={styles2.container}>


                <StepIndicator
                    customStyles={customStyles}
                    stepCount={4}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                />

                <Text style={styles2.getHeaderText}>Bitte prüfe deine Eingaben</Text>

                <View style={{marginLeft: '8%', marginRight: '8%', marginBottom:'10%'}}>
                    <LinearGradient
                        colors={['#ffe003', '#ffab20', '#ff9214', '#ff5e0e', '#ff6511', '#ff3324']}
                        //colors={['#00FFFF', '#17C8FF', '#329BFF', '#4C64FF', '#6536FF', '#8000FF']}
                        start={{x: 0.0, y: 1.0}} end={{x: 1.0, y: 1.0}}
                        style={{borderRadius: 5}}
                    >
                        <View style={{
                            margin: 2,
                            backgroundColor: Colors.screenBarColor,
                            borderRadius: 5,
                        }}>
                            <View style={{marginLeft: '5%', marginRight: '13%', marginBottom: '5%', marginTop: '0%'}}>
                                <Text style ={styles2.getCardText}>Personen:</Text>
                                <Text style ={styles2.getCardText}>Datum:</Text>
                                <Text style ={styles2.getCardText}>Uhrzeit:</Text>


                            </View>


                        </View>
                    </LinearGradient>

                </View>

                <View style={styles.gradientContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        //this.props.navigation.navigate("Root")

                    }}>
                        <LinearGradient
                            colors={['#00ffd8', '#00ff99', '#1fff36', '#26ff00']}
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
                                    color: Colors.confirmationColor,
                                    padding: 15,
                                    marginLeft: 1,
                                    marginRight: 1,
                                    fontWeight: '200',
                                    fontSize: 20,
                                    width: 198
                                }}>Bestätigen</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>
                <View style={styles.gradientContainer}>
                    <TouchableOpacity style={styles.buttonContainer} onPress={() => {
                        this.props.navigation.navigate("Root")

                    }}>
                        <LinearGradient
                            colors={['#ff0081', '#ff035a', '#ff0a19', '#ff2435']}
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
                                    color: Colors.cancelColor,
                                    padding: 15,
                                    marginLeft: 1,
                                    marginRight: 1,
                                    fontWeight: '200',
                                    fontSize: 20,
                                    width: 198
                                }}>Abbruch</Text>
                            </View>
                        </LinearGradient>
                    </TouchableOpacity>

                </View>

            </View>
        );


    }

}
const styles2 = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: Colors.screenBarColor,
        justifyContent: 'center',
    },
    getCardText: {
        marginTop:'10%',
        //marginBottom:'5%',
        fontSize: 25,
        color: Colors.orangeColor,
        fontWeight: '200',
        lineHeight: 24,
        textAlign: 'left',
    },
    getHeaderText: {
        fontSize: 35,
        color: Colors.whiteColor,
        //lineHeight: 24,
        textAlign: 'left',
        fontWeight: 'bold',
        marginBottom: '15%',
        marginTop: '12%'
    },


});
