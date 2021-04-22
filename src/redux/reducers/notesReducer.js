import { CREATE_NOTE, DELETE_NOTE, GET_CURRENT_NOTE, GET_NOTES, SAVE_NOTE, SAVE_UPDATE_NOTE, SET_UPDATE_NOTE } from "../types"

const initialState = {
	notes: [],
	createNote: null,
	currentNote: null,
	updateNote: null
}

export const notesReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_NOTES:
			return {
				...state,
				notes: action.payload
			}
		case CREATE_NOTE:
			return {
				...state,
				createNote: action.payload
			}
		case SAVE_NOTE:
			return {
				...state,
			}
		case GET_CURRENT_NOTE:
			return {
				...state,
				currentNote: action.payload
			}
		case DELETE_NOTE:
			return {
				...state,
				currentNote: null
			}
		case SET_UPDATE_NOTE:
			return {
				...state,
				updateNote: action.payload
			}
		case SAVE_UPDATE_NOTE:
			return {
				...state,
			}

		default: return state
	}
}