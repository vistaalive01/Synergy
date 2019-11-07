import React, {Component} from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import Next from '../components/Next';

export default class Groups extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.nameTag}>
          <View style={styles.imageProfileRow}>
            <Image
              source={require('../assets/images/image_K4TJ..png')}
              resizeMode="contain"
              style={styles.imageProfile}
            />
            <Text style={styles.username}>Niramol Mongkonlikitkajohn</Text>
          </View>
        </View>
        <View style={styles.rect2Stack}>
          <View style={styles.rect2}>
            <Text style={styles.groupList}>Groups</Text>
            <View style={styles.groupName1Row}>
              <Text style={styles.groupName1}>
                Practical Software Engineering
              </Text>
              <Next style={styles.next} />
            </View>
            <View style={styles.groupName2Row}>
              <Text style={styles.groupName2}>
                Software Quality Assurance and Testing
              </Text>
              <Next style={styles.next2} />
            </View>
          </View>
          <View style={styles.rect3} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(248,248,248,1)',
    borderColor: '#000000',
    borderWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  nameTag: {
    width: 335,
    height: 88,
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
    flexDirection: 'row',
    marginTop: 89,
    marginLeft: 38,
  },
  imageProfile: {
    width: 64,
    height: 64,
  },
  username: {
    color: '#121212',
    fontSize: 18,
    fontFamily: 'red-hat-text-regular',
    marginLeft: 16,
    marginTop: 23,
  },
  imageProfileRow: {
    height: 64,
    flexDirection: 'row',
    flex: 1,
    marginRight: 16,
    marginLeft: 17,
    marginTop: 12,
  },
  rect2: {
    top: 0,
    left: 21,
    width: 375,
    height: 573,
    backgroundColor: 'rgba(255,255,255,1)',
    position: 'absolute',
    elevation: 30,
    borderColor: '#000000',
    borderWidth: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    shadowOffset: {
      height: 4,
      width: 0,
    },
    shadowColor: 'rgba(0,0,0,1)',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  groupList: {
    color: '#121212',
    fontSize: 28,
    fontFamily: 'red-hat-text-regular',
    marginTop: 20,
    marginLeft: 12,
  },
  groupName1: {
    color: '#121212',
    fontSize: 15,
    fontFamily: 'red-hat-text-regular',
    marginLeft: -20,
    marginTop: 2,
  },
  next: {
    width: 11,
    height: 20,
    marginLeft: 74,
  },
  groupName1Row: {
    height: 20,
    flexDirection: 'row',
    marginTop: 32,
    marginLeft: 29,
    marginRight: 75,
  },
  groupName2: {
    color: '#121212',
    justifyContent: 'space-between',
    fontSize: 15,
    fontFamily: 'red-hat-text-regular',
    textAlign: 'justify',
    marginTop: 5,
  },
  next2: {
    width: 11,
    height: 20,
    marginLeft: 32,
  },
  groupName2Row: {
    height: 35,
    flexDirection: 'row',
    marginTop: 21,
    marginLeft: 26,
    marginRight: 75,
  },
  rect3: {
    top: 65,
    width: 301,
    height: 1,
    backgroundColor: 'rgba(124,124,124,1)',
    position: 'absolute',
    left: 0,
  },
  rect2Stack: {
    width: 396,
    height: 573,
    marginTop: 62,
    marginLeft: 17,
  },
});
