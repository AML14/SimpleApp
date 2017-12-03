import React, { Component } from 'react';
import {
  View,
  ScrollView,
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
  Input,
  Item,
  List,
  ListItem,
} from 'native-base';
import { NavigationActions } from 'react-navigation';

const navBackToInitial = NavigationActions.back();

// eslint-disable-next-line react/prefer-stateless-function
class SecondScene3 extends Component {
  static navigationOptions = {
    header: null,
    title: 'S3',
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
            <Title>Second Scene 3</Title>
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
              <View style={{
                  flex: 3,
                  backgroundColor: 'forestgreen',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Item regular>
                  <Input placeholder="Regular Textbox" />
                </Item>
              </View>
              <View style={{
                  flex: 1,
                  backgroundColor: 'fuchsia',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* Los botones deben alinearse internamente, no basta con la vista contenedora */}
                <Button style={{ alignSelf: 'center' }}><Text>Send</Text></Button>
              </View>
            </View>
            <View style={{
                flex: 4,
                flexDirection: 'row',
                backgroundColor: 'brown',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Card>
                <CardItem header>
                  <Text>Ejemplo de tarjeta</Text>
                </CardItem>
                <CardItem>
                  <Body>
                    {/* El numero de lineas deberia ser obligatorio y calcularse
                      en funcion del valor del flex de la vista */}
                    <Text numberOfLines={5}>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                      eleifend leo non felis tristique, ac ullamcorper velit accumsan.
                      Sed vitae leo ut urna porta laoreet. Praesent in imperdiet sem,
                      ut rhoncus lacus. Praesent ultricies quis purus a euismod. Proin
                      risus orci, pulvinar et dignissim vitae, aliquam et orci. Orci
                      varius natoque penatibus et magnis dis parturient montes, nascetur
                      ridiculus mus. Nunc vel massa pellentesque, vehicula est vitae,
                      consequat tellus.
                    </Text>
                  </Body>
                </CardItem>
              </Card>
            </View>
            <View style={{
                flex: 5,
                flexDirection: 'row',
                backgroundColor: 'yellow',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              {/* Las listas deben contenerse en un ScrollView */}
              <ScrollView>
                {/* Las listas deben marcar flex=1 dentro de la vista */}
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
                </List>
              </ScrollView>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}

export default SecondScene3;
