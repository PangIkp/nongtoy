import React from 'react'
import '../Styles/Account.scss'
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&icon_names=logout" />

const Account = () => {

    return (
        <div className="account_wrapper">
            <div className='account_container'>
                <div className='account_content'>
                    <div className='account_content_myaccount'>
                        <p className='myaccount_text'>Hello, <span className='myaccount_text_name'>PaPang</span></p>
                        <div className='myaccount_btn'>
                            <button className='myaccount_btn_info' disabled>
                                <img src="Images/Info.png" alt="" />
                                <p>Information</p>
                            </button>
                            <button className='myaccount_btn_Orderhistory'>
                                <img src="Images/OrderHistory.png" alt="" />
                                <p>Order History</p>
                            </button>
                            <button className='myaccount_btn_logout'>
                                <img src="Images/Logout.png" alt="" />
                                Logout
                            </button>
                        </div>

                    </div>
                    <div className='account_content_Info'>
                        <div className='account_content_info_header border_bottom' >
                            <p className='info_header_text'>Information</p>
                            <button className='info_header_btn_edit'>Edit</button>
                        </div>
                        <form action="">
                            <div className='account_content_info_detail'>
                                <div className='info_detail'>
                                    <label htmlFor="name">Username</label>
                                    <input type="text" name="name" id="name" placeholder='PaPang' />
                                </div>
                                <div className='info_detail'>
                                    <label htmlFor="email">Email Address
                                        <input type="email" name="email" id="email" placeholder='pa@gmail.com' />
                                    </label>
                                </div>
                                <div className='info_detail'>
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" name="fname" id="fname" placeholder='Itsara ' />
                                </div>
                                <div className='info_detail'>
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" name="lname" id="lname" placeholder='Klongklaew' />
                                </div>
                                <div className='info_detail'>
                                    <label htmlFor="phone">Phone Number</label>
                                    <input type="tel" name="phone" id="phone" placeholder='0909537878' />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Account;