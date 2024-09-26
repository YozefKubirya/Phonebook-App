import { Formik,Form,Field } from "formik";
import { useDispatch } from "react-redux";
import { addContact, } from '../../redux/contacts/contactsOps';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";
import css from '../ContactForm/ContactForm.module.css'
const FeedbackSchema = Yup.object().shape({
   name: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required!"),
   number:Yup.string().matches(/^\d{3}-\d{2}-\d{2}-\d{2}$/, "Must be XXX-XX-XX-XX")
   .required("Required!"),
 });
 
export default function ContactForm (){
const nameId=useId();
const numberId = useId()
const dispatch=useDispatch()
const handleSubmit=(values,actions)=>{
console.log(values)

dispatch(addContact(values));

actions.resetForm()
}
   return<>
  
   <Formik initialValues={{
      name:"",
      number:"",
   }} onSubmit={handleSubmit}
   validationSchema={FeedbackSchema}>
<Form className={css.form }>
   <label htmlFor={nameId}>Name</label>
   <Field type="text" name="name" id={nameId} className={css.formInput}/>
   <ErrorMessage name="name" component="span" className={css.span}/>
   <label htmlFor={numberId}>Number</label>
   <Field type="text" name="number" id={numberId}     placeholder="XXX-XX-XX-XX" className={css.formInput}/>
   <ErrorMessage name="number" component="span" className={css.span}/>
   <button type="submit" className={css.formButton}>Add contact</button>
</Form>
   </Formik>
   </>
}