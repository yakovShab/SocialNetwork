import styles from './Sidebar.module.css';
import {NavLink} from "react-router-dom";
// import {compose} from "redux";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>

            <form className={styles.searchContainer}>
                <span/>
                <input type="text" placeholder="Search friends, photos, videos"/>
            </form>

            <nav className={styles.nav}>
                <NavLink to="/profile" className={styles.links} activeClassName={styles.active}>
                    Profile
                </NavLink>
                <NavLink to="/messages" className={styles.links} activeClassName={styles.active}>
                    Messages
                </NavLink>
                <NavLink to="/friends" className={styles.links} activeClassName={styles.active}>
                    Friends
                </NavLink>
                <NavLink to="/users" className={styles.links} activeClassName={styles.active}>
                    Users
                </NavLink>

                <NavLink to="/news" className={styles.links} activeClassName={styles.active}>
                    News
                </NavLink>
                <NavLink to="/music" className={styles.links} activeClassName={styles.active}>
                    Music
                </NavLink>
                <NavLink to="/settings" className={styles.links} activeClassName={styles.active}>
                    Settings
                </NavLink>
            </nav>
        </aside>
    );
}

export default Sidebar;
// export default compose(withAuthRedirect)(Sidebar);