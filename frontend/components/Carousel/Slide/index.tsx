import React from 'react'
import {StyleSheet, View, Text, ImageBackground, Dimensions} from 'react-native'

import { styles } from './styles'
let width_view;
let height_view;
const { width: viewportWidth } = Dimensions.get('window');
export const Slide = (props: any) => {
  const { title } = props;
    //const {width, height} = Dimensions.get("window");
  return (
    <View style={styles.slide}>
        <Text>HAl</Text>
    </View>
  );
};

const mainStyles = StyleSheet.create({
    backImage:{
        height: 200,
        width:500,
        justifyContent: 'center',
        alignItems: 'flex-start'
    },
    testImage: {
        flex: 1,


    },
    innerText:{
        color:'white',
        fontSize: 70,
        fontWeight: 'bold',
    },
});

export default Slide;
