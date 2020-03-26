import * as React from 'react';
import { Dropdown } from 'react-native-material-dropdown';
import {Image, ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, FlatList} from 'react-native';
import Colors from "../../constants/Colors";
import {LinearGradient} from "expo-linear-gradient";

//import ModernHeader from "@freakycoder/react-native-header-view/lib/src/components/ModernHeader/ModernHeader";
let styles = require('../../styles/styles');
export default class ClockScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

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
        }


        ];



        return (
            <View style={styles.container}>
                <Text></Text>
                <Text></Text>
                <Text></Text>

                <View style={{   justifyContent:'center',  flex:1,marginLeft:'8%', marginRight:'8%' }}>
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
                        <View style={{marginLeft:'13%', marginRight:'13%', marginBottom:'5%', marginTop:'0%'}}>
                        <Dropdown
                            onPress={()=>blur()}
                            textColor={Colors.orangeColor}
                            baseColor={Colors.orangeColor}
                            itemColor={Colors.orangeColor}
                            tintColor={'white'}
                            placeholderTextColor = {'gray'}
                            borderBottomColor={Colors.orangeColor}
                            selectedItemColor={Colors.orangeColor}
                            disabledItemColor={Colors.orangeColor}
                            label='Anzahl Personen'
                            //style = {{color: 'gray'}}

                            pickerStyle={{backgroundColor:Colors.tabBarColor,borderWidth: 2, borderColor:Colors.orangeDarkColor}}
                            //itemContainerStyle={{backgroundColor:"blue",textColor:"white"}}
                            //itemTextStyle={{backgroundColor:"blue",textColor:"white"}}
                            inputContainerStyle={{ borderBottomColor: 'gray', borderBottomWidth: 0 }}
                            data={data}
                            onChangeText={() =>
                                setTimeout(() => { this.props.navigation.navigate('Clock')  }, 500)
                            }
                            //dropdownPosition={5}
                        />
                        </View>
                    </View>
                </LinearGradient>
                </View>
            </View>
        );
    }
}
