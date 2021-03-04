import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../UserContext';

import styles from './Navbar.module.css';
// import vault from '../../../img/vault.png';

const IwashNavBar = () => {

    const {countMessagesData} = useContext(UserContext);

    let tokenAuth = localStorage.getItem('token');

    return (
        <>
        <nav className={["navbar fixed-top navbar-expand-lg navbar-light", styles.navBarI].join(' ')}>
            <div className="container">
                <Link className="navbar-brand mobile btn btn-warning" to="/">
                    <i className="fas fa-building"></i>
                    &nbsp;
                    <span className={styles.brandName}><b>Headquarter</b></span>
                </Link>
                <ul className="nav navbar-nav navbar-right">
                    {!tokenAuth ?
                        <li>
                            {/* <Link to="/login" className={["btn", styles.btnGreen].join(' ')}> 
                                Login
                            </Link> */}
                        </li>
                    : 
                    <>
                        <li>
                            <Link to="/messages" className="icon-wrapper">
                                <i className="fa fa-envelope fa-2x icon-grey"></i>
                                <span className="badge">{countMessagesData}</span>
                            </Link>
                        </li>
                        <li>
                            <button 
                                className="btn btn-warning ml-3" 
                                onClick={async () => {
                                    localStorage.clear();
                                    window.location.href = "/";
                                }}
                            >
                                <b>
                                    LogOut
                                    &nbsp;  
                                    <i className="fas fa-power-off"></i>
                                </b>
                            </button>  
                        </li>
                    </>
                    }
                </ul>
            </div>
        </nav>
        </>
    );
};

export default IwashNavBar;