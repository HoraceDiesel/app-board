import { List, Map } from 'immutable';

const state = List([]);

export default function(msgs=state, action) {
  switch(action.type) {
    case 'ADD_MSG':
      return msgs.push(Map(action.payload));
    case 'DELETE_MSG':
      return msgs.filter(msg => msg.get('id') !== action.payload);
    default:
      return msgs;
  }
}