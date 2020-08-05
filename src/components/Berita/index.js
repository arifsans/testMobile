import React from 'react';
import {Image, Text, View, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function Berita(props) {
  const navigation = useNavigation();
  return (
    <View style={{paddingBottom: 20}}>
      <View style={{flex: 1}}>
        <Image source={{uri: props.image}} style={{flex: 1, height: 197}} />
        <Text style={styles.judulContent}>
          {props.title}
        </Text>
        <Text style={styles.textContent}>
          Sumber : {props.name}
        </Text>
        <Text style={styles.textContent}>
          {props.publishedAt}
        </Text>
        <Text style={styles.textContent}>
          {props.description}
        </Text>
        <Text
          style={styles.linkText}
          onPress={() => {
            navigation.navigate('Detail', {
              image: props.image,
              title: props.title,
              name: props.name,
              publishedAt: props.publishedAt,
              content: props.content,
            });
          }}>
          Baca Selengkapnya...
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textContent: {padding: 8, fontSize: 10, fontFamily: 'Rubik-Regular'},
  judulContent: {padding: 8, fontSize: 18, fontFamily: 'Rubik-Medium'},
  linkText: {color: '#0093DD', paddingHorizontal: 8, fontSize: 10}
});
