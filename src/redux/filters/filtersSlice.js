import { createSlice } from "@reduxjs/toolkit";


const filterSlice=createSlice({
   name:"filters",
   initialState:{
      name: ""
   },
   reducers:{
      changeFilters:(state,action)=>{
         return{
            ...state,
            name:action.payload.name
         }
      }
   }
})
export const {changeFilters}=filterSlice.actions;

export  default filterSlice.reducer;


// const initialState={
//    filters: {
// 		name: ""
// 	}
// }
// export const filterContact=createAction("contacts/filterContact");
// export const filterReducer=(state=initialState.filters,action)=>{
//    switch(action.type){
//       case "contacts/filterContact":
//          return{
//             ...state,
//             name:action.payload.name
//          }
//       default: return state;

//    }
// }