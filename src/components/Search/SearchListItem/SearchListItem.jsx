import React from 'react';
import { NavLink } from 'react-router-dom';

import * as styles from './SearchListItem.module.css';

const SearchListItem = ({ note, inputValue }) => {

	// const createDate = (new Date(note.dateCreate)).toLocaleDateString();
	const createTime = (new Date(note.dateCreate)).toLocaleTimeString().slice(0, 5);
	const textAtt = note.text.split('\n')
	const title = textAtt[0]
	const text = textAtt[1] || `Don't have text`;



	return (
		<NavLink to={`/${note.id}`} className={styles.navLink} activeClassName={styles.selectedLink}>
			<div className={styles.listItem}>
				<h2 className={styles.title}>{title}</h2>
				<p className={styles.subtitle}>
					<span className={styles.createTime}>{createTime}</span>
					{text}
				</p>
				<hr />
			</div>
		</NavLink>

	);
}

export default SearchListItem;