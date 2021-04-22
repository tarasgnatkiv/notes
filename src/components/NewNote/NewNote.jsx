import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createNoteMode, createNote } from '../../redux/actions';

import * as styles from './NewNote.module.css';

const NewNote = ({ createNoteMode, createNote }) => {
	useEffect(() => {
		createNoteMode()
		
		return () => createNote(null)
	}, [])

	 

	const notesDate = new Date();
	const createDate = (new Date(notesDate)).toLocaleDateString();
	const createTime = (new Date(notesDate)).toLocaleTimeString().slice(0, 5);

	const [textareaValue, setTextareaValue] = useState('');
	const handleChange = (e) => {
		setTextareaValue(e.target.value);
		setCreatedNote({
			...createdNote,
			text: e.target.value,
		})
	}

	const [createdNote, setCreatedNote] = useState({
		dateCreate: notesDate.toString(),
		text: ''
	})

	// console.log(createdNote)


	useEffect(() => {
		createNote(createdNote)
	}, [createdNote])

	return (
		<div className={styles.newNoteBody}>
			<div>{createDate} in {createTime}</div>
			<textarea value={textareaValue} onChange={handleChange} autoFocus />
		</div>
	);
}

const mapDispatchToProps = {
	createNoteMode,
	createNote
}

const mapStateToProps = state => ({
	noteMode: state.appReducer.noteMode,
})

export default connect(mapStateToProps, mapDispatchToProps)(NewNote);