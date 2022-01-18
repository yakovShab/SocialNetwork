import styles from './Post.module.css';
import postImg from "../../../../assets/img/img2.jpg";
import userAvatar from "../../../../assets/img/avatar2.webp";
import like from "../../../../assets/img/like.svg";
import {Field, Form} from "react-final-form";
import {Input} from "../../../common/FormsControls/FormsControls";
import {required} from "../../../../utils/validators/validators";


const Post = (props) => {
    return (
        <div className={styles.post}>
            <div className={styles.postUserInfo}>
                <div className={styles.userPost}>
                    <img src={props.profile.photos.large != null ? props.profile.photos.large : userAvatar} alt="ww"/>
                    <div>
                        <h5>
                            <a href="/" className={styles.profileLink}>{props.profile.fullName}</a>
                        </h5>
                        <p className={styles.countPub}>15 min ago</p>
                    </div>
                </div>
            </div>


            <div className={styles.postBody}>
                <img src={postImg} alt="" className={styles.postImg}/>

                <p className={styles.postText}>{props.text}</p>
            </div>

            <a href="/" className={styles.like}>
                <img src={like} alt="like"/>
                <span>{props.like}</span>
            </a>

            <div className={styles.postComment}>
                <h4>Comments:</h4>

                <div className={styles.commentBlock}>
                    <p>Comment 1</p>
                    <p>Comment 2</p>
                    <p>Comment 3</p>
                </div>

                <Form onSubmit={props.onSubmit}
                      render={props => (
                          <form onSubmit={props.handleSubmit} className={styles.form}>
                              <Field name='comment'
                                     component={Input}
                                     validate={required}
                                     type="text"
                                     placeholder="Post a comment"
                                     className={styles.newComment}/>

                              <button className={styles.send}>Send</button>
                          </form>
                      )}
                />
            </div>
        </div>)
}

export default Post;