import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Suspense, useEffect } from 'react'
import Layout from './components/Layout/Layout'
import HomePage from './pages/HomePage/HomePage'
import ContactsPage from './pages/ContactsPage/ContactsPage'
import RegisterPage from './pages/RegisterPage/RegisterPage'
import LogInPage from './pages/LogInPage/LogInPage'
import { useDispatch, useSelector } from 'react-redux'
import { setIsRefreshing } from './redux/auth/selectors'
import { refreshUser } from './redux/auth/operations'
import RestrictedRoute from './components/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute'
// import PrivateRoute from "./PrivateRoute";
function App() {
const dispatch=useDispatch();
const isUserRefreshing=useSelector(setIsRefreshing)

useEffect(()=>{
dispatch(refreshUser())
},[dispatch])

  return isUserRefreshing? (<b>Please wait user is refreshing</b>): (
    <Layout>
      <Suspense fallback={<div>Loading.....</div>}>
      <Routes>
    <Route path='/' element={ <HomePage/>}/>
    <Route path='/contacts' element={<PrivateRoute component={<ContactsPage/> } redirectTo="/login"/>}/>
    <Route path='/register' element={<RestrictedRoute component={<RegisterPage/>} redirectTo="/"/>}/>
    <Route path='/login' element={<RestrictedRoute component={<LogInPage/>} redirectTo="/contacts"/>}/>
      </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
