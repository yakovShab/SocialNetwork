import React from "react";
import {connect} from "react-redux";
import Login from "./Login";
import {getUserLogin} from "../../redux/loginReducer";


class LoginContainer extends React.Component {
    // this.props.getUserLogin();

    render() {
        return <Login {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        a: 12
    }

}
export default connect(mapStateToProps, {getUserLogin})(LoginContainer);