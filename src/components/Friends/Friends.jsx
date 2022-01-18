import styles from './Friends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {
    const friendsData = props.friends.map(f => <Friend firstName={f.firstName} lastName={f.lastName}/>);

    return (
        <div className={styles.friendsPage}>
        {friendsData}
        </div>
    );
}

export default Friends;
