import React from 'react';
import {View, Text, Image, TouchableHighlight, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

function ThreadImageRight({
  avatar,
  firstname,
  lastname,
  content,
  vote,
  onVote,
}) {
  const {imageUrl} = content;

  return (
    <View style={styles.thread}>
      <TouchableHighlight onPress={onVote} underlayColor="transprent">
        <View style={styles.container}>
          <View style={styles.textContainer}>
            <Image style={styles.image} source={{uri: imageUrl}} />
            {!!vote && (
              <View style={styles.voteContainer}>
                <Icon name="heart" size={10} color={'#ff0000'} />
                <Text style={styles.voteText}>{vote}</Text>
              </View>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  thread: {
    alignItems: 'flex-end',
  },
  container: {
    flexDirection: 'row',
    maxWidth: '60%',
    paddingVertical: 5,
    paddingHorizontal: 5,
    marginBottom: 5,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  name: {
    fontWeight: '500',
    marginBottom: 5,
  },
  textContainer: {
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
    left: 0,
    bottom: 0,
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

export default ThreadImageRight;
