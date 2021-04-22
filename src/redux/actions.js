import firebase from '../firebase/firebase';
import {
	GET_NOTES,
	CREATE_NOTE_MODE,
	CREATE_NOTE,
	SAVE_NOTE,
	GET_CURRENT_NOTE,
	DELETE_NOTE,
	EDIT_MODE,
	SET_UPDATE_NOTE,
	SAVE_UPDATE_NOTE,
	SET_SEARCH_INPUT
} from './types';

export const getNotes = () => async dispatch => {
	const notesRef = await firebase.database().ref('Notes');

	notesRef.on('value', (snapshot) => {
		const notes = snapshot.val();
		// console.log(notes)
		const noteList = [];
		for (let id in notes) {
			noteList.push({ id, ...notes[id] });
		}

		//sort by date
		noteList.sort(function (a, b) {
			// Turn your strings into dates, and then subtract them
			// to get a value that is either negative, positive, or zero.
			return new Date(b.dateCreate) - new Date(a.dateCreate);
		});
		dispatch({ type: GET_NOTES, payload: noteList })
	});
}

export const saveNoteAction = (createdNote) => dispatch => {
	const noteRef = firebase.database().ref('Notes');
	noteRef.push(createdNote);
	dispatch({ type: SAVE_NOTE })
}

export const deleteNote = (noteId) => dispatch => {
	const noteRef = firebase.database().ref('Notes').child(noteId);
	noteRef.remove();
	dispatch({ type: DELETE_NOTE })
}

export const saveUpdateNote = (noteId, updateNote) => dispatch => {
	const noteRef = firebase.database().ref('Notes').child(noteId);
	noteRef.update(updateNote);
	dispatch({ type: SAVE_UPDATE_NOTE })
}

export const createNoteMode = () => ({
	type: CREATE_NOTE_MODE
})

export const createNote = (createdNote) => ({
	type: CREATE_NOTE, payload: createdNote
})

export const getCurrentNote = (noteId) => ({
	type: GET_CURRENT_NOTE, payload: noteId
})

export const editModeAction = () => ({
	type: EDIT_MODE
})

export const setUpdateNote = (updateNote) => ({
	type: SET_UPDATE_NOTE, payload: updateNote
})

export const setSearchInput = (inputValue) => ({
	type: SET_SEARCH_INPUT, payload: inputValue
})
