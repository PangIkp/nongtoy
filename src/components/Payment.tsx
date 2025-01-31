import React from 'react'
import '../Styles/Payment.scss'

const Payment = () => {

    return (
        <div className="payment_wrapper">
            <div className='payment_container'>
                <section className='payment_header flex_between'>
                    <p>
                        Payment
                    </p>
                    <button className='btn_return'>Return to Cart</button>
                </section>

                <section className='payment_hero_con'>
                    <div className='hero_order'>
                        <p className='hero_order_header'>
                            Order Summary
                        </p>
                        <div className='hero_order_content'>
                            <p className='hero_order_content_shopname'>
                                <img className='shopname_img' src="Images/Store.png" alt="asd" />
                                <span>POP MART</span>
                            </p>
                            <div className='hero_order_content_productitem'>

                                <div className='productitem_list'>
                                    <div className='productitem_con'>
                                        <img className='productitem_img' src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="" />
                                        <div className='productitem_detail'>
                                            <div className='productitem_name'>
                                                HIRONO Reshape Series Figures
                                                <span>Box set</span>
                                            </div>
                                            <p className='productitem_qty'>Quantity : 2</p>
                                            <p className='productiten_price'>3800 ฿</p>
                                        </div>
                                    </div>
                                    <div className='productitem_con'>
                                        <img className='productitem_img' src="https://fortunetown.co.th/wp-content/uploads/2023/05/image-5-1024x1024.png" alt="" />
                                        <div className='productitem_detail'>
                                            <div className='productitem_name'>
                                                HIRONO Reshape Series Figures
                                                <span>Box set</span>
                                            </div>
                                            <p className='productitem_qty'>Quantity : 1</p>
                                            <p className='productiten_price'>3800 ฿</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='hero_order_footer'>
                            <div className='flex_between'><p>Subtotal</p><span>11,000 ฿</span></div>
                            <div className='flex_between'><p>Shipping Fee</p><span>50 ฿</span></div>
                            <div className='flex_between'><p>Discount</p><span>0 ฿</span></div>
                            <div className='flex_between total'><p>Total price</p><span>11,050 ฿</span></div>
                        </div>
                    </div>
                    <div className='hero_qr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad beatae illum numquam veritatis molestiae eos quaerat nesciunt suscipit facere, iure laudantium sequi adipisci vero. Vero eius adipisci voluptatem ea non!
                    </div>
                    <div className='hero_ship'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt aliquid quae, blanditiis adipisci, autem quia placeat magnam eligendi ipsum iusto quas est dolorem illum nisi. Quisquam commodi quis ad consectetur.
                    </div>
                </section>

            </div>
        </div>
    )
}

export default Payment