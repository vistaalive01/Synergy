import React, {useState, useEffect} from 'react';
import firebase from 'react-native-firebase';
import ThreadLeft from '../components/ThreadLeft';
import ThreadRight from '../components/ThreadRight';
import {user} from '../models/user';
import ThreadImageLeft from '../components/ThreadImageLeft';
import ThreadImageRight from '../components/ThreadImageRight';
import ThreadFileLeft from '../components/ThreadFileLeft';
import ThreadFileRight from '../components/ThreadFileRight';

function Thread({thread, isMe}) {
  const {key, avatar, content, firstname, lastname, timestamp, type} = thread;

  const [vote, setVote] = useState(0);

  useEffect(() => {
    firebase
      .database()
      .ref('channels')
      .child('practical-software-engineer')
      .child(key)
      .child('vote')
      .once('value', snapshot => {
        setVote(parseInt(snapshot.numChildren()));
      });
  });

  const onVote = () => {
    const voteRef = firebase
      .database()
      .ref('channels')
      .child('practical-software-engineer')
      .child(key)
      .child('vote');

    voteRef
      .orderByChild('id')
      .equalTo(user.id)
      .once('value', snapshot => {
        if (snapshot.exists()) {
          const key = Object.keys(snapshot.val())[0];
          voteRef.child(key).remove();
        } else {
          voteRef.push({
            ...user,
          });
        }
      });
  };

  if (isMe) {
    if (type === 'file') {
      return <ThreadFileRight content={content} vote={vote} onVote={onVote} />;
    } else if (type === 'image') {
      return <ThreadImageRight content={content} vote={vote} onVote={onVote} />;
    } else {
      return <ThreadRight content={content} vote={vote} onVote={onVote} />;
    }
  } else {
    if (type === 'file') {
      return (
        <ThreadFileLeft
          avatar={avatar}
          firstname={firstname}
          lastname={lastname}
          content={content}
          vote={vote}
          onVote={onVote}
        />
      );
    } else if (type === 'image') {
      return (
        <ThreadImageLeft
          avatar={avatar}
          firstname={firstname}
          lastname={lastname}
          content={content}
          vote={vote}
          onVote={onVote}
        />
      );
    } else {
      return (
        <ThreadLeft
          avatar={avatar}
          firstname={firstname}
          lastname={lastname}
          content={content}
          vote={vote}
          onVote={onVote}
        />
      );
    }
  }
}

export default Thread;
