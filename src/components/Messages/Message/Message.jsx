import styles from './Message.module.css';
import avatar from "../../../assets/img/avatar.svg";


const Message = (props) => {
    return (
        <div className={styles.messageBox}>

            <div className={styles.messageUser}>
                <img src={avatar} alt="" className={styles.avatar}/>
                <span>6:45</span>
            </div>

            <div className={styles.message}>
                <p>{props.message}</p>
            </div>

        </div>
    );
}

export default Message;
