import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import { setIsloggedin } from "../../redux/auth/selectors"
import css from "../AppBar/AppBar.module.css"
export default function AppBar(){
   const isLoggedIn=useSelector(setIsloggedin)
   return<>
   <header className={css.header}>
      <Navigation/>
      {isLoggedIn ?  <UserMenu/>: <AuthNav/>}
     
     
   </header>
   </>
}