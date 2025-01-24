import React from 'react'
import '../Styles/Cart.scss'

const Cart = () => {
    return (
        <div>
            <div className="cart">
                <div className='cart_info'>
                    <div className='cart_info_title'>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className='cart_info_items'>
                        <div className='cart_info_item'>
                            <div className='cart_info_item_image'>
                                <img className='cart_info_item_image' src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="Product Image 1" />
                            </div>
                            <div className='cart_info_item_text'>
                                <p className='cart_info_item_title'>HIRONO Reshape Series Figures</p>
                                <p className='cart_info_item_price'>380 Baht</p>
                                <p className='cart_info_item_quantity'>Quantity: 1</p>
                            </div>
                        </div>
                    </div>
                    <div className='cart_info_total'>
                        <p>Total: 380 Baht</p>
                    </div>
                    <div className='cart_info_checkout'>
                        <button className='cart_info_checkout_button'>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
