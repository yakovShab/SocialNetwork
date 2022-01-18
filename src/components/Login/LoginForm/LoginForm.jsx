import React from "react";
import styles from "./LoginForm.module.css";
import {Field, Form} from "react-final-form";
import login from "../../../assets/img/keyhole.svg"
import {Input} from "../../common/FormsControls/FormsControls";
import {composeValidators, maxLengthCreator, required} from "../../../utils/validators/validators";

const LoginForm = (props) => {
    return <Form
        onSubmit={props.onSubmit}
        render={props => {
            return <div className={styles.flexBox}>
                <form onSubmit={props.handleSubmit}>
                    <div className={styles.blockImg}>
                        <img src={login} alt="login" className={styles.img}/>
                    </div>
                    <h1 className={styles.title}>Please sign in</h1>

                    <Field name='login'
                           {...props.input}
                           component={Input}
                           placeholder={"Email address"}
                           className={styles.fieldInput}
                           validate={composeValidators(required, maxLengthCreator(10))}/>

                    <Field name='Password'
                           {...props.input}
                           component={Input}
                           placeholder={"Password"}
                           className={styles.fieldInput}
                           validate={composeValidators(required, maxLengthCreator(10))}/>

                    <div className={styles.checkBlock}>
                        <Field type={"checkbox"} name={'rememberMe'} component={'input'}/>
                        <p className={styles.text}>Remember me</p>
                    </div>

                    <button className={styles.buttonLogin}>Sign in</button>
                </form>
            </div>
        }}
    />
}

export default LoginForm;