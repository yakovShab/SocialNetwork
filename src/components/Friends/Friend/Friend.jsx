import styles from './Friend.module.css';
import avatar from '../../../assets/img/avatar.svg';

const Friend = (props) => {
    return (
            <div className={styles.friendsFlex}>

                <img src={avatar} alt="" className={styles.avatar}/>

                <a href="/" className={styles.userName}>
                    {props.firstName} {props.lastName}
                </a>

            </div>
    );
}

export default Friend;
