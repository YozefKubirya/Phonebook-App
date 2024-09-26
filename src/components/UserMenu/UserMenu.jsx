import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"
import css from "../UserMenu/UserMenu.module.css"
export default function UserMenu (){
   const userName=useSelector(setUserName)
   const dispatch =useDispatch()
   const logOutUser=()=>{
      dispatch(logout())
   }
   
   return <>
   <div className={css.userMenu}>
   <h2 className={css.userTitle}>Welcome {userName}</h2>
   <button onClick={logOutUser} className={css.logoutBtn}>Logout</button>
   </div>
   
   </>
}