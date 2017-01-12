export function addMsg(text) {
  return {
    type: 'ADD_MSG',
    payload: {
      id: new Date(),
      text: text
    }
  };
}

export function deleteMsg(id) {
  return {
    type: 'DELETE_MSG',
    payload: id
  }
}