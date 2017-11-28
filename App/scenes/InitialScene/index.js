import React, { Component } from 'react';
import {
  Image,
  View,
  Button,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Button as ButtonNB,
  Left,
  Right,
  Body,
  Text,
} from 'native-base';
import { NavigationActions } from 'react-navigation';

const deviceImage = require('../../static/devices.png');

const navToSecond = NavigationActions.navigate({
  routeName: 'SecondScene',
  params: {},
  action: {},
});

// eslint-disable-next-line react/prefer-stateless-function
class InitialScene extends Component {
  static navigationOptions = {
    header: null,
  }

  render() {
    return (

      // This configuration is for ScrollView (non full-screen)

      <Container>
        <Header>
          <Left style={{ flex: 1 }} />
          <Body style={{ flex: 6 }}>
            <Title>Initial Scene</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <ButtonNB transparent>
              <Icon name="menu" />
            </ButtonNB>
          </Right>
        </Header>
        <Content scrollEnabled={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Example of text</Text>
          </View>
          <View style={{ flex: 6, alignItems: 'center', justifyContent: 'center' }}>
            <Image
              style={{ height: 300, width: 300 }}
              source={deviceImage}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <ButtonNB style={{ alignSelf: 'center' }} onPress={() => this.props.navigation.dispatch(navToSecond)}>
              <Text>Next screen</Text>
            </ButtonNB>
          </View>
        </Content>
      </Container>
    );
  }
}

export default InitialScene;
