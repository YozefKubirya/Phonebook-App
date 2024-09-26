import { useDispatch, useSelector } from "react-redux"
import { setUserName } from "../../redux/auth/selectors"
import { logout } from "../../redux/auth/operations"

export default function UserMenu (){
   const userName=useSelector(setUserName)
   const dispatch =useDispatch()
   const logOutUser=()=>{
      dispatch(logout())
   }
   
   return <>
   <h2>welcome {userName}</h2>
   <button onClick={logOutUser}>Log out</button>
   </>
}