import { Field, Form, Formik } from "formik"
import { useDispatch, useSelector } from "react-redux"
import { RegistrationThunk } from "../../Redux/authReducer"
import { getAuthReducer } from "../../Selectors"
import { maxLength30 } from "../../validation"
import { valuesRegistation } from "./Main"

const Registration = ()=>{

    const dispatch = useDispatch()

    const auth = useSelector(getAuthReducer)
    
    const registration = async (values:valuesRegistation)=>{
      await dispatch(RegistrationThunk(values))
    }

    return(
        <div className='auth'>
        <div className='auth_title'>Sign up</div>
        <Formik initialValues={{login: '',password: '',repeatPassword:''}}
        onSubmit={(values: valuesRegistation, a: any) => {registration(values).then(()=>a.resetForm())}}>
        <Form>
          <Field id="login" name="login" placeholder="login" validate={maxLength30}/>

          <Field id="password" name="password" placeholder="password" validate={maxLength30}/>

          <Field id="repeatPassword" name="repeatPassword" placeholder="repeat password" validate={maxLength30}/>

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      {<div className="error"><span>{auth.error}</span></div>} {<div className="success"><span>{auth.success}</span></div>}
        </div>
    )
}

export default Registration