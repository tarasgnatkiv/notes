import React from 'react';
import { connect } from 'react-redux';
import { setSearchInput } from '../../redux/actions';
import search from '../img/search.png';


import * as styles from './Search.module.css';

const Search = ({ inputValue, setSearchInput }) => {

	const handleChangeInput = (e) => {
		setSearchInput(e.target.value)
	}

	return(
		<div className={styles.searchContainer}>
			<img src={search}/>
			<input value={inputValue} onChange={handleChangeInput} placeholder='Search'/>
		</div>
	);
}

const mapDispatchToProps = {
	setSearchInput
}

const mapStateToProps = state => ({
	inputValue: state.appReducer.inputValue
})

export default connect(mapStateToProps, mapDispatchToProps)(Search);