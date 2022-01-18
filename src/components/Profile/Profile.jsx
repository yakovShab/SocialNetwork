import styles from './Profile.module.css';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Description from "./Description/Description";
import Preloader from "../common/Preloader/Preloader";
import UserBlock from "./UserBlock/UserBlock";

const Profile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (<div className={styles.profilePage}>
            <div className={styles.left}>
                <UserBlock profile={props.profile}/>
            </div>

            <div className={styles.right}>
                <Description profile={props.profile} status={props.status} updateUserStatus={props.updateUserStatus}/>
                <MyPostsContainer/>
            </div>

        </div>
    );
}

export default Profile;