// import { combineReducers } from 'redux';
import { configureStore, getDefaultMiddleware, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from "redux-persist";
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook/phonebook-reducers';

const persistConfig = {
    key: 'contacts',
    storage,
}

// const rootReducer = combineReducers({
//     contacts: phonebookReducer,
// })

// const store = createStore(rootReducer, composeWithDevTools())
const middleware = [...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
}), logger]
  
const phonebookPersistConfig = {
    key: 'phonbooks',
    storage,
    blacklist: ['filter'],
}

const rootReducer = combineReducers({
    contacts: persistReducer(phonebookPersistConfig, phonebookReducer),
    })

const store = configureStore({
    reducer: rootReducer,
    middleware,
    devTools: process.env.NODE_ENV === 'development',

})

const persistor = persistStore(store)

export default {store, persistor};