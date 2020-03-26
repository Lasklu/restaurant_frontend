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
export default class ClockScreen extends React.Component {
    constructor(props) {
        super(props);
        this.numberPersons= this.props.route.params.numberPersons;
        this.date = this.props.route.params.date;
        this.state = {
            currentPosition: 1
        };

    }
    componentDidMount() {
        setTimeout( () => {
           this.setTimePassed() ;
        },500);
    }

    setTimePassed() {
        this.setState({currentPosition: 2});
    }

//<Text style={styles.innerText}> Berlin</Text>
    render() {
        let data = [{
            value: '14:00',
        }, {
            value: '14:30',
        }, {
            value: '15:00',
        }, {
            value: '15:30',
        }, {
            value: '16:00',
        }, {
            value: '16:30',
        }, {
            value: '17:00',
        }, {
            value: '17:30',
        }];


        return (
            <View style={styles2.container}>


                <StepIndicator
                    customStyles={customStyles}
                    stepCount={4}
                    currentPosition={this.state.currentPosition}
                    labels={labels}
                />

                <Text style={styles2.getHeaderText}>Um wie viel Uhr?</Text>

                <View style={{marginLeft: '8%', marginRight: '8%'}}>
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
                            <View style={{marginLeft: '13%', marginRight: '13%', marginBottom: '5%', marginTop: '0%'}}>
                                <Dropdown
                                    onPress={() => blur()}
                                    textColor={Colors.orangeColor}
                                    baseColor={Colors.orangeColor}
                                    itemColor={Colors.orangeColor}
                                    tintColor={'white'}
                                    placeholderTextColor={'gray'}
                                    borderBottomColor={Colors.orangeColor}
                                    selectedItemColor={Colors.orangeColor}
                                    disabledItemColor={Colors.orangeColor}
                                    label='Uhrzeit'
                                    //style = {{color: 'gray'}}

                                    pickerStyle={{
                                        backgroundColor: Colors.tabBarColor,
                                        borderWidth: 2,
                                        borderColor: Colors.orangeDarkColor
                                    }}
                                    //itemContainerStyle={{backgroundColor:"blue",textColor:"white"}}
                                    //itemTextStyle={{backgroundColor:"blue",textColor:"white"}}
                                    inputContainerStyle={{borderBottomColor: 'gray', borderBottomWidth: 0}}
                                    data={data}
                                    onChangeText={(time) => setTimeout(() => {
                                        this.props.navigation.navigate('Confirmation', {
                                            numberPersons: this.numberPersons,
                                            date: this.date,
                                            time: time
                                        })
                                    }, 1100)}
                                    //dropdownPosition={5}
                                />


                            </View>


                        </View>
                    </LinearGradient>

                </View>
                <Text></Text>
                <Text></Text>
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
