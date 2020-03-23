import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import * as WebBrowser from 'expo-web-browser';
import Colors from '../constants/Colors';
import { MonoText } from '../components/StyledText';
import { SearchBar,Card, ListItem, Button2, Icon } from 'react-native-elements';
import { Container, Header, Content, CardItem, Thumbnail, Button, Left, Body, Right } from 'native-base';
let styles = require('../styles/styles');
export default class HomeScreen extends React.Component {
  state = {
    search: '',
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;
    const users = [
      {
        name: 'brynn',
        avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
      },
    ];
  return (
    <View style={styles.container}>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text> </Text>
        <Text style={styles.getHeaderText}>  Restaurants</Text>
        <Text> </Text>
        <SearchBar
            onChangeText={''}
            onClearText={''}
            searchIcon={{ size: 24 }}
            placeholderTextColor={Colors.textColorWhite}
            placeholder=" Restaurants suchen..."
            value={this.state.search}
            containerStyle={{
              padding:0
            }}
        />
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>

        <View style={styles.getStartedContainer}>
          <Text style={styles.getStartedText}>Hier werden Ihnen alle Restaurants angezeigt.</Text>
          <View style={[styles.codeHighlightContainer, styles.homeScreenFilename]}>
            <MonoText></MonoText>
          </View>
        </View>


          <Card
              containerStyle={{backgroundColor: Colors.screenBarColor, borderWidth: 0,}}
              title='Restaurant Schatzkammer'
              image={require('../assets/images/robot-dev.png')}
              titleStyle={styles.getCardText}>
            <Text style={styles.cardSubText}>
              Geöffnet!
            </Text>

            <Button bordered warning block>
              <Text style={styles.getStartedText}> Reservieren!</Text>
            </Button>
            <Text> </Text>
            <View
                style={{
                  borderBottomColor: Colors.textColor,
                  borderBottomWidth: 3.5,
                }}
            />
          </Card>

      </ScrollView>
    </View>
  );
  }
}
//CARDIMAGE
HomeScreen.navigationOptions = {
  header: null,
};

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync('https://docs.expo.io/versions/latest/workflow/development-mode/');
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/get-started/create-a-new-app/#making-your-first-change'
  );
}


