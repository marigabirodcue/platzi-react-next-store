import Head from "next/head";
import React from 'react';
import Image from 'next/image';
import styles from '@styles/PasswordRecovery.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const PasswordRecovery = () => {
	return (
        <>
            <Head>
                <title>Password Recovery</title>
            </Head>
            <div className={styles.PasswordRecovery}>
                <div className={styles["PasswordRecovery-container"]}>
                    <Image src={logo} alt="logo" className={styles.logo} />
                    <h1 className={styles.title}>Password recovery</h1>
                    <p className={styles.subtitle}>Inform the email address used to create your account</p>
                    <form action="/send-email" className={styles.form}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input type="text" id="email" className={styles["input input-email"]} />
                        <input type="submit" value="Confirm" className={styles["primary-button login-button"]} />
                    </form>
                </div>
            </div>
        </>
	);
};

export default PasswordRecovery;
