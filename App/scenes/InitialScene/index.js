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
} from 'native-base';

const deviceImage = require('../../static/devices.png');

// eslint-disable-next-line react/prefer-stateless-function
class InitialScene extends Component {
  static navigationOptions = {
    headerTitle: 'Initial Scene',
  }

  render() {
    return (

      // This configuration is for ScrollView (non full-screen)

      // <Container>
      //   <Content>
      //     <View style={{ flex: 1, alignItems: 'center' }}>
      //       <Text>Example of text</Text>
      //     </View>
      //     <View style={{ flex: 6, alignItems: 'center' }}>
      //       <Image
      //         style={{ height: 300, width: 300 }}
      //         source={deviceImage}
      //       />
      //     </View>
      //     <View style={{ flex: 1, alignItems: 'center' }}>
      //       <Button style={{ alignSelf: 'center' }}>
      //         <Text>Download</Text>
      //       </Button>
      //     </View>
      //   </Content>
      // </Container>

      // This configuration is for full-screen (non ScrollView)

      <View style={{ flex: 8, flexDirection: 'column', justifyContent: 'center' }}>
        <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
          <Text>Example of text</Text>
        </View>
        <View style={{ flex: 6, alignItems: 'center' }}>
          <Image
            style={{ height: 300, width: 300 }}
            source={deviceImage}
          />
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Button style={{ alignSelf: 'center' }}>
            <Text>Download</Text>
          </Button>
        </View>
      </View>

    );
  }
}

export default InitialScene;
