import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Back from '../components/Back';

export default class Logout extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Back style={styles.back} />
        <View style={styles.rect}>
          <Image
            source={require('../assets/images/image_K4TJ..png')}
            resizeMode="contain"
            style={styles.imageProfile}
          />
          <Text style={styles.username}>Niramol Mongkonlikitkajohn</Text>
          <View style={styles.rect2}>
            <View style={styles.rect3}>
              <Text style={styles.text2}>Log Out</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248,248,248,1)',
  },
  back: {
    width: 20,
    height: 20,
    marginTop: 49,
    marginLeft: 23,
  },
  rect: {
    width: 313,
    height: 396,
    backgroundColor: 'rgba(255,255,255,1)',
    elevation: 15,
    borderRadius: 10,
    borderColor: '#000000',
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    marginTop: 139,
    alignSelf: 'center',
  },
  imageProfile: {
    width: 167,
    height: 167,
    marginTop: 31,
    alignSelf: 'center',
  },
  username: {
    color: '#121212',
    fontSize: 18,
    fontFamily: 'red-hat-text-regular',
    marginTop: 18,
    alignSelf: 'center',
  },
  rect2: {
    width: 285,
    height: 47,
    marginTop: 72,
    alignSelf: 'center',
  },
  rect3: {
    width: 285,
    height: 47,
    backgroundColor: 'rgba(255,62,48,1)',
    elevation: 12,
    borderRadius: 5,
    borderColor: '#000000',
    borderWidth: 0,
    shadowOffset: {
      height: 5,
      width: 0,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  text2: {
    color: 'rgba(248,248,248,1)',
    fontSize: 20,
    fontFamily: 'red-hat-text-regular',
    marginTop: 14,
    marginLeft: 105,
  },
});
