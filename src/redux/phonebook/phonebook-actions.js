import shortid from 'shortid';
// import types from './phonebook-types'
import { createAction } from '@reduxjs/toolkit';

const addContacts = createAction('phonebook/add', ({ name, number }) => ({
        payload: {
        id: shortid.generate(),
        name,
        number,
    }
}))

// const addTodo = ({ name, number }) => ({
//     type: types.ADD,
//     payload: {
//         id: shortid.generate(),
//         name,
//         number,
//     }
// })

const deleteContacts = createAction('phonebook/delete')

// const deleteContacts = (index) => ({
//     type: types.DELETE,
//     payload: index
// })

const changeFilter = createAction('phonebook/handleFilter')
// const changeFilter = value => ({
//     type: types.HANDLE_FILTER,
//     payload: value
// })

export default { addContacts, deleteContacts, changeFilter };