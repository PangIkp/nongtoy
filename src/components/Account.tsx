import React from "react";
import "../Styles/Account.scss";

const Account = () => {
  return (
    <div className="account_content_Info">
      <div className="account_content_info_header">
        <p className="info_header">Information</p>
        <span className="info_header_btn_edit">Edit</span>
      </div>
      <form action="">
        <div className="account_content_info_detail">
          <div className="info_detail">
            <label htmlFor="name">Username</label>
            <input type="text" name="name" id="name" placeholder="PaPang" />
          </div>
          <div className="info_detail">
            <label htmlFor="email">
              Email
              <input
                type="email"
                name="email"
                id="email"
                placeholder="pa@gmail.com"
              />
            </label>
          </div>
          <div className="info_detail">
            <label htmlFor="fname">First name</label>
            <input type="text" name="fname" id="fname" placeholder="Itsara " />
          </div>
          <div className="info_detail">
            <label htmlFor="lname">Last name</label>
            <input
              type="text"
              name="lname"
              id="lname"
              placeholder="Klongklaew"
            />
          </div>
          <div className="info_detail">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              placeholder="0909537878"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Account;
