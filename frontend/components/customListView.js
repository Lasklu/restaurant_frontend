import React from 'react';
import {View, ListView, FlatList, StyleSheet, Text, Image} from 'react-native';
import {Button} from 'react-native-elements'
import Colors from "../constants/Colors";
import {CustomRow} from './customRow';
import { IconButton } from 'react-native-paper';
import  Ionicons  from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import TouchableHighlight from "react-native-web";

const styles = StyleSheet.create({
    containerListView: {
        flex: 1,
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 10,
        marginLeft:2,
        marginRight:0,
        marginTop: 0,
        marginBottom: 8,
        borderRadius: 2,
        backgroundColor: Colors.screenBarColor,
        elevation: 2,
    },
    btncontainer: {
        flex: 2,
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
        flex: 1,
        flexDirection: 'column',
        marginLeft: 12,
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

function CustomListView(itemList){

}
const CustomListview = ({ itemList }) => (
    <View style={styles.container}>
        <FlatList
            data={itemList}
            renderItem={({ item }) => <View style={styles.container}>
                <Image source={{ uri: item.image_url }} style={styles.photo} />
                <View style={styles.btncontainer}>
                    <View style={styles.container_text}>
                        <Text style={styles.title}>
                            {item.title}
                        </Text>
                        <Text style={styles.description}>
                            {item.description}
                        </Text>
                    </View>
                    <View style={styles.buttonContainer}>
                    <IconButton
                        icon="chevron-right"
                        color={Colors.textColor}
                        size={40}
                        onPress={() => console.log('Pressed')}
                    />
                    </View>
                </View>
            </View>
            }
        />

    </View>
);




export default CustomListview;
