import { Component } from 'react';
import navbarStyle from './navbar.module.css';
export default class Navbar extends Component {
    render() {
        let {cartCount} = this.props;
        return (
            <div className={navbarStyle.nav}>
                <div className={navbarStyle.heading}>MovieCart</div>
                <div>
                    <img
                        alt="cart"
                        className={navbarStyle.cartImage}
                        src="https://cdn-icons-png.flaticon.com/128/3643/3643914.png"
                    />
                    <span className={navbarStyle.cartCount}>{cartCount}</span>
                </div>
            </div>
        );
    }
}
