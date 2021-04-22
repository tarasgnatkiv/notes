import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createNoteMode, saveNoteAction, deleteNote, editModeAction, saveUpdateNote } from '../../redux/actions'
import Search from '../Search/Search';

import * as styles from './Header.module.css';

import leftArrow from '../img/leftArrow.png';
import trash from '../img/trash.png';
import edit from '../img/edit.png';
import share from '../img/share.png';

import mail from '../img/mail.png';
import airdrop from '../img/airdrop.png';
import messages from '../img/messages.png';
import reminders from '../img/reminders.png';
import more from '../img/more.png';


const Header = ({
	createNoteMode,
	noteMode,
	createNote,
	saveNoteAction,
	currentNote,
	deleteNote,
	editModeAction,
	editMode,
	updateNote,
	saveUpdateNote }) => {

	const saveNote = (createNote) => {
		if (createNote && createNote.text && createNote.text.trim()) saveNoteAction(createNote)
	}

	const handleClickBack = () => {
		if (editMode) editModeAction()
		if (updateNote) saveUpdateNote(currentNote, updateNote)
		if (noteMode) createNoteMode()
		if (createNote) saveNote(createNote)


	}

	const handleClickDelete = () => {
		if (currentNote) deleteNote(currentNote)
		if (noteMode) createNoteMode()
		if (editMode) editModeAction()
	}

	const handleClickEdit = () => {
		if (currentNote) {
			if (!editMode) { editModeAction() }
		}
	}

	const dropdownItems = [
		{title: 'Mail', icon: mail},
		{title: 'AirDrop', icon: airdrop},
		{title: 'Messages', icon: messages},
		{title: 'Reminders', icon: reminders},
		{title: 'More...', icon: more},
	];

	return (
		<div className={styles.header}>

			<div className={styles.headerLeft}>
				{(noteMode || editMode) && <button className={styles.leftArrow}>
					<NavLink to='/' onClick={handleClickBack}>
						<img src={leftArrow} />
					</NavLink>
				</button>}
				<button className={styles.delete}>
					<NavLink to='/' onClick={handleClickDelete}>
						<img src={trash} />
					</NavLink>
				</button>
			</div>
			<div className={styles.headerRight}>
				<button onClick={handleClickEdit}><img src={edit} /></button>
				<div className={styles.shareBody}>
					<button className={styles.shareBtn}><img src={share} /></button>
					<div className={styles.dropdown}>
						<ul className={styles.dropdownList}>
								{
									dropdownItems.map((dropdownItem, index) => 
									<li key={index}>
										<img src={dropdownItem.icon}/>
										{dropdownItem.title}
									</li>)
								}
						</ul>
					</div>
				</div>
				<Search />
			</div>
		</div>
	);
}

const mapDispatchToProps = {
	createNoteMode,
	saveNoteAction,
	deleteNote,
	editModeAction,
	saveUpdateNote
}

const mapStateToProps = state => ({
	noteMode: state.appReducer.noteMode,
	editMode: state.appReducer.editMode,
	createNote: state.notesReducer.createNote,
	currentNote: state.notesReducer.currentNote,
	updateNote: state.notesReducer.updateNote,
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);