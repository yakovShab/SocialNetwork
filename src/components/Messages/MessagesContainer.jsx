import {sendMessageCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Messages from "./Messages";
import {compose} from "redux";

const mapStateToProps = (state) => {
    return {
        dialogs: state.messagesPage.dialogs,
        messages: state.messagesPage.messages,
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        sendMessage: (messages) => {
            dispatch(sendMessageCreator(messages));
        }
    }
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages);

