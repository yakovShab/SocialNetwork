import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import CreatePostForm from "./CreatePostForm/CreatePostForm";

const MyPosts = (props) => {
    const onSubmit = (formData) => {
        props.addPost(formData.post)
    }

    const onSubmit2 = (formData) => {
        props.addComment(formData.comment)
    }
    const postElement = props.posts.map(p => <Post onSubmit={onSubmit2}
                                                   profile={props.profile}
                                                   text={p.text}
                                                   like={p.like}/>);
    return (<div className={styles.postsWall}>
        <CreatePostForm onSubmit={onSubmit}/>

        {postElement}
    </div>);
}

export default MyPosts;
