import styles from './AddMessageForm.module.css';
import {Field, Form} from "react-final-form";
import {Textarea} from "../../common/FormsControls/FormsControls";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";


const AddMessageForm = (props) => {
    return (
            <Form onSubmit={props.onSubmit}
                  render={props => (
                      <form onSubmit={props.handleSubmit}>
                          <Field name='messages'
                                 component={Textarea}
                                 validate={composeValidators(required, maxLengthCreator(10))}
                                 placeholder='new message text...'
                                 className={styles.newText}/>

                          <button className={styles.addText}>Send</button>
                      </form>
                  )}
            />
    );
}
export default AddMessageForm;
