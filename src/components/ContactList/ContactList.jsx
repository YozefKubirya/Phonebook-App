import { useSelector } from "react-redux"
import Contact from "../Contact/Contact";
import css from '../ContactList/ContactList.module.css'
import { selectFilteredContacts } from "../../redux/selectors";
export default function ContactList(){
  
   const filteredContact=useSelector(selectFilteredContacts);
 
   return<>
<ul className={css.contactList}>
   {filteredContact.map((contact)=>(
      
      <li key={contact.id} className={css.contact}>
      <Contact name={contact.name} number={contact.number} id={contact.id}/>
   </li>
  
      
   ))}
</ul>
   </>
}