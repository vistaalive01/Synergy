import React from 'react';
import {View, Text, TouchableHighlight, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ThreadLeft({avatar, firstname, lastname, content, vote, onVote}) {
  return (
    <View>
      <TouchableHighlight onPress={onVote} underlayColor="transprent">
        <View style={styles.textLeft}>
          <Image style={styles.avatar} source={{uri: avatar}} />
          <View>
            <Text style={styles.name}>{`${firstname} ${lastname}`}</Text>
            <View style={styles.text}>
              <Text>{content}</Text>
              {!!vote && (
                <View style={styles.voteContainer}>
                  <Icon name="heart" size={10} color={'#ff0000'} />
                  <Text style={styles.voteText}>{vote}</Text>
                </View>
              )}
            </View>
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  textLeft: {
    flexDirection: 'row',
    maxWidth: '60%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 40,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
    marginBottom: 5,
  },
  text: {
    backgroundColor: '#dddddd',
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 15,
    position: 'relative',
  },
  voteContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: -20,
    bottom: -12,
    backgroundColor: '#ffffff',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  voteText: {
    fontSize: 15,
    marginLeft: 2,
  },
});

export default ThreadLeft;
