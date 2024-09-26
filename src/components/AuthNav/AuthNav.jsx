import { NavLink } from "react-router-dom"
import css from "../AuthNav/AuthNav.module.css"
export default function AuthNav (){
   return<>
   <div>
  <NavLink to='/register' className={css.navLink}>
   Register
  </NavLink>
  <NavLink to='/login' className={css.navLink}>
   Log In
  </NavLink>
   </div>
   </>
}