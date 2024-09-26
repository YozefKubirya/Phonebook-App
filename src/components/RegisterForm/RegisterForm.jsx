import { Formik,Form,Field } from "formik"
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
import css  from "../RegisterForm/RegisterForm.module.css"
export default function RegisterForm(){
   const nameId=useId();
   const emailId=useId();
   const passwordId=useId()
   const dispatch=useDispatch()
   const handleSubmit=(values,actions)=>{
  console.log('values:',values)
  dispatch(register(values))
  actions.resetForm();
   }
   return <>
   <Formik initialValues={{
      name:"",
      email:"",
      password:"",
   }} onSubmit={handleSubmit}>
<Form className={css.form} >
   <label htmlFor={nameId}>Name</label>
   <Field type="text" name="name" id={nameId} className={css.formInput}/>
   <label htmlFor={emailId}>Email</label>
   <Field type="email" name="email" id={emailId} className={css.formInput}/>
   <label htmlFor={passwordId}>Password</label>
   <Field type="password" name="password" id={passwordId} className={css.formInput}/>
   <button type="submit" className={css.formButton}>Submit</button>
</Form>
   </Formik>
   </>
}