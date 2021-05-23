import React from 'react';
import styles from "./ContactListItem.module.css";

const ContactListItem = ({name, number, onDelete }) => (
    <li className={styles.contactListItem} >
        {name}: {number}
        <button className={styles.contactButton} onClick={onDelete}>Delete</button>
    </li>
)

export default ContactListItem;