import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer, FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER, } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

import contactReducer from './contacts/slice'
import filterReducer from './filters/filtersSlice'
import authReducer from './auth/slice'

const persistedAuthReducer=persistReducer({
  key:"auth",
  storage,
  whitelist:["token"] 
},authReducer)
export const store= configureStore({
   reducer:{
      auth:persistedAuthReducer,
      contacts:contactReducer,
      filters:filterReducer,
     
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
})

export const persistor=persistStore(store)






// const rootReducer=(state=initialState,action)=>{
//    switch(action.type){
// case "contacts/addContacts" :
//    return{
//       ...state,
//       contacts:{
//          items:[...state.contacts.items, action.payload]
//       }
//    };
//    case "contacts/deleteContacts" :
//       return{
//          ...state,
//          contacts:{
//             items:state.contacts.items.filter((contact)=> contact.id !== action.payload)
//          }
//       }
// case "contacts/filterContact":
//    return{
//       ...state,
//       filters:{
//         ...state.filters,
//          name:action.payload.name
//       }
//    }

//    default:
//       return state;
//    }
  
   
// }