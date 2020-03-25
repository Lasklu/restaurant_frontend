import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';
import LinearGradient from 'react-native-svg'
import { Constants } from 'expo';

const BORDER_WIDTH = 4;

export default class BorderedButton extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    BorderedButton - Please find the code below.
                </Text>

                {/* gradient bordered button  */}
                <LinearGradient
                    colors={['#000', '#fff']}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={{
                        borderRadius: 30,
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <TouchableOpacity
                        activeOpacity={1}
                        disabled={false}
                        style={{
                            borderRadius: 30,
                            flex: 1,
                            margin: BORDER_WIDTH,
                            color: 'red',
                            backgroundColor: 'green',
                        }}
                        onPress={() => {
                            alert('Button Pressed!');
                        }}>
                        <View
                            style={{
                                padding: BORDER_WIDTH,
                                opacity: 0,
                                flex: 0,
                                alignSelf: 'center',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            pointerEvents={'none'}>
                            <Text
                                style={{
                                    textAlignVertical: 'center',
                                    paddingHorizontal: 16,
                                    color: '#000',
                                }}
                                numberOfLines={1}>
                                {'Gradient Bordered Button!'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    paragraph: {
        margin: 24,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});
