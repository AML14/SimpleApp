import React, { Component } from 'react';
import {
  Image,
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
  List,
  ListItem,
  Item,
  Input,
  Radio,
} from 'native-base';
import { NavigationActions } from 'react-navigation';

const deviceImage = require('../../static/devices.png');

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
    return (
      <Container>
        <Header>
          <Left style={{ flex: 1 }}>
            <Button transparent onPress={() => this.props.navigation.dispatch(navBackToInitial)}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body style={{ flex: 6 }}>
            <Title>Second Scene 4</Title>
          </Body>
          <Right style={{ flex: 1 }}>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Right>
        </Header>
        <Content>
          <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#a99017',
            }}
          >
            <List style={{ flex: 1 }}>
              <ListItem style={{ marginLeft: 0 }}>
                <Body style={{ flex: 9 }}>
                  <Text>Daily Stand Up</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Radio selected={false} />
                </Right>
              </ListItem>
              <ListItem style={{ marginLeft: 0 }}>
                <Body style={{ flex: 9 }}>
                  <Text>Discussion with Client</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Radio selected={true} />
                </Right>
              </ListItem>
            </List>
          </View>
          <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}
          >
            <List style={{ flex: 1 }}>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-document" android="md-document" style={{ color: '#F73B3B' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Simon Mignolet</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-folder" android="md-folder" style={{ color: '#157EFB' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Nathaniel Clyne</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
              <ListItem>
                <Left style={{ flex: 1 }}>
                  <Icon ios="ios-link" android="md-link" style={{ color: '#6BF442' }} />
                </Left>
                <Body style={{ flex: 8 }}>
                  <Text numberOfLines={1}>Dejan Lovren</Text>
                </Body>
                <Right style={{ flex: 1 }}>
                  <Icon name="arrow-forward" />
                </Right>
              </ListItem>
            </List>
          </View>
          <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              margin: 10,
            }}
          >
            <Button style={{ alignSelf: 'center' }} onPress={() => this.addCard()}>
              <Text>Add card</Text>
            </Button>
          </View>
          {
            this.state.cards.map(card => (
              <View style={{
                  flex: 1,
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
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
              </View>
            ))
          }
          <View style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              style={{ height: 300, width: 300 }}
              source={deviceImage}
            />
          </View>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{
                flex: 2,
                backgroundColor: 'forestgreen',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
                padding: 10,
              }}
            >
              <Item rounded>
                <Input placeholder="Rounded Textbox" />
              </Item>
            </View>
            <View style={{
                flex: 2,
                backgroundColor: 'fuchsia',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 5,
                padding: 10,
              }}
            >
              {/* Los botones deben alinearse internamente, no basta con la vista contenedora */}
              <Button style={{ alignSelf: 'center' }}><Text>Button Example</Text></Button>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SecondScene4;
