import React from "react";
import styles from "./Login.module.css";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {
    const onSubmit = (formData) => {
        console.log(formData);
    }
    return (
    <div className={styles.loginBlock}>
        <LoginForm onSubmit={onSubmit}/>
    </div>
    )
}

export default Login;