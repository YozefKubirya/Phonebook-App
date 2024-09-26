import { NavLink } from "react-router-dom"
import css from "../Navigation/Navigation.module.css"
export default function Navigation (){
   return <>
   <nav>
   <NavLink to='/' className={css.navLink}>
     Home
   </NavLink>
   <NavLink to='/contacts' className={css.navLink}>
    Contacts
   </NavLink>
   </nav>
   
   </>
}