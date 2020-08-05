import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const BannerWidth = Dimensions.get('window').width;
const BannerHeight = Dimensions.get('window').height;

export default function Antrian() {
  return (
    <View style={styles.gradient}>
      <LinearGradient
        colors={['#0093DD', '#8445A2', '#DD127B']}
        style={{flex: 1}}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.linearGradient}>
        <Text style={styles.teks}>INFO ANTRIAN</Text>
        {/* line */}
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 1, height: 1, backgroundColor: '#FFFFFF'}} />
          <View style={{flex: 1, height: 1, backgroundColor: '#FFFFFF'}} />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            margin: 10,
          }}>
          {/* circular progress 1 */}
          <View style={{alignItems: 'center'}}>
            <View style={styles.progress}>
              <Text style={{color: '#FFFFFF', fontSize: 25}}>21</Text>
              <View style={styles.progressLayer} />
            </View>
            <Text style={{fontSize: 9, color: '#FFF9AA'}}>Nomor Antrian</Text>
          </View>
          {/* Circular progress 2 */}
          <View style={{alignItems: 'center'}}>
            <View style={styles.progress}>
              <Text style={{color: '#FFFFFF', fontSize: 25}}>5</Text>
              <View style={styles.progressLayerDua} />
            </View>
            <Text style={{fontSize: 9, color: '#FFF9AA'}}>Sisa Antrian</Text>
          </View>
          <View style={{flexDirection: 'column'}}>
            <Text style={{fontSize: 9, color: '#FFF9AA'}}>Dokter Anda</Text>
            <Text style={{fontSize: 9, color: '#FFFFFF', marginBottom: 13}}>
              dr. Rina Agustina
            </Text>
            <Text style={{fontSize: 9, color: '#FFF9AA'}}>
              Klinik / RS Anda
            </Text>
            <Text style={{fontSize: 9, color: '#FFFFFF'}}>
              RS. National Hospital
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  gradient: {width: BannerWidth * 0.85, height: BannerHeight * 0.2, margin: 17},
  teks: {
    fontSize: 12,
    fontFamily: 'Rubik-Bold',
    color: '#FFFFFF',
    marginLeft: 23,
    marginVertical: 12,
  },
  linearGradient: {
    borderRadius: 10,
    height: BannerHeight * 0.2,
    width: BannerWidth * 0.85,
  },
  progress: {
    width: 71,
    height: 71,
    borderColor: 'transparent',
    borderWidth: 5,
    borderRadius: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  progressLayer: {
    width: 71,
    height: 71,
    borderWidth: 5,
    position: 'absolute',
    borderLeftColor: '#FFF9AA',
    borderBottomColor: '#FFF9AA',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 35,
    transform: [{rotateZ: '-90deg'}],
  },
  progressLayerDua: {
    width: 71,
    height: 71,
    borderWidth: 5,
    position: 'absolute',
    borderLeftColor: '#FFF9AA',
    borderBottomColor: '#FFF9AA',
    borderRightColor: 'transparent',
    borderTopColor: 'transparent',
    borderRadius: 35,
    transform: [{rotateZ: '90deg'}],
  },
});
