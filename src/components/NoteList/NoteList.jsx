import React, { useEffect } from 'react';
import { connect } from 'react-redux';


import { getNotes } from '../../redux/actions';
import NoteListItem from './NoteListItem/NoteListItem';
import * as styles from './NoteList.module.css';
import NewNoteItem from '../NewNoteItem/NewNoteItem';
import SearchListItem from '../Search/SearchListItem/SearchListItem';


const NoteList = ({ notes, listStyle, inputValue}) => {
	useEffect(() => {
		getNotes()
	}, [])

	return (
		<ul className={listStyle ? styles.list : styles.table}>
			{!inputValue && <NewNoteItem/>}
			{	
				!inputValue ? notes.map(note => <NoteListItem 
				note={note} 
				key={note.id} 
				listStyle={listStyle}/>) 
				:
				notes.map((note) => {
					if(note.text.includes(inputValue)) {
						return <SearchListItem note={note} key={note.id} inputValue={inputValue}/>
					}
				})}
		</ul>
	);
}

const mapDispatchToProps = {
	getNotes
}

const mapStateToProps = state => ({
	notes: state.notesReducer.notes,
	inputValue: state.appReducer.inputValue,
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteList);
// export default NoteList;
