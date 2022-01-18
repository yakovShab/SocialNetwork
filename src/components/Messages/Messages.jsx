import styles from './Messages.module.css';
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm/AddMessageForm";


const Messages = (props) => {
    const dialogElement = props.dialogs.map(d => <Dialog id={d.id} name={d.name} last={d.last} count={d.count} time={d.time}/>);

    const messageElement = props.messages.map(m => <Message message={m.message}/>);

    const onSubmit= (formData) => {
        props.sendMessage(formData.messages)
    }
    return (
        <div className={styles.messagePage}>

            <div className={styles.dialogs}>
                {dialogElement}
            </div>

            <div className={styles.messages}>
                {messageElement}
            </div>

            <div className={styles.addMessage}>
                <AddMessageForm onSubmit={onSubmit}/>
            </div>
        </div>
    );
}
export default Messages;
