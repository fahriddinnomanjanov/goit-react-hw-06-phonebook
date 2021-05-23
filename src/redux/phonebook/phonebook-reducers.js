import { combineReducers } from 'redux'
// import types from './phonebook-types'
import { createReducer } from '@reduxjs/toolkit'
import actions from './phonebook-actions'

console.log(actions.deleteContacts.type);
const contacts = createReducer([], {
    [actions.addContacts]: (state, action) => [...state, action.payload],
    [actions.deleteContacts]: (state, {payload}) => state.filter((_, index)  => index !== payload)

})

const filter = createReducer('', {
    [actions.changeFilter]: (state, {payload}) => payload
})

// const contacts = (state = [],{ type, payload }) => {
//     switch (type) {
//         case types.ADD:
//             return [...state, payload]
        
//         case types.DELETE:
//             const newArr = [...state]
//             newArr.splice(payload, 1)
//             return newArr
        
//             default:
//             return state
//     }
// }
// const filter = (state = '', {type, payload}) => {
//     switch (type) {
//         case types.HANDLE_FILTER:
//             return payload
        
//         default:
//             return state
//         }
// }

export default combineReducers({
    contacts,
    filter
})