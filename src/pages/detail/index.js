import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function Detail({route, navigation}) {
  const {image} = route.params;
  const {title} = route.params;
  const {name} = route.params;
  const {publishedAt} = route.params;
  const {content} = route.params;
  return (
    <ScrollView>
      <View style={styles.container}>
        <Image
          source={{
            uri: JSON.parse(JSON.stringify(image)),
            width: 350,
            height: 198,
          }}
          style={{paddingHorizontal: 13}}
        />
      </View>
      <View style={{paddingHorizontal: 12}}>
        <Text style={styles.judulContent}>
          {JSON.parse(JSON.stringify(title))}
        </Text>
        <Text style={styles.textContent}>
          {JSON.parse(JSON.stringify(name))}
        </Text>
        <Text style={styles.textContent}>
          {JSON.parse(JSON.stringify(publishedAt))}
        </Text>
        <Text style={styles.textContent}>
          {JSON.parse(JSON.stringify(content))}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {padding: 12, justifyContent: 'center', alignItems: 'center'},
  textContent: {padding: 8, fontSize: 10, fontFamily: 'Rubik-Regular'},
  judulContent: {padding: 8, fontSize: 18, fontFamily: 'Rubik-Medium'},
});
