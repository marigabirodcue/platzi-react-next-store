import Head from "next/head";
import React from 'react';
import OrderItem from '@components/OrderItem';
import styles from "@styles/Orders.module.scss";
import stylesO from "@styles/Checkout.module.scss";

const Orders = () => {
	return (
        <>
            <Head>
                <title>My Orders</title>
            </Head>
            <div className={styles.Orders}>
                <div className={styles["Orders-container"]}>
                    <h1 className={styles.title}>My orders</h1>
                    <div className={styles["Orders-content"]}>
                        <div className={stylesO.order}>
                            <p>
                                <span>03.25.21</span>
                                <span>6 articles</span>
                            </p>
                            <p>$560.00</p>
                        </div>
                    </div>
                    <OrderItem />
                </div>
            </div>
        </>
	);
};

export default Orders;