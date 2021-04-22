import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from '../NoteList/NoteListItem/NoteListItem.module.css';

const NewNoteItem = () => {
	const listStyle = true
	const note = {
		title: 'New note',
		text: 'New note'
	}
	// const createDate = (new Date(note.dateCreate)).toLocaleDateString();
	const createTime = (new Date(note.dateCreate)).toLocaleTimeString().slice(0, 5);
	
	return (
		<NavLink to={`/newNote`} className={styles.navLink} activeClassName={styles.selectedLink}>

			<div className={listStyle ? styles.listItem : styles.tableItem}>

				{listStyle && <h2 className={styles.title}>{note.title}</h2>}

				<p className={styles.subtitle}>
					{/* {listStyle && <span className={styles.createTime}>00:00</span>} */}
					{note.text}
				</p>

				<hr />

				{!listStyle && <div className={styles.tadTitle}>
					<p>{note.title}</p>
					<div>{createTime}</div>
				</div>}
				
			</div>
		</NavLink>

	);
}

export default NewNoteItem;