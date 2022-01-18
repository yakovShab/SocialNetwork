import {connect} from "react-redux";
import Friends from "./Friends";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


const mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    }
};


export default compose(
    connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Friends);
