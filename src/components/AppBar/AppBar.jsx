import Navigation from "../Navigation/Navigation"
import UserMenu from "../UserMenu/UserMenu"
import AuthNav from "../AuthNav/AuthNav"
import { useSelector } from "react-redux"
import { setIsloggedin } from "../../redux/auth/selectors"
export default function AppBar(){
   const isLoggedIn=useSelector(setIsloggedin)
   return<>
   <header>
      <Navigation/>
      {isLoggedIn ?  <UserMenu/>: <AuthNav/>}
     
     
   </header>
   </>
}