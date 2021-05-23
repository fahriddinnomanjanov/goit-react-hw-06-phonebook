import React from 'react';
import styles from "./Filter.module.css";
import { connect } from 'react-redux';
import phonebookActions from '../../redux/phonebook/phonebook-actions'

const Filter = ({ value, onChange }) => {
    return <label className={styles.filterLabel }>
        Filtered by name <input className={styles.filterInput } type="text" value={value} onChange={onChange }/>
    </label>
};
const mapStateToProps = (state) => ({
    value: state.contacts.filter
})

const mapDispatchToProps = dispatch => ({
    onChange: (e) => dispatch(phonebookActions.changeFilter(e.target.value))
})

export default connect(mapStateToProps,mapDispatchToProps)(Filter);