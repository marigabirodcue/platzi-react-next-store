import Head from "next/head";
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@styles/SendEmail.module.scss';
import logo from '@logos/logo_yard_sale.svg';
import email from '@icons/email.svg';

const SendEmail = () => {
	return (
        <>
            <Head>
                <title>Send Email</title>
            </Head>
            <div className={styles.SendEmail}>
                <div className={styles["form-container"]}>
                    <Image src={logo} alt="logo" className={styles.logo} />
                    <h1 className={styles.title}>Email has been sent!</h1>
                    <p className={styles.subtitle}>Please check your inbox for instructions on how to reset the password</p>
                    <div className={styles["email-image"]}>
                        <Image src={email} alt="email" />
                    </div>
                    <form action="/login">
                        <button type="submit" className={styles["primary-button login-button"]}>Login</button>
                    </form>
                    <p className={styles.resend}>
                        <span>Did not receive the email? </span>
                        <Link href="/send-email"> Resend</Link>
                    </p>
                </div>
            </div>
            </>
	);
};

export default SendEmail;