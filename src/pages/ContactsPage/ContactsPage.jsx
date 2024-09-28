import ContactForm from "../../components/ContactForm/ContactForm"
import SearchBox from "../../components/SearchBox/SearchBox"
import ContactList from "../../components/ContactList/ContactList"
import { selectError,selectLoading } from '../../redux/selectors'
import { useDispatch,useSelector } from 'react-redux'
import { fetchContacts } from '../../redux/contacts/operations'
import { useEffect } from 'react'
export default function ContactsPage (){
   const loading=useSelector(selectLoading);
  const error=useSelector(selectError);
  const dispatch=useDispatch();
  useEffect(()=>{
  dispatch(fetchContacts())
  },[dispatch])

   return<>
   <h2>Please add your contacts</h2>
   <ContactForm/>
    <SearchBox/>
    {loading && <>Loading ,please wait......</>}
    {error && <>Ops, there is an error happend , please try later....;
    </>}
     <ContactList/> 
   </>
}