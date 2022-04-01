import React, {useEffect} from 'react';
import Chats from './Chats';
import AbsoluteButton from './AbsoluteButton';
import {SafeAreaView, ScrollView, FlatList, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {displaymessageList} from './actions/messageAction';

const ChatList = props => {
  const initialValue = useSelector(value => {
    return value.main.message;
  });

  // useEffect(() => {
  //   console.log(initialValue.message);
  // }, [initialValue.message]);

  // const [remove, setremove] = useState(personMessage);

  // const removeItem = abc => {
  //   setremove(remove => remove.filter(item => item.id != abc.id));s
  // };
  return (
    <>
      <FlatList
        data={initialValue}
        renderItem={({item}) => (
          <Chats
            id={item.id}
            name={item.name}
            message={item.message}
            time={item.time}
            pdf={item.pdf}
            call={item.call}
            mute={item.mute}
            pin={item.pin}
            messageCount={item.messageCount}
            ticks={item.ticks}
            image={item.image}
            newpageprop={props.propName}
          />
        )}
      />
      <AbsoluteButton value={displaymessageList} />
    </>
  );
};

export default ChatList;
