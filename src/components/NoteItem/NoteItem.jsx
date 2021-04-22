import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getCurrentNote, editModeAction, setUpdateNote } from '../../redux/actions'
import * as styles from './NoteItem.module.css';

const NoteItem = ({ notes, match, getCurrentNote, editMode, editModeAction, setUpdateNote }) => {

	const currentNote = notes.find(note => note.id === match.params.noteId);
	const dateUpdate = new Date();

	useEffect(() => {
		getCurrentNote(currentNote.id)
		return () => {
			getCurrentNote(null)
			setUpdateNote(null)
		}
	}, [currentNote.id])

	const createDate = (new Date(currentNote.dateCreate)).toLocaleDateString();
	const createTime = (new Date(currentNote.dateCreate)).toLocaleTimeString().slice(0, 5);
	const [title, setTitle] = useState(currentNote.text)
	useEffect(() => {
		setTitle(currentNote.text)
	}, [currentNote])



	const handleChangeTextarea = (e) => {
		setTitle(e.target.value)
		setUpdateNote({
			dateCreate: dateUpdate,
			text: e.target.value
		})
	}


	return (
		<div className={!editMode ? styles.noteItem : styles.noteItemEdit}>
			<div>{createDate} in {createTime}</div>
			{
				!editMode ? <textarea value={title} readOnly /> :
					<textarea value={title} onChange={handleChangeTextarea} />
			}

		</div>
	);
}

const mapDispatchToProps = {
	getCurrentNote,
	editModeAction,
	setUpdateNote
}

const mapStateToProps = state => ({
	editMode: state.appReducer.editMode,
})

export default connect(mapStateToProps, mapDispatchToProps)(NoteItem);