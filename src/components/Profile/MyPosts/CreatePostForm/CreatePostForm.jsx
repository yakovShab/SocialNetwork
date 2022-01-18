import styles from './CreatePostForm.module.css';
import {Field, Form} from "react-final-form";
import {composeValidators, maxLengthCreator, required} from "../../../../utils/validators/validators";
import {Textarea} from "../../../common/FormsControls/FormsControls";

const CreatePostForm = (props) => {
    return (
            <Form onSubmit={props.onSubmit}
                  render={props => (
                      <form onSubmit={props.handleSubmit} className={styles.createPost}>
                          <Field name='post'
                                 component={Textarea}
                                 validate={composeValidators(required, maxLengthCreator(10))}
                                 placeholder='new posts text...'
                                 className={styles.createText}/>
                          <button className={styles.addPost}>Publish</button>
                      </form>)
                  }/>
    );
}

export default CreatePostForm;
