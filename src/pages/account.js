import Head from "next/head";
import React from 'react';
import styles from '@styles/MyAccount.module.scss';

const Account = () => {
	return (
        <>
            <Head>
                <title>My Account</title>
            </Head>
            <div className={styles.MyAccount}>
                <div className={styles["MyAccount-container"]}>
                    <h1 className="title">My account</h1>
                    <form action="/new-password" className={styles.form}>
                        <div>
                            <label htmlFor="name" className={styles.label}>Name</label>
                            <p className={styles.value}>Camila Yokoo</p>
                            <label htmlFor="email" className="label">Email</label>
                            <p className={styles.value}>camilayokoo@gmail.com</p>
                            <label htmlFor="password" className={styles.label}>Password</label>
                            <p className={styles.value}>*********</p>
                        </div>
                        <input type="submit" value="Edit" className={styles["secondary-button login-button"]} />
                    </form>
                </div>
            </div>
        </>
	);
};

export default Account;