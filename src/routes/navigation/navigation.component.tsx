import {Link, Outlet} from "react-router-dom";
import React, {useContext} from "react";
import {ReactComponent as CrwnLogo} from "../../assets/crown.svg";
import './navigation.styles.scss';
import {UserContext} from "../../components/contexts/user.context";
import {signOutUser} from "../../utils/firebase/frebase.utils";

const Navigation = () => {

    const {currentUser, setCurrentUser} = useContext(UserContext);

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null);
    }

    return (
            <>
                <div className='navigation'>
                    <Link className='logo-container' to='/'>
                        <CrwnLogo className='logo'></CrwnLogo>
                    </Link>
                    <div className='nav-links-container'>
                        <Link className='nav-link' to='/shop'>Shop</Link>
                        {
                            currentUser
                                    ? (<span className='nav-link' onClick={() => signOutHandler()}>Sign Out</span>)
                                    : (<Link className='nav-link' to='/auth'>Sign in</Link>)
                        }
                    </div>
                </div>
                <Outlet/>
            </>
    );
}

export {Navigation};