import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Icon,
  Button,
  Left,
  Right,
  Body,
  Text,
  Card,
  CardItem,
} from 'native-base';
import { NavigationActions } from 'react-navigation';

const navBackToInitial = NavigationActions.back();

// eslint-disable-next-line react/prefer-stateless-function
class SecondScene2 extends Component {
  static navigationOptions = {
    header: null,
    title: 'S2',
  };

  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.dispatch(navBackToInitial)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 6 }}>
            <Title>Second Scene 2</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content scrollEnabled={false} style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
          <View style={{ flex: 12, backgroundColor: 'skyblue' }}>
            <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'darkblue' }}>
              <View style={{ flex: 3, backgroundColor: 'forestgreen' }}>

              </View>
              <View style={{ flex: 1, backgroundColor: 'fuchsia' }}>

              </View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'brown' }}>
              <View style={{ flex: 2, backgroundColor: 'firebrick' }}>

              </View>
              <View style={{ flex: 1, backgroundColor: 'gold' }}>

              </View>
              <View style={{ flex: 1, backgroundColor: 'khaki' }}>

              </View>
            </View>
            <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'yellow' }}>

            </View>
            <View style={{ flex: 3, flexDirection: 'row', backgroundColor: 'coral' }}>

            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SecondScene2;
