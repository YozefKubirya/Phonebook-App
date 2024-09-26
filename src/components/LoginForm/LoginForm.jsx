import { Formik,Form,Field } from "formik"
import { useId } from "react"
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
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
      <Form>
<label htmlFor={emailId}>Email</label>
<Field type="text" name="email" id={emailId}/>
<label htmlFor={passwordId}>Password</label>
<Field type="password" name="password" id={passwordId}/>
<button type="submit">Log In</button>
      </Form>
   </Formik>
   </>
}