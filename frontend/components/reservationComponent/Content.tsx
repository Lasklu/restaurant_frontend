import * as React from "react";
import {
    Dimensions, StyleSheet, View, Text, Platform,
} from "react-native";
import {LinearGradient} from "expo-linear-gradient";
import Animated from "react-native-reanimated";
import {onScroll} from "react-native-redash";
import {TagSelect} from 'react-native-tag-select-max';
import {
    Album, MAX_HEADER_HEIGHT, MIN_HEADER_HEIGHT,
} from "./Model";
import styles2, { colors } from '../../styles/index.style';
import Track from "./Track";
import ShufflePlay, {BUTTON_HEIGHT} from "./ShufflePlay";
import SliderEntry from "../../components/Carousel/SliderEntry"
import Header from "./Header";
import {Ionicons} from "@expo/vector-icons";
import Carousel, {Pagination, ParallaxImage} from 'react-native-snap-carousel';
import styles3 from '../../styles/index.style';
import Carousel2 from '../Carousel/Carousel';
import { sliderWidth, itemWidth } from '../../components/Carousel/SliderEntry.style';
const { width: screenWidth } = Dimensions.get('window');



const {
    interpolate, Extrapolate,
} = Animated;
const SLIDER_1_FIRST_ITEM = 1;
const data = [
    {
        id: 1,
        label: <Ionicons name='ios-globe' size={15} color='orange'><Text
            style={{fontSize: 13}}> Website</Text></Ionicons>
    },
    {
        id: 2,
        label: <Ionicons name='ios-beer' size={15} color='orange'><Text style={{fontSize: 13}}> Menu</Text></Ionicons>
    },
    {id: 3, label: <Ionicons name='ios-call' size={15} color='orange'></Ionicons>},
    {
        id: 4,
        label: <Ionicons name='ios-clock' size={15} color='orange'><Text
            style={{fontSize: 13}}> Geschlossen</Text></Ionicons>
    },

];
export default ({y, album, props}) => {

const items = [
      {
        title: 'Beautiful and dramatic Antelope Canyon',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/UYiroysl.jpg'
      },
      {
        title: 'Earlier this morning, NYC',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/UPrs1EWl.jpg'
      },
      {
        title: 'White Pocket Sunset',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat ',
        illustration: 'https://i.imgur.com/MABUbpDl.jpg'
      },
      {
        title: 'Acrocorinth, Greece',
        subtitle: 'Lorem ipsum dolor sit amet et nuncat mergitur',
        illustration: 'https://i.imgur.com/KZsmUi2l.jpg'
      },
      {
        title: 'The lone tree, majestic landscape of New Zealand',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/2nCt3Sbl.jpg'
      },
      {
        title: 'Middle Earth, Germany',
        subtitle: 'Lorem ipsum dolor sit amet',
        illustration: 'https://i.imgur.com/lceHsT6l.jpg'
      }
    ];
var slider1ActiveSlide = SLIDER_1_FIRST_ITEM;
    const height = interpolate(y, {
        inputRange: [-MAX_HEADER_HEIGHT, -BUTTON_HEIGHT / 2],
        outputRange: [0, MAX_HEADER_HEIGHT + BUTTON_HEIGHT],
        extrapolate: Extrapolate.CLAMP,
    });
    const opacity = interpolate(y, {
        inputRange: [-MAX_HEADER_HEIGHT / 2, 0, MAX_HEADER_HEIGHT / 2],
        outputRange: [0, 1, 0],
        extrapolate: Extrapolate.CLAMP,
    });
 function _renderItemWithParallax ({item, index}, parallaxProps) {
    return (
        <SliderEntry
            data={item}
            even={(index + 1) % 2 === 0}
            parallax={true}
            parallaxProps={parallaxProps}
        />
    );
  }
  function _renderItem ({item, index}, parallaxProps) {
    return (
        <View style={styles.item}>
          <ParallaxImage
              source={{ uri: item.thumbnail }}
              containerStyle={styles.imageContainer}
              style={styles.image}
              parallaxFactor={0.4}
              {...parallaxProps}
          />
          <Text style={styles3.title} numberOfLines={2}>
            { item.title }
          </Text>
        </View>
    );
  }


  return (
        <Animated.ScrollView
            onScroll={onScroll({y})}
            style={styles.container}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={1}
            stickyHeaderIndices={[1]}
        >
            <View style={styles.cover}>
                <Animated.View
                    style={[styles.gradient, {height}]}
                >
                    <LinearGradient
                        style={StyleSheet.absoluteFill}
                        start={[0, 0.3]}
                        end={[0, 1]}
                        colors={["transparent", "rgba(0, 0, 0, 0.2)", "black"]}
                    />
                </Animated.View>
                <View style={styles.artistContainer}>
                    <Animated.Text style={[styles.artist, {opacity}]}>{album.artist}</Animated.Text>
                </View>
            </View>
            <View style={styles.header}>
                <Header y={y} artist={album.artist}/>
                <ShufflePlay props={props}/>
            </View>

            <View style={styles.tracks}>
                <View style={{alignItems: 'center', justifyContent: 'space-around', flex: 0}}>
                    <TagSelect
                        data={data}
                        max={500}
                        itemStyle={{backgroundColor: 'black', borderColor: 'orange',}}
                        itemStyleSelected={{
                            backgroundColor: 'black',
                            borderColor: 'orange'
                        }}
                        itemLabelStyle={{color: 'white'}}
                        onItemPress={() => console.log("ABCD")}
                        style={{width: '100%', selfAlign: 'flex-start'}}
                        onMaxError={() => {
                            console.log("this user clicks very often!")
                        }}
                    />


                </View>
              <View style={styles3.exampleContainer}>
               <Carousel2/>
              </View>


                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text><Text style={{fontSize: 25}}>HAÖÖP</Text><Text
                style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text><Text style={{fontSize: 25}}>HAÖÖP</Text><Text
                style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text><Text style={{fontSize: 25}}>HAÖÖP</Text><Text
                style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text><Text style={{fontSize: 25}}>HAÖÖP</Text><Text
                style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text><Text style={{fontSize: 25}}>HAÖÖP</Text><Text
                style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>
                <Text style={{fontSize: 25}}>HAÖÖP</Text>

            </View>
        </Animated.ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: MIN_HEADER_HEIGHT - BUTTON_HEIGHT / 2,
    },
    cover: {
        height: MAX_HEADER_HEIGHT - BUTTON_HEIGHT,
    },
    gradient: {
        position: "absolute",
        left: 0,
        bottom: 0,
        right: 0,
        alignItems: "center",
    },
    artistContainer: {
        ...StyleSheet.absoluteFillObject,
        marginBottom: '50%',
        justifyContent: "center",
        alignItems: "center",
    },
    artist: {
        textAlign: "center",
        color: "white",
        fontSize: 48,
        fontWeight: "bold",
    },
    header: {
        //marginTop: 0,
        marginTop: -BUTTON_HEIGHT,
    },
    tracks: {
        paddingTop: '10%',
        backgroundColor: "black",
    },

      item: {
        width: screenWidth - 60,
        height: screenWidth - 60,
      },


    imageContainer: {
        flex: 1,
        marginBottom: Platform.select({ios: 0, android: 1}), // Prevent a random Android rendering issue
        backgroundColor: 'white',
        borderRadius: 8,
    },
    image: {
        ...StyleSheet.absoluteFillObject,
        resizeMode: 'cover',
    },
});
