import React from 'react'
import '../Styles/Cart.scss'

const Cart = () => {
    return (
        <div className="cart_wrapper">
            <div className='cart_container'>
                <p className="cart_header">
                    Cart
                </p>
                <section className='cart_content'>

                    <div className='cart_hero'>
                        <form action="">
                            <div className='cart_shop_item'>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                <div className='cart_head_table'>
                                                    <label htmlFor="chekbox_shop">
                                                        <input type="checkbox" name="chekbox_shop" id="chekbox_shop" />
                                                        <span className='cart_shop_item_title'>POP MART</span>
                                                    </label>
                                                    <span className='show_total_price_inshop'>THB 1,079</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='cart_shop_item_content'>
                                                    <div className='cart_shop_item_img'>
                                                        <input type="checkbox" name="ckekbox_image_product" id="ckekbox_image_product" />
                                                        <label htmlFor="ckekbox_image_product">
                                                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="image_product" />
                                                        </label>

                                                    </div>
                                                    <div className='cart_shop_item_detail'>
                                                        <div className='cart_shop_item_name_cross'>
                                                            <p>HIRONO Reshape Series Figures</p>
                                                            <button className='cart_shop_item_close'>X</button>
                                                        </div>
                                                        <p className='cart_shop_item_price'>THB 690</p>
                                                        <label htmlFor="qty">
                                                            <p className='qty_text'>Quantity</p>
                                                            <div className='cart_shop_item_qty'>
                                                                <button>-</button>
                                                                <input type='text' defaultValue={1} id='qty' />
                                                                <button>+</button>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className='cart_shop_item_content'>
                                                    <div className='cart_shop_item_img'>
                                                        <input type="checkbox" name="ckekbox_image_product" id="ckekbox_image_product" />
                                                        <label htmlFor="ckekbox_image_product">
                                                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="image_product" />
                                                        </label>

                                                    </div>
                                                    <div className='cart_shop_item_detail'>
                                                        <div className='cart_shop_item_name_cross'>
                                                            <p>HIRONO Reshape Series Figures</p>
                                                            <button className='cart_shop_item_close'>X</button>
                                                        </div>
                                                        <p className='cart_shop_item_price'>THB 690</p>
                                                        <label htmlFor="qty">
                                                            <p className='qty_text'>Quantity</p>
                                                            <div className='cart_shop_item_qty'>
                                                                <button>-</button>
                                                                <input type='text' defaultValue={1} id='qty' />
                                                                <button>+</button>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div className='cart_shop_item'>
                                <table>
                                    <thead>
                                        <tr>
                                            <td>
                                                <div className='cart_head_table'>
                                                    <label htmlFor="chekbox_shop">
                                                        <input type="checkbox" name="chekbox_shop" id="chekbox_shop" />
                                                        <span className='cart_shop_item_title'>POP MART</span>
                                                    </label>
                                                    <span className='show_total_price_inshop'>THB 1,079</span>
                                                </div>
                                            </td>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <div className='cart_shop_item_content'>
                                                    <div className='cart_shop_item_img'>
                                                        <input type="checkbox" name="ckekbox_image_product" id="ckekbox_image_product" />
                                                        <label htmlFor="ckekbox_image_product">
                                                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="image_product" />
                                                        </label>

                                                    </div>
                                                    <div className='cart_shop_item_detail'>
                                                        <div className='cart_shop_item_name_cross'>
                                                            <p>HIRONO Reshape Series Figures</p>
                                                            <button className='cart_shop_item_close'>X</button>
                                                        </div>
                                                        <p className='cart_shop_item_price'>THB 690</p>
                                                        <label htmlFor="qty">
                                                            <p className='qty_text'>Quantity</p>
                                                            <div className='cart_shop_item_qty'>
                                                                <button>-</button>
                                                                <input type='text' defaultValue={1} id='qty' />
                                                                <button>+</button>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className='cart_shop_item_content'>
                                                    <div className='cart_shop_item_img'>
                                                        <input type="checkbox" name="ckekbox_image_product" id="ckekbox_image_product" />
                                                        <label htmlFor="ckekbox_image_product">
                                                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="image_product" />
                                                        </label>

                                                    </div>
                                                    <div className='cart_shop_item_detail'>
                                                        <div className='cart_shop_item_name_cross'>
                                                            <p>HIRONO Reshape Series Figures</p>
                                                            <button className='cart_shop_item_close'>X</button>
                                                        </div>
                                                        <p className='cart_shop_item_price'>THB 690</p>
                                                        <label htmlFor="qty">
                                                            <p className='qty_text'>Quantity</p>
                                                            <div className='cart_shop_item_qty'>
                                                                <button>-</button>
                                                                <input type='text' defaultValue={1} id='qty' />
                                                                <button>+</button>
                                                            </div>
                                                        </label>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </form>
                    </div>

                    <div className='cart_total'>
                        <p className='cart_total_title'>Total</p>
                        <p className='cart_total_price'>$300</p>
                        <button className='cart_checkout'>Checkout</button>
                    </div>
                </section>

            </div>


        </div >
    )
}

export default Cart;
