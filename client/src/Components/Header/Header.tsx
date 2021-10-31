import { Link } from 'react-router-dom'
import '../css/header.css'
import cn from 'classnames'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthReducer } from '../../Selectors'
import { actions, logoutThunk } from '../../Redux/authReducer'

const Header = ()=>{

    const dispatch = useDispatch()

    const auth = useSelector(getAuthReducer)

    return(
        <header className={cn('header','clearfix')}>
        {auth.isAuth ? <div className="logout"><div>{auth.login}</div><div><button onClick={()=>dispatch(logoutThunk)}>Logout</button></div></div> :
         <div className="autorization">
         <Link onClick={()=>dispatch(actions.errorAc(''))} to='/login'><span >Sign in</span></Link>
         <Link onClick={()=>dispatch(actions.errorAc(''))} to='/registration'><span>Sign up</span></Link>
          </div>
        }
        </header>
    )
}

export default Header