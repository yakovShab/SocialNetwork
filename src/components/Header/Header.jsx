import styles from './Header.module.css';
import logo from '../../assets/img/logo.svg';
import {NavLink} from "react-router-dom";
// import {compose} from "redux";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div>
                    <NavLink to="/" className={styles.logo}>
                        <img src={logo} alt=""/>
                        <p>S.N.</p>
                    </NavLink>
                </div>


                <div className={styles.loginBlock}>
                    {props.isAuth ? <p>{props.login}</p> :
                        <NavLink to={'/login'} activeClassName={styles.active}>Login</NavLink>}
                </div>
            </div>
        </header>
    );
}
export default Header;
// export default compose(withAuthRedirect)(Header);