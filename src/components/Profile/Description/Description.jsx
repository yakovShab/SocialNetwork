import styles from './Description.module.css';
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const Description = (props) => {

    return (<div className={styles.description}>

        <h3 className={styles.fullName}>{props.profile.fullName}</h3>

        <div className={styles.status}>
            <ProfileStatus status={props.status}
                           updateUserStatus={props.updateUserStatus}/>
        </div>

        <div className={styles.about}>
            <p>{props.profile.aboutMe != null ? props.profile.aboutMe : 'No information available'}</p>

            <h6 className={styles.contacts}>Contacts</h6>
        </div>

    </div>)
};


export default Description;
