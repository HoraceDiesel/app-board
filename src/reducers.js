import { List, Map } from 'immutable';

const state = List([]);

export default function(state=state, action) {
  switch (action.type) {
    case 'ADD_MSG':
      return state.push(Map(action.payload));
    case 'DELETE_MSG':
      const msgId = action.id;
      return state.filter(eachMsg => eachMsg.id !== msgId);

    default:
      return state || [];
  }
}
