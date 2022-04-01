import React, {useState} from 'react';
import Status from './Status';
import AbsoluteButton from './AbsoluteButton';
import MyStatus from './MyStatus';
import {FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {displaystatusList} from './actions/statusAction';

const StatusList = () => {
  const initialValue = useSelector(value => value.main.status);
  // const [remove, setremove] = useState(personMessage);

  // const removeItem = abc => {
  //   setremove(remove => remove.filter(item => item.id != abc.id));
  // };
  // const gainItem = () => {
  //   setremove(personMessage);
  // };

  return (
    <>
      <FlatList
        ListHeaderComponent={<MyStatus />}
        data={initialValue}
        renderItem={({item}) => (
          <>
            <Status
              id={item.id}
              name={item.name}
              time={item.time}
              date={item.date}
              image={item.image}
            />
          </>
        )}
      />
      <AbsoluteButton value={displaystatusList} />
    </>
  );
};

export default StatusList;
