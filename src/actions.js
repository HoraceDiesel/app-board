// Add a new message
export function addMsg(text) {
	let counter = 0;
	return {
		type: 'ADD_MSG',
		payload: {
			id: counter++,
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