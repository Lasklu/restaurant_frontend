import * as React from 'react';
import {
    StyleSheet, Text, View, Dimensions, AppRegistry, ScrollView, Animated, Image, TouchableOpacity, TouchableHighlight
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import {RectButton} from 'react-native-gesture-handler';
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import Colors from "../constants/Colors";
import {Button} from "react-native-elements";
import {LinearGradient} from "expo-linear-gradient";
import styles from '../styles/styles'
//import TouchableOpacity from "react-native-web/dist/exports/TouchableOpacity";
//import TouchableHighlight from "react-native-web/src/exports/TouchableHighlight";

/*const MapStyle = [

    {
        elementType: 'geometry',
        stylers: [
            {
                color: '#242f3e',
            },
        ],
    },
    {
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#746855',
            },
        ],
    },
    {
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#242f3e',
            },
        ],
    },
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [
            {
                color: '#263c3f',
            },
        ],
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#6b9a76',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [
            {
                color: '#38414e',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#212a37',
            },
        ],
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#9ca5b3',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [
            {
                color: '#746855',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [
            {
                color: '#1f2835',
            },
        ],
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#f3d19c',
            },
        ],
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [
            {
                color: '#2f3948',
            },
        ],
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#d59563',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [
            {
                color: '#17263c',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [
            {
                color: '#515c6d',
            },
        ],
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [
            {
                color: '#17263c',
            },
        ],
    },
];
 */
const MapStyle = [
    {
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#242f3e"
            }
        ]
    },
    {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#d59563"
            }
        ]
    },
    {
        "featureType": "poi.government",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#6b9a76"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#38414e"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#746855"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "weight": 1.5
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#f3d19c"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2f3948"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#060116"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#515c6d"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#17263c"
            }
        ]
    }
];
const Images = [
    {uri: "https://i.imgur.com/sNam9iJ.jpg"},
    {uri: "https://i.imgur.com/sNam9iJ.jpg"},
    {uri: "https://i.imgur.com/N7rlQYt.jpg"},
    {uri: "https://i.imgur.com/UDrH0wm.jpg"},
    {uri: "https://i.imgur.com/Ka8kNST.jpg"}
]
const {width, height} = Dimensions.get("window");
const CARD_HEIGHT = height / 4;
const CARD_WIDTH = CARD_HEIGHT - 50;

export default class mapScreen extends React.Component {
    constructor(props) {
        super(props);
        this.navigate = this.props.navigation.navigate;
        this.state = {
            markers: [
                {
                    coordinate: {
                        latitude: 45.524548,
                        longitude: -122.6749817,
                    },
                    title: "Restaurant Schatzkammer",
                    description: "This is the best place in Portland",
                    image: Images[0],
                },
                {
                    coordinate: {
                        latitude: 45.524578,
                        longitude: -122.666667,
                    },
                    title: "Best Place",
                    description: "This is the best place in Portland",
                    image: Images[0],
                },
                {
                    coordinate: {
                        latitude: 45.524698,
                        longitude: -122.6655507,
                    },
                    title: "Second Best Place",
                    description: "This is the second best place in Portland",
                    image: Images[1],
                },
                {
                    coordinate: {
                        latitude: 45.5230786,
                        longitude: -122.6701034,
                    },
                    title: "Third Best Place",
                    description: "This is the third best place in Portland",
                    image: Images[2],
                },
                {
                    coordinate: {
                        latitude: 45.521016,
                        longitude: -122.6561917,
                    },
                    title: "Fourth Best Place",
                    description: "This is the fourth best place in Portland",
                    image: Images[3],
                },
            ],
            region: {
                latitude: 45.52220671242907,
                longitude: -122.6653281029795,
                latitudeDelta: 0.04864195044303443,
                longitudeDelta: 0.040142817690068,
            },
        };

    }

    componentWillMount() {
        this.index = 0;
        this.animation = new Animated.Value(0);
    }

    componentDidMount() {
        // We should detect when scrolling has stopped then animate
        // We should just debounce the event listener here
        this.animation.addListener(({value}) => {
            let index = Math.floor(value / CARD_WIDTH + 0.3); // animate 30% away from landing on the next item
            if (index >= this.state.markers.length) {
                index = this.state.markers.length - 1;
            }
            if (index <= 0) {
                index = 0;
            }

            clearTimeout(this.regionTimeout);
            this.regionTimeout = setTimeout(() => {
                if (this.index !== index) {
                    this.index = index;
                    const {coordinate} = this.state.markers[index];
                    this.map.animateToRegion(
                        {
                            ...coordinate,
                            latitudeDelta: this.state.region.latitudeDelta,
                            longitudeDelta: this.state.region.longitudeDelta,
                        },
                        350
                    );
                }
            }, 10);
        });
    }


    render() {
        const interpolations = this.state.markers.map((marker, index) => {
            const inputRange = [
                (index - 1) * CARD_WIDTH,
                index * CARD_WIDTH,
                ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
                inputRange,
                outputRange: [1, 2.5, 1],
                extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
                inputRange,
                outputRange: [0.35, 1, 0.35],
                extrapolate: "clamp",
            });
            return {scale, opacity};
        });

        return (
            <View style={styles2.container}>
                <MapView
                    provider={PROVIDER_GOOGLE}
                    ref={map => this.map = map}
                    initialRegion={this.state.region}
                    style={styles2.container}
                    customMapStyle={MapStyle}
                >
                    {this.state.markers.map((marker, index) => {
                        const scaleStyle = {
                            transform: [
                                {
                                    scale: interpolations[index].scale,
                                },
                            ],
                        };
                        const opacityStyle = {
                            opacity: interpolations[index].opacity,
                        };
                        return (
                            <MapView.Marker key={index} coordinate={marker.coordinate}>
                                <Animated.View style={[styles2.markerWrap, opacityStyle]}>
                                    <Animated.View style={[styles2.ring, scaleStyle]}/>
                                    <View style={styles2.marker}/>
                                </Animated.View>
                            </MapView.Marker>
                        );
                    })}
                </MapView>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                    contentOffset: {
                                        x: this.animation,
                                    },
                                },
                            },
                        ],
                        {useNativeDriver: true}
                    )}
                    style={styles2.scrollView}
                    contentContainerStyle={styles2.endPadding}
                >
                    {this.state.markers.map((marker, index) => (

                        <View style={styles2.card} key={index}>

                            <TouchableOpacity style={{flex:1}} onPress={()=> this.props.navigation.navigate('Reservation')}>
                            <Image
                                source={marker.image}
                                style={styles2.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles2.textContent}>
                                <Text numberOfLines={1} style={styles2.cardtitle}>{marker.title}</Text>
                                <Text numberOfLines={1} style={styles2.cardDescription}>
                                    {marker.description}
                                </Text>
                            </View>
                            </TouchableOpacity>
                        </View>
                    ))}

                </Animated.ScrollView>
            </View>
        );
    }
}


const styles2 = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleText:{
        height:'25%',
        fontSize: 18,
        color: 'white',
        fontWeight: '600',
    },
    scrollView: {
        position: "absolute",
        bottom: 30,
        left: 0,
        right: 0,
        paddingVertical: 10,
    },
    endPadding: {
        paddingRight: width - CARD_WIDTH,
    },
    ButtonContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    buttonContainer:{
        alignItems: 'center',
    },
    card: {
        padding: 10,
        elevation: 2,
        backgroundColor: 'rgba(72,72,72,0.75)',

        marginHorizontal: 10,
        shadowColor: "#ffffff",
        shadowRadius: 5,
        shadowOpacity: 0.3,
        shadowOffset: { x: 2, y: -2 },
        height: CARD_HEIGHT,
        width: CARD_WIDTH,
        overflow: "hidden",
        marginBottom:'8%',
        flex: 1,
    },
    cardImage: {
        flex: 3,
        width: "100%",
        height: "100%",
        alignSelf: "center",
    },
    textContent: {
        justifyContent:'flex-start',
        height:'50%',
        width:'100%',
        flex: 1,
        alignItems: 'flex-start',
        color:'white'
    },
    textContent2: {
        justifyContent:'flex-start',
        height:'100%',
        width:'100%',
        flex: 3,
        alignItems: 'flex-start',
        alignSelf:'flex-start'
    },

    cardtitle: {
        fontSize: 12,
        marginTop: 5,
        fontWeight: "bold",
        color:'white'
    },
    cardDescription: {
        fontSize: 12,
        color: "#ffffff",
    },
    gradientContainer: {
        alignSelf: 'flex-end',

        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop:'3%',
        //paddingTop: Constants.statusBarHeight,
        backgroundColor: 'transparent',
    },
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        position: "absolute",
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(255,153,11,0.9)",
    },
    ring: {
        width: 36,
        height: 36,
        borderRadius: 12,

        backgroundColor: "rgba(219,122,0,0.5)",
        borderWidth: 3,
        borderColor: "rgba(226,146,8,0.5)",
    },
});
