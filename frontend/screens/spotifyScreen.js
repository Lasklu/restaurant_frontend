import React from 'react';
import { StyleSheet, ScrollView, FlatList, View, Image, Text, TouchableOpacity } from 'react-native';
import LinearGradient from "expo-linear-gradient";

export default class SpotifyScreen extends React.Component {
    state = { fontLoaded: false };
    render() {
        return (
            <View>
                <ScrollView contentContainerStyle={styles2.container}>
                    <LinearGradient colors={['#3f6b6b', '#121212']} style={styles2.header} />
                    <FlatList style={styles2.list} />
                </ScrollView>
                        <View style={styles2.playlistDetails}>
                            <Image style={styles2.playlistArt} source={{ uri: 'https://github.com/jamiemaison/hosted/blob/master/placeholder.jpg?raw=1' }} />
                            <Text style={styles2.playlistTitle}>Playlist Name</Text>
                            <Text style={styles2.playlistSubtitle}>{'BY USER • 000,000 FOLLOWERS'}</Text>
                            <TouchableOpacity style={styles2.playlistButton}><Text style={styles2.playlistButtonText}>SHUFFLE PLAY</Text></TouchableOpacity>
                        </View>
            </View>
        );
    }
}

const styles2 = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        width: '100%',
        height: 600
    },
    list: {
        width: '100%',
        height: 800,
        backgroundColor: '#121212'
    },
    playlistDetails: {
        width: '100%',
        height: 600,
        position: 'absolute',
        top: 90,
        display: 'flex',
        alignItems: 'center'
    },
    playlistArt: {
        width: 180,
        height: 180,
    },
    playlistTitle: {
        color: '#fff',
        fontSize: 30,
        marginTop: 50
    },
    playlistSubtitle: {

        color: '#b9bdbe',
        fontSize: 12,
        marginTop: 15,
        textTransform: 'uppercase'
    },
    playlistButton: {
        backgroundColor: '#2ab759',
        width: 230,
        height: 50,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 100,
        marginTop: 40
    },
    playlistButtonText: {
        fontSize: 12,
        color: '#fff',
        letterSpacing: 2
    }
});
