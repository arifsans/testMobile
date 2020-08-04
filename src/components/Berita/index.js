import React from 'react';
import {Image, Text, View, Linking} from 'react-native';

export default Berita = (props) => (
  <View style={{paddingBottom: 20}}>
    <View style={{flex: 1}}>
      <Image source={{uri: props.image}} style={{flex: 1, height: 197}} />
      <Text style={{padding: 8, fontSize: 18}}>{props.title}</Text>
      <Text style={{padding: 8, fontSize: 10}}>Sumber : {props.name}</Text>
      <Text style={{padding: 8, fontSize: 10}}>{props.publishedAt}</Text>
      <Text style={{padding: 8, fontSize: 10}}>{props.description}</Text>
      <Text
        style={{color: '#0093DD', paddingHorizontal: 8, fontSize: 10}}
        onPress={() => Linking.openURL(props.url)}>
        Baca Selengkapnya...
      </Text>
    </View>
  </View>
);
