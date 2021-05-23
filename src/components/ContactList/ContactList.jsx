import React from 'react';
import ContactListItem from '../ContactListItem/ContactListItem';
import styles from "./ContactList.module.css";
import { connect } from 'react-redux'
import phonebookActions from '../../redux/phonebook/phonebook-actions'



const ContactList = ({ list, handleDelete }) => {
    const newArray = [...list].map((item, index) => <ContactListItem onDelete={()=>handleDelete(index)} key={item.id} {...item}/> )
    return (
        <ul className={styles.contactList}>
            {newArray}
        </ul>
    )
}
    
const mapStateToProps = ({ contacts: { contacts, filter } }) => {
    const FILTER = filter.toLowerCase()
    const filteredContacts = contacts.filter(({ name, number }) => name.toLowerCase().includes(FILTER) || number.includes(FILTER))
    return {
        list: filteredContacts
    }
        
}

const mapDispatchToProps = dispatch => ({
    handleDelete: (index) => dispatch(phonebookActions.deleteContacts(index))
})



export default connect(mapStateToProps, mapDispatchToProps)(ContactList);