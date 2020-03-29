import * as React from "react";
import { View, StyleSheet } from "react-native";
import Animated from "react-native-reanimated";
import { Album } from "./Model";
import Content from "./Content";
import Cover from "./Cover";

interface AlbumProps {
  album: Album;
}

const { Value } = Animated;

export default ({album, props})=>{

 const  y = new Value(0);

  //const props = this.props.properties;



    return (

        <View style={styles.container}>
          <Cover y={y} album={album} />
          <Content y={y} album={album} props={props}/>
        </View>
    );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
});
