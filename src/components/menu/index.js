import React from 'react';
import {StyleSheet, Text, View, Image, TouchableHighlight} from 'react-native';
import klinik from '../../assets/icons/klinik.png';
import riwayat from '../../assets/icons/riwayat.png';
import notifikasi from '../../assets/icons/notifikasi.png';
import dataScan from '../../assets/icons/dataScan.png';
import rating from '../../assets/icons/rating.png';
import pengaturan from '../../assets/icons/pengaturan.png';

export default function Menu() {
  return (
    <View style={{height: 160, paddingTop: 10}}>
      {/* menu baris 1 */}
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 30,
          justifyContent: 'space-around',
        }}>
        <View style={styles.containerIcon}>
          <TouchableHighlight>
          <View style={styles.bgIcon}>
            <Image source={klinik} style={{width: 37, height: 26}} />
          </View>
          </TouchableHighlight>
          <Text style={styles.textIcon}>KLINIK TERDEKAT</Text>
        </View>

        <View style={styles.containerIcon}>
          <TouchableHighlight>
          <View style={styles.bgIcon}>
            <Image source={riwayat} style={{width: 30, height: 24}} />
          </View>
          </TouchableHighlight>
          <Text style={styles.textIcon}>RIWAYAT</Text>
        </View>

        <View style={styles.containerIcon}>
          <TouchableHighlight>
          <View style={styles.bgIconUngu}>
            <Image source={dataScan} style={{width: 29, height: 29}} />
          </View>
          </TouchableHighlight>
          <Text style={styles.textIcon}>DATA SCAN</Text>
        </View>
      </View>

      {/* menu baris 2 */}
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <View style={styles.containerIcon}>
          <TouchableHighlight>
            <View style={styles.bgIcon}>
              <Image source={notifikasi} style={{width: 27, height: 33}} />
              <Text style={styles.notif}></Text>
            </View>
          </TouchableHighlight>
          <Text style={styles.textIcon}>NOTIFIKASI</Text>
        </View>

        <View style={styles.containerIcon}>
          <TouchableHighlight>
          <View style={styles.bgIconUngu}>
            <Image source={rating} style={{width: 32, height: 31}} />
          </View>
          </TouchableHighlight>
          <Text style={styles.textIcon}>BERI NILAI</Text>
        </View>

        <View style={styles.containerIcon}>
          <TouchableHighlight>
          <View style={styles.bgIconPink}>
            <Image source={pengaturan} style={{width: 33, height: 33}} />
          </View>
          </TouchableHighlight>
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
    alignContent: 'center',
    justifyContent: 'center',
  },
  bgIcon: {
    width: 57,
    height: 56,
    backgroundColor: '#0093DD',
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
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
  textIcon: {fontSize: 10, fontFamily: 'Rubik-Medium', color: '#5A5A5A'},
  notif: {
    color: '#FFFFFF',
    backgroundColor: '#50DEE3',
    margin:-3,
    padding: 5,
    borderRadius: 25,
    width: 17,
    height: 17,
    position: 'absolute',
    top: 0,
    right: 0,
  },
});
