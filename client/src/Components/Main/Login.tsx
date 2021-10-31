import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { loginThunk } from "../../Redux/authReducer"
import { getAuthReducer } from "../../Selectors"
import { maxLength30 } from "../../validation"
import { valuesLogin } from "./Main"

const Login = ()=>{

    const login = (values:valuesLogin)=>{
      dispatch(loginThunk(values))
    }

    const auth = useSelector(getAuthReducer)

    const dispatch = useDispatch()
    return(
        <div className='auth'>
          <div className='auth_title'>Sign in</div>
          
        <Formik initialValues={{login: '',password: ''}}
        onSubmit={(values: valuesLogin) => {login(values)}}>
        <Form>
          <Field id="login" name="login" placeholder="login" validate={maxLength30}/>

          <Field id="password" name="password" placeholder="password" validate={maxLength30}/>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <div className="error">{auth.error && <span>{auth.error}</span>}</div>
     
        </div>
    )
}

export default Login