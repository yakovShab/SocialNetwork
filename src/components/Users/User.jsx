import React from 'react';
import styles from "./Users.module.css";
import {NavLink} from "react-router-dom";
import avatar from "../../assets/img/avatar.svg";

let User = ({user, followingInProgress, unfollow, follow}) => {
    return (<div key={user.id} className={styles.user}>

        <div className={styles.userItem}>

            <NavLink to={'/profile/' + user.id}>
                <img src={user.photos.small != null ? user.photos.small : avatar} alt="ava"/>
            </NavLink>

            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          className={styles.follow}
                          onClick={() => {
                              unfollow(user.id)
                          }}>Unfollow</button>

                : <button disabled={followingInProgress.some(id => id === user.id)}
                          className={styles.follow}
                          onClick={() => {
                              follow(user.id)
                          }}>Follow</button>}

        </div>

        <div className={styles.blockInfo}>

            <div className={styles.userInfo}>
                <h3 className={styles.userName}>{user.name}</h3>

                <p>{user.status}</p>
            </div>

            <div className={styles.fromPlace}>
                <h4>user.location.country</h4>
                <h5>user.location.city</h5>
            </div>
        </div>
    </div>)
}

export default User;