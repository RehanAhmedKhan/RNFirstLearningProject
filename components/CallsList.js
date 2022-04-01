import React from 'react';
import Calls from './Calls';
import AbsoluteButton from './AbsoluteButton';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {displaycallsList} from './actions/callsAction';

const CallsList = () => {
  const initialValue = useSelector(value => value.main.calls);

  return (
    <>
      <FlatList
        data={initialValue}
        renderItem={({item}) => (
          <Calls
            id={item.id}
            name={item.name}
            time={item.time}
            date={item.date}
            ticks={item.ticks}
            call={item.call}
            missedCalls={item.missedCalls}
            image={item.image}
          />
        )}
      />
      <AbsoluteButton value={displaycallsList} />
    </>
  );
};

export default CallsList;
