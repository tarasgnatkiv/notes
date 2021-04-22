import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route } from "react-router-dom";

import { getNotes } from '../../redux/actions';
import NewNote from '../NewNote/NewNote';
import NoteItem from '../NoteItem/NoteItem';
import NoteList from '../NoteList/NoteList';

import * as styles from './App.module.css';
import Header from '../Header/Header';

const App = ({ listStyle, notes, getNotes, noteMode, editMode }) => {

	useEffect(() => {
		getNotes()
	}, [])
	return (
		<>
			<div className={styles.appContainer}>
				<div className={styles.app}>
					<Header/>
					<div className={styles.appBody}>
						{(!noteMode && !editMode) && <NoteList listStyle={listStyle} />}
						<Switch>
							<Route path='/newNote' component={NewNote} />
							{/* <Route exact path="/:noteId" render={(props) => (
							<NoteItem {...props} notes={notes} />
						)} /> */}
							{(listStyle && notes.length > 0) ?
								<Route path="/:noteId" render={(props) => (
									<NoteItem {...props} notes={notes} />
								)} /> : null}
						</Switch>
					</div>
				</div>
			</div>
		</>

	);
}

const mapDispatchToProps = {
	getNotes
}

const mapStateToProps = state => ({
	notes: state.notesReducer.notes,
	listStyle: state.appReducer.listStyle,
	noteMode: state.appReducer.noteMode,
	editMode: state.appReducer.editMode,
})

export default connect(mapStateToProps, mapDispatchToProps)(App);