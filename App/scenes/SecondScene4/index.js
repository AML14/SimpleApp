import React, { Component } from 'react';
import {
  Image,
  View,
  Button,
  ScrollView,
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
  Card,
  CardItem,
} from 'native-base';
import { NavigationActions } from 'react-navigation';

const navBackToInitial = NavigationActions.back();

// eslint-disable-next-line react/prefer-stateless-function
class SecondScene4 extends Component {
  static navigationOptions = {
    header: null,
    title: 'S4',
  };

  constructor(props) {
    super(props);
    this.initialState = {
      cards: [],
    };
    this.state = this.initialState;
  }

  addCard() {
    const currentCards = this.state.cards;
    currentCards.push({
      header: 'NativeBase',
      body: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ' +
      'eleifend leo non felis tristique, ac ullamcorper velit accumsan. ' +
      'Sed vitae leo ut urna porta laoreet. Praesent in imperdiet sem, ' +
      'ut rhoncus lacus. Praesent ultricies quis purus a euismod. Proin ' +
      'risus orci, pulvinar et dignissim vitae, aliquam et orci. Orci ' +
      'varius natoque penatibus et magnis dis parturient montes, nascetur ' +
      'ridiculus mus. Nunc vel massa pellentesque, vehicula est vitae, ' +
      'consequat tellus.',
      footer: 'GeekyAnts',
    });
    this.setState(currentCards);
  }

  render() {
    console.log(this.props);
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
            <ButtonNB transparent onPress={() => this.props.navigation.dispatch(navBackToInitial)}>
              <Icon name="arrow-back" />
            </ButtonNB>
          </Left>
          <Body style={{ flex: 6 }}>
            <Title>Second Scene 4</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <ButtonNB transparent>
              <Icon name="menu" />
            </ButtonNB>
          </Right>
        </Header>
        <Content>
          {
            this.state.cards.map(card => (
              <Card>
                <CardItem header>
                  <Text>{card.header}</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    <Text>{card.body}</Text>
                  </Body>
                </CardItem>
                <CardItem footer>
                  <Text>{card.footer}</Text>
                </CardItem>
              </Card>
            ))
          }
          <ButtonNB style={{ alignSelf: 'center' }} onPress={() => this.addCard()}>
            <Text>Add card</Text>
          </ButtonNB>
        </Content>
      </Container>
    );
  }
}

export default SecondScene4;
