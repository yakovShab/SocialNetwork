import styles from './Dialog.module.css';
import avatar from '../../../assets/img/avatar2.webp'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {


    return (
        <NavLink to={`/messages/dialogs/${props.id}`} className={styles.dialog} activeClassName={styles.active}>
            <div className={styles.flexBox}>

                    <div className={styles.avatar}>
                        <img src={avatar} alt=""/>
                        <span className={styles.circle}/>
                    </div>

                <div className={styles.name}>
                    <h6>{props.name}</h6>
                    <p>{props.last}</p>
                </div>

                <div className={styles.chatInfo}>
                    <div className={styles.counter}>{props.count}</div>
                    <span className={styles.time}>{`${props.time} min`}</span>
                </div>

            </div>
        </NavLink>
    )
}

export default Dialog;
