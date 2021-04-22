import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './NoteListItem.module.css';

const NoteListItem = ({ note, listStyle }) => {

	// const createDate = (new Date(note.dateCreate)).toLocaleDateString();
	const createTime = (new Date(note.dateCreate)).toLocaleTimeString().slice(0, 5);
	const textAtt = note.text.split('\n')
	const title = textAtt[0] 
	const text = textAtt[1] || `Don't have text`;
	return (
		<NavLink to={`/${note.id}`} className={styles.navLink} activeClassName={styles.selectedLink}>

			<div className={listStyle ? styles.listItem : styles.tableItem}>

				{listStyle && <h2 className={styles.title}>{title}</h2>}

				<p className={styles.subtitle}>
					{listStyle && <span className={styles.createTime}>{createTime}</span>}
					{text}
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

export default NoteListItem;