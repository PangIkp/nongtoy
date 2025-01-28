import React from 'react'
import '../Styles/Favorite.scss'

const Favorite = () => {
    return (
        <div className="favorite_wrapper">
            <div className='favorite_container'>
                <div className='favorite_header'>
                    <p className='favorite_header_text'>Favorite</p>
                    <div className='favorite_header_btn'>
                        <button className='favorite_header_btn_product'>Product</button>
                        <button className='favorite_header_btn_post'>post</button>
                    </div>
                </div>
                <p className='favorite_text_tatal_product border_bottom'>
                    5 Products
                </p>
                <section className='favorite_main_content'>

                    <div className='favorite_content_product border_bottom'>
                        <div className='favorite_content_product_img'>
                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="product_image" />

                        </div>
                        <div className='favorite_content_product_detail'>
                            <p className='favorite_content_product_name'>HIRONO Reshape Series Figures <span className='favorite_content_product_size'>Box Set</span></p>
                            <p className='favorite_content_product_price'>THB 3,800</p>
                            <div className='flex_jus_between'>
                                <div></div>
                                <button className='favorite_content_product_remove_btn'>remove</button>
                            </div>
                        </div>
                    </div>
                    <div className='favorite_content_product border_bottom'>
                        <div className='favorite_content_product_img'>
                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="product_image" />

                        </div>
                        <div className='favorite_content_product_detail'>
                            <p className='favorite_content_product_name'>HIRONO Reshape Series Figures <span className='favorite_content_product_size'>Box Set</span></p>
                            <p className='favorite_content_product_price'>THB 3,800</p>
                            <div className='flex_jus_between'>
                                <div></div>
                                <button className='favorite_content_product_remove_btn'>remove</button>
                            </div>
                        </div>
                    </div>
                    <div className='favorite_content_product border_bottom'>
                        <div className='favorite_content_product_img'>
                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="product_image" />

                        </div>
                        <div className='favorite_content_product_detail'>
                            <p className='favorite_content_product_name'>HIRONO Reshape Series Figures <span className='favorite_content_product_size'>Box Set</span></p>
                            <p className='favorite_content_product_price'>THB 3,800</p>
                            <div className='flex_jus_between'>
                                <div></div>
                                <button className='favorite_content_product_remove_btn'>remove</button>
                            </div>
                        </div>
                    </div>
                    <div className='favorite_content_product border_bottom'>
                        <div className='favorite_content_product_img'>
                            <img src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="product_image" />

                        </div>
                        <div className='favorite_content_product_detail'>
                            <p className='favorite_content_product_name'>HIRONO Reshape Series Figures <span className='favorite_content_product_size'>Box Set</span></p>
                            <p className='favorite_content_product_price'>THB 3,800</p>
                            <div className='flex_jus_between'>
                                <div></div>
                                <button className='favorite_content_product_remove_btn'>remove</button>
                            </div>
                        </div>
                    </div>


                </section>
            </div>

        </div>
    )
}

export default Favorite