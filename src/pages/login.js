import Head from "next/head";
import React, { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
//import React from "react";
import styles from '@styles/Login.module.scss';
import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
	const form = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		const formData = new FormData(form.current);
		const data = {
			usename: formData.get('email'),
			password: formData.get('password')
		};
		console.log(data);
	};


	return (
		<>
            <Head>
                <title>Login</title>
            </Head>
            <div className={styles.Login}>
                <div className={styles["Login-container"]}>
                    <Image src={logo} alt="logo" className={styles.logo} />
                    <form action="/" className={styles.form} ref={form}>
                        <label htmlFor="email" className={styles.label}>Email address</label>
                        <input type="text" name="email" placeholder="platzi@example.cm" className={styles["input input-email"]} />
                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" name="password" placeholder="*********" className={styles["input input-password"]} />
                        <button
                            onClick={handleSubmit}
                            className={styles["primary-button login-button"]}>
                            Log in
                        </button>
                        <Link href="/password-recovery">Forgot my password</Link>
                    </form>
                    <form action="/signup">
                        <button
                            type="submit"
                            className={styles["secondary-button signup-button"]}
                        >
                            Sign up
                        </button>
                    </form>
                </div>
            </div >
        </>
	);
};

export default Login;
