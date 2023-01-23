import React, { Component } from "react";
import "./NavBar.css";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = { }
  }
  render() {
    return ( 
        <div>
            <div className="navbar_component">
                <div className="navbar_logo"></div>
                <div className="navbar_locator">
                    <div className="navbar_locatorImage"></div>
                    <div className="navbar_location">United States</div>
                </div>
                <div className="navbar_searchcomponent">
                    <div>
                        <select className="navbar_dropdown">
                            <option value="All">All</option>
                            <option value="Alexa">Alexa</option>
                            <option value="Books">Books</option>
                            <option value="Baby">Baby</option>
                            <option value="Beauty">Beauty</option>
                            <option value="Clothes">Clothes</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" className="navbar_searchbox"/>
                    </div>
                    <div className="navbar_searchboxdiv">
                        <div className="navbar_searchicon"></div>
                    </div>
                </div>
                <div className="navbar_text navbar_signin">
                    <div style={{fontSize: "14px"}}>Hello, Jadyn</div>
                    <div style={{fontWeight: "bold"}}>Account & Lists</div>
                </div>
                <div className="navbar_text navbar_returns">
                    <div style={{fontSize: "14px"}}>Returns</div>
                    <div style={{fontWeight: "bold"}}> & Orders</div>
                </div>
                <div className="navbar_text navbar_cart">
                    <div className="cart_image"></div>
                    <div className="cart_item">0</div>
                    <div className="navbar_text_cart">Cart</div>
                </div>
            </div>
            <div className="navbar_footer">
                <div className="navbar_footer_text">Best Seller</div>
                <div className="navbar_footer_text">Mobile</div>
                <div className="navbar_footer_text">Amazon Pay</div>
                <div className="navbar_footer_text">Fashion</div>
                <div className="navbar_footer_text">Electronics</div>
                <div className="navbar_footer_text">Prime</div>
                <div className="navbar_footer_text">New Release</div>
                <div className="navbar_footer_text">Customer Service</div>
                <div className="navbar_footer_text">Computers</div>
                <div className="navbar_footer_text">Home & Kitchen</div>
                <div className="navbar_footer_text2">Uncommon finds for the new year</div>
            </div>
      </div>
    );
  }
}

export default NavBar;