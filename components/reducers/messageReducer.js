const initialState = {
  message: [
    {
      id: 1,
      name: 'Faizan Ahmed Khan',
      message: 'Hii there!!! How are you doing?',
      time: '5:20 pm',
      pdf: false,
      call: false,
      mute: false,
      pin: false,
      messageCount: 2,
      ticks: 2,
      image: require('../../assets/related-1.jpg'),
    },
    {
      id: 2,
      name: 'Rehan Ahmed Khan',
      message: 'Hii there!!! How are you?',
      time: '5:20 pm',
      pdf: true,
      call: true,
      mute: true,
      pin: true,
      messageCount: 3,
      ticks: 1,
      image: require('../../assets/challenges.jpg'),
    },
    {
      id: 3,
      name: 'Ghayoor Bhae',
      message: 'Hii there!!! How are you?',
      time: '5:20 pm',
      pdf: false,
      call: true,
      mute: false,
      pin: true,
      messageCount: 5,
      ticks: 0,
      image: require('../../assets/file-2.jpg'),
    },
    {
      id: 4,
      name: 'Tayyab Bhae',
      message: 'Hii there!!! How are you?',
      time: '5:20 pm',
      pdf: true,
      call: false,
      mute: true,
      pin: false,
      messageCount: 7,
      ticks: 2,
      image: require('../../assets/file-3.jpg'),
    },
    {
      id: 5,
      name: 'Rehan Ahmed Khan',
      message: 'Hii there!!! How are you?',
      time: '5:20 pm',
      pdf: false,
      call: false,
      mute: false,
      pin: false,
      messageCount: 5,
      ticks: 1,
      image: require('../../assets/challenges.jpg'),
    },
  ],
  status: [
    {
      id: 1,
      name: 'Shoaib Butt',
      time: '5:20 pm',
      date: 'Today,',
      image: require('../../assets/related-1.jpg'),
    },
    {
      id: 2,
      name: 'Umer Husnain',
      time: '5:20 pm',
      date: 'Today,',
      image: require('../../assets/challenges.jpg'),
    },
    {
      id: 3,
      name: 'Mirza Ghalib',
      time: '5:20 pm',
      date: 'Today,',
      image: require('../../assets/file-2.jpg'),
    },
    {
      id: 4,
      name: 'Ali Bhae',
      time: '5:20 pm',
      date: 'Today,',
      image: require('../../assets/file-3.jpg'),
    },
    {
      id: 5,
      name: 'Nasir Jahazaib',
      time: '5:20 pm',
      date: 'Today,',
      image: require('../../assets/related-1.jpg'),
    },
  ],
  calls: [
    {
      id: 1,
      name: 'Faizan Bhae',
      time: '6:10 pm',
      date: 'Today,',
      ticks: 0,
      call: 1,
      missedCalls: 0,
      image: require('../../assets/related-1.jpg'),
    },
    {
      id: 2,
      name: 'Rehan Bhae',
      time: '5:10 pm',
      date: 'Yesterday,',
      ticks: 1,
      call: 0,
      missedCalls: 3,
      image: require('/Users/Rehan Khan/projects/RNFirstProject/assets/challenges.jpg'),
    },
    {
      id: 3,
      name: 'Umer Bhae',
      time: '5:40 pm',
      date: 'Today,',
      ticks: 0,
      call: 1,
      missedCalls: 2,
      image: require('/Users/Rehan Khan/projects/RNFirstProject/assets/file-2.jpg'),
    },
    {
      id: 4,
      name: 'Ghayoor Bhae',
      time: '5:10 pm',
      date: 'Yesterday,',
      ticks: 1,
      call: 0,
      missedCalls: 4,
      image: require('/Users/Rehan Khan/projects/RNFirstProject/assets/file-3.jpg'),
    },
    {
      id: 5,
      name: 'Arsl',
      time: '6 minutes ago',
      date: 'Today,',
      ticks: 0,
      call: 1,
      missedCalls: 8,
      image: require('/Users/Rehan Khan/projects/RNFirstProject/assets/challenges.jpg'),
    },
  ],
};

export const main = (state = initialState, action) => {
  if (action.type == 'MESSAGEDELETE') {
    const newState = state.message.filter(item => item.id != action.payload.id);
    const tempState1 = state;
    tempState1.message = newState;
    return tempState1;
  } else if (action.type == 'MESSAGEEDIT') {
    const newarray = state.message.map(item => {
      if (item.id == action.editVal.id) {
        item.name = action.updatedName;
        return item;
      }
      return item;
    });
    const tempState = state;
    tempState.message = newarray;
    return tempState;
  } else if (action.type == 'DISPLAYMESSAGELIST') {
    const newState1 = state;
    newState1.message = initialState.message;
    console.log(newState1);
    return newState1;
  } else if (action.type == 'STATUSDELETE') {
    const newState2 = state.status.filter(item => item.id != action.payload.id);
    const tempState2 = state;
    tempState2.status = newState2;
    return tempState2;
  } else if (action.type == 'DISPLAYSTATUSSLIST') {
    const newState3 = state;
    newState3.message = initialState.message;
    return newState3;
  } else if (action.type == 'CALLDELETE') {
    const newState4 = state.calls.filter(item => item.id != action.payload.id);
    const newCall = state;
    newCall.calls = newState4;
    return newCall;
  } else if (action.type == 'DISPLAYCALLLIST') {
    const newState5 = state;
    newState5.message = initialState.message;
    return newState5;
  } else {
    return state;
  }
};

//STATUS EDIT REMAINING
//  else if (action.type == 'STATUSEDIT') {
//   return 'Edit';
// }

// CALLS EDIT REMAINING
// else if (action.type == 'CALLEDIT') {
//   return 'Edit';
// }
