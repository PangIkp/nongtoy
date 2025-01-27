import React from 'react'
import '../Styles/ProductDetail.scss'
import ProductCard from "@/components/ProductCard";

function ProductDetail() {
    return (
        <div>
            <div className="product">
                <section className='product_info'>
                    <div className='product_sample_images'>
                        <div className='image_product'>
                            <div className='box_product_list_images'>
                                <button className='button_images'>
                                    <img className='images_item' src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="Product Image 1" />
                                </button>
                                <button className='button_images'>
                                    <img className='images_item' src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="Product Image 2" />
                                </button>
                                <button className='button_images'>
                                    <img className='images_item' src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="Product Image 3" />
                                </button>

                            </div>
                            <div className='show_product_images'>
                                <img className='show_item' src="https://prod-eurasian-res.popmart.com/default/20231228_175154_803414__1200x1200.jpg?x-oss-process=image/format,webp" alt="" />
                            </div>
                        </div>

                    </div>
                    <div className='product_infoText'>

                        <div className='pproduct_infoText_title_favorite'>
                            <p className='product_infoText_title'>HIRONO Reshape Series Figures</p>
                            <button className='favorite_button' type="button" title="Add to favorites">
                                <img src="Images/heart.png" alt="Heart icon" />
                            </button>

                        </div>

                        <div className='product_infoText_price_status'>
                            <p className='product_infoText_price'>380 Baht</p>
                            <p className='product_infoText_status'>Sold out</p>
                        </div>

                        <div className='product_infoText_description'>
                            <p className='product_infoText_text'>Brand: POP MART</p>
                            <p className='product_infoText_text'>size: 8.6-10.3 CM</p>
                        </div>

                        <div className='product_infoText_size'>
                            <p className='size_text'>Size</p>
                            <div className='size_controls'>
                                <button>Blind Box</button>
                                <button>Box set</button>
                            </div>
                        </div>

                        <div className='product_infoText_quantity'>
                            <form action="">
                                <label htmlFor='quantity' className='quanntity_text'>Quantity</label>
                                <div className='quantity_controls'>
                                    <button>-</button>
                                    <input type='text' disabled defaultValue={1} id='quantity' />
                                    <button>+</button>
                                </div>
                            </form>

                        </div>

                        <div className='product_infoText_button'>
                            <button className='add_to_cart_button'>Add to cart</button>
                            <button className='buy_button'>Buy</button>
                        </div>
                    </div>


                </section>
                <section className='product_history'>
                    <div className='product_history_container'>
                        <div className='product_history_text'>
                            <p className='product_history_title'>Hirono</p>
                            <p className='product_history_description'>Hirono  is a unique art toy of a young boy who embodies the aura of a sad human being. and various emotions at the same time This collection tends to appeal to collectors who like dark pieces. Earth tone colors that can convey emotions, classics, and take us back to the past Plus, they are so adorable that you have to collect them.
                            </p>
                        </div>

                        <div className='product_history_image'>
                            <img src="https://prod-thailand-res.popmart.com/default/20241023_142059_550489____10_____1200x1200.jpg?x-oss-process=image/resize,p_30,format,webp,format,webp" alt="" />
                        </div>
                    </div>
                </section>

                <section className='productcart'>
                    <p className='productcart_title'>Relate Product</p>
                    <div className="product-container">
                        <ProductCard
                            productName="Mega space Moolly 100% Series 2"
                            productPrice="฿10.00"
                            productImage="/Images/Preview1.png"
                            productBrand="POP MART"
                            productQty="New"
                        />

                        <ProductCard
                            productName="Mega space Moolly 100% Series 2"
                            productPrice="฿10.00"
                            productImage="/Images/Preview1.png"
                            productBrand="POP MART"
                            productQty="New"
                        />

                        <ProductCard
                            productName="Mega space Moolly 100% Series 2"
                            productPrice="฿10.00"
                            productImage="/Images/Preview1.png"
                            productBrand="POP MART"
                            productQty="New"
                        />

                        <ProductCard
                            productName="Mega space Moolly 100% Series 2"
                            productPrice="฿10.00"
                            productImage="/Images/Preview1.png"
                            productBrand="POP MART"
                            productQty="New"
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}

export default ProductDetail
