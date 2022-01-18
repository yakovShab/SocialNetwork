import styles from "./UserBlock.module.css";
import UserPhoto from "../../../assets/img/avatar2.webp";


const UserBlock = (props) => {

    return (<div className={styles.userBlock}>

        <img src={props.profile.photos.large != null ? props.profile.photos.large : UserPhoto} alt="userImg"
             className={styles.userPhoto}/>

        <button className={styles.addFriends}>
            Add Friends
        </button>

    </div>)
};


export default UserBlock;
