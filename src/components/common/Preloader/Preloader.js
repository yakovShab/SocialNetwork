import styles from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={styles.preloader}>
            <div className={styles.clockLoader}/>
        </div>
    )
};

export default Preloader;