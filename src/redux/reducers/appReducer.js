import { CANGE_LIST_SYLE, CREATE_NOTE_MODE, EDIT_MODE, SET_SEARCH_INPUT } from "../types"

const initialState = {
	listStyle: true,
	noteMode: false,
	editMode: false,
	inputValue: '',
}

export const appReducer = (state = initialState, action) => {
	switch (action.type) {
		case CANGE_LIST_SYLE:
			return {
				...state,
				listStyle: !state.listStyle
			}
		case CREATE_NOTE_MODE:
			return {
				...state,
				noteMode: !state.noteMode
			}
		case EDIT_MODE:
			return {
				...state,
				editMode: !state.editMode
			}
		case SET_SEARCH_INPUT:
			return {
				...state,
				inputValue: action.payload
			}

		default: return state
	}
}