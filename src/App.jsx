import { Routes,Route } from 'react-router-dom'
import './App.css'
import { Suspense, useEffect,lazy } from 'react'
import Layout from './components/Layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { setIsRefreshing } from './redux/auth/selectors'
import { refreshUser } from './redux/auth/operations'
import RestrictedRoute from './components/RestrictedRoute'
import PrivateRoute from './components/PrivateRoute'
const HomePage=lazy(()=>import('../src/pages/HomePage/HomePage'))
const ContactsPage =lazy(()=>import('../src/pages/ContactsPage/ContactsPage'))
const RegisterPage=lazy(()=>import('../src/pages/RegisterPage/RegisterPage'))
const LogInPage =lazy(()=>import('../src/pages/LogInPage/LogInPage'))

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
