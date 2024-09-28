import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
axios.defaults.baseURL= "https://connections-api.goit.global/"

 export const setUserToken=(token)=>{
   axios.defaults.headers.common.Authorization=`Bearer ${token}`
}
 export const clearUserToken=()=>{
   axios.defaults.headers.common.Authorization=``
}

export const register=createAsyncThunk('auth/register', async (credentials,thunkAPI)=>{
   try {
      console.log(credentials)
     const {data}=await axios.post('/users/signup', credentials) 
     
     setUserToken(data.token)
     console.log(data)
     return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
});

export const login=createAsyncThunk('auth/login', async (credentials,thunkAPI)=>{
   try {
      const {data}=await axios.post('/users/login', credentials)
      setUserToken(data.token)
      console.log(data)
      return data;
   } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
   }
})

export const logout=createAsyncThunk('auth/logout', async (_,thunkAPI)=>{
try {
 await axios.post('/users/logout')
   clearUserToken();

} catch (error) {
   return thunkAPI.rejectWithValue(error.message);
}
})

export const refreshUser = createAsyncThunk(
   "auth/refresh",
   async (_, thunkAPI) => {
     const reduxState = thunkAPI.getState();
     setUserToken(reduxState.auth.token);
     const response = await axios.get("/users/current");
     return response.data;
   },
   {
     condition: (_, thunkAPI) => {
       const reduxState = thunkAPI.getState();
       return reduxState.auth.token !== null;
     },
   }
 );
