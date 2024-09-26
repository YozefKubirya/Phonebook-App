import { Formik,Form,Field } from "formik"
import { useId } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import css from "../LoginForm/LoginForm.module.css"
export default function LoginForm(){
   const emailId=useId();
   const passwordId=useId();
   const dispatch=useDispatch();
   const handleSubmit=(values,actions)=>{
   dispatch(login(values))
actions.resetForm();
   }
   return<>
   <Formik initialValues={{
      email:"",
      password:"",
   }} onSubmit={handleSubmit}>
      <Form className={css.form}>
<label htmlFor={emailId}>Email</label>
<Field type="text" name="email" id={emailId} className={css.formInput}/>
<label htmlFor={passwordId}>Password</label>
<Field type="password" name="password" id={passwordId} className={css.formInput}/>
<button type="submit" className={css.formButton}>Log In</button>
      </Form>
   </Formik>
   </>
}