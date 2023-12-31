import React, { useContext } from 'react';
import Image from 'next/image';
import AppContext from '@context/AppContext';
import addToCartImage from '@icons/bt_add_to_cart.svg';
import addedToCartImage from '@icons/bt_added_to_cart.svg';
import styles from '@styles/ProductItem.module.scss';

const ProductItem = ({ product }) => {
	const { state, addToCart } = useContext(AppContext);

	const handleClick = item => {
		console.log('in cart: ', state.cart.includes(item));
		addToCart(item);
	};

	return (
		<div className={styles.ProductItem}>
			<Image
				loader={() => product.images[0]}
				src={product.images[0]}
				alt={product.title}
				width="100%"
				height="100%"
				layout="responsive"
			/>
			<div className={styles['product-info']}>
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure
					className={styles['more-clickable-area']} onClick={() => handleClick(product)} onKeyPress={() => handleClick(product)} role="presentation"
				>
					{state.cart.includes(product) ? (
						<Image className={(styles['disabled'], styles['add-to-cart-btn'])} src={addedToCartImage} width={50} height={50} alt="added to cart" />
					) : (
						<Image className={styles['add-to-cart-btn', styles.pointer]} src={addToCartImage} alt="add to cart" />
					)}
				</figure>
			</div>
		</div>
	);
};

export default ProductItem;