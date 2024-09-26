import { useSelector } from "react-redux";
import { setIsloggedin } from "../redux/auth/selectors";
import { Navigate } from "react-router-dom";
export default function RestrictedRoute({component,redirectTo}){
const isLoggedIn=useSelector(setIsloggedin);
return isLoggedIn?<Navigate to={redirectTo}/>:component;
}