import { useDispatch } from "react-redux"
import { deleteContact } from "../../redux/contacts/contactsOps";
import { FaPhone } from "react-icons/fa6";
import { RxAvatar } from "react-icons/rx";
import css from '../Contact/Contact.module.css'
export default function Contact ({name,number,id})
{
   const dispatch=useDispatch() 
   // console.log(id)
   const handledelete=()=>{
dispatch(deleteContact(id))}
   return<>
   
<div >
   <div className={css.textBox}>
  
   <p className={css.text}> <RxAvatar className={css.icon}/> {name}</p>
   
   <p className={css.text}> <FaPhone className={css.icon}/> {number}</p>
   </div>


</div>
<button type="click" onClick={handledelete}
className={css.deleteBtn}>Delete</button>

   </>
}