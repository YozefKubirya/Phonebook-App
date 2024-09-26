import { Formik,Form,Field } from "formik"
import { useId } from "react";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
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
<Form  >
   <label htmlFor={nameId}>Name</label>
   <Field type="text" name="name" id={nameId}/>
   <label htmlFor={emailId}>Email</label>
   <Field type="email" name="email" id={emailId}/>
   <label htmlFor={passwordId}>Password</label>
   <Field type="password" name="password" id={passwordId}/>
   <button type="submit">Submit</button>
</Form>
   </Formik>
   </>
}