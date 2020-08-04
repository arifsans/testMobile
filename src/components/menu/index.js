import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import klinik from '../../assets/icons/klinik.png';
import riwayat from '../../assets/icons/riwayat.png';
import notifikasi from '../../assets/icons/notifikasi.png';
import dataScan from '../../assets/icons/dataScan.png';
import rating from '../../assets/icons/rating.png';
import pengaturan from '../../assets/icons/pengaturan.png';

export default function Menu() {
  return (
    <View style={{height: 160}}>
      {/* menu baris 1 */}
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          justifyContent: 'space-around',
        }}>
        <View style={styles.containerIcon}>
          <View style={styles.bgIcon}>
            <Image source={klinik} style={{width: 37, height: 26}} />
          </View>
          <Text style={styles.textIcon}>KLINIK TERDEKAT</Text>
        </View>
        <View style={styles.containerIcon}>
          <View style={styles.bgIcon}>
            <Image source={riwayat} style={{width: 30, height: 24}} />
          </View>
          <Text style={styles.textIcon}>RIWAYAT</Text>
        </View>
        <View style={styles.containerIcon}>
          <View style={styles.bgIconUngu}>
            <Image source={dataScan} style={{width: 29, height: 29}} />
          </View>
          <Text style={styles.textIcon}>DATA SCAN</Text>
        </View>
      </View>
      {/* menu baris 2 */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.containerIcon}>
          <View style={styles.bgIcon}>
            <Image source={notifikasi} style={{width: 27, height: 33}} />
          </View>
          <Text style={styles.textIcon}>NOTIFIKASI</Text>
        </View>
        <View style={styles.containerIcon}>
          <View style={styles.bgIconUngu}>
            <Image source={rating} style={{width: 32, height: 31}} />
          </View>
          <Text style={styles.textIcon}>BERI NILAI</Text>
        </View>
        <View style={styles.containerIcon}>
          <View style={styles.bgIconPink}>
            <Image source={pengaturan} style={{width: 33, height: 33}} />
          </View>
          <Text style={styles.textIcon}>PENGATURAN</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerIcon: {
    flexDirection: 'column',
    alignItems: 'center',
    width: 100,
    height: 50,
  },
  bgIcon: {
    width: 57,
    height: 56,
    backgroundColor: '#0093DD',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgIconUngu: {
    width: 57,
    height: 56,
    backgroundColor: '#8445A2',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bgIconPink: {
    width: 57,
    height: 56,
    backgroundColor: '#DD127B',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textIcon: {fontSize: 10, fontFamily: 'Rubik-Medium'},
});
